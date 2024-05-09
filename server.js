import express from 'express'
import methodOverride from 'method-override'
import { router as recommendationsCtrl } from './controllers/recommendations.js'
import { Games, Recs } from './models/index.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

if (process.env.ON_HEROKU === 'false') {
    // seed route
    app.get('/seed', async (req, res) => {
        await Recs.deleteMany({})
            .then(async deletedData => {
                console.log(`Removed ${deletedData.deletedCount} recommendations`)
                await Games.model.deleteMany({})
            .then(async () => {
                console.log('Removed all contents of games collection')
                Games.model.create({})
            .then(doc => {
                for (let i=0; i<1679; i+=1) {
                    setTimeout(() => {
                        console.log("Progress: "+i*100+"/167876")
                        Games.seedData(i*100)
                            .then(gameData => {
                                for (let game of gameData.data.games) {
                                    Games.model.updateOne(
                                        {_id: doc._id},
                                        { $push: {gameIds: game.game_id}}
                                    ).then(confirmation => {
                                        if (confirmation.adknowledged === false) {
                                            console.log(`Issue pushing game_id ${game.game_id}`)
                                        }
                                    })
                                }
                                console.log('Added 100 game IDs')
                            })
                    }, i*10000)
                }
            })})})
    })
}

// home page to show request form and lure user into inputting search
app.get('/', (req, res) => {
    Recs.find({})
        .then(rec => {
            res.render('home', {rec: rec})
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.use('/recommendations', recommendationsCtrl)
app.get('/*', (req, res) => res.render('404'))

app.listen(process.env.PORT, () => {
    console.log('Express is listening to port ', process.env.PORT)
})