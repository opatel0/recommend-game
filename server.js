require('dotenv').config()
const path = require('path')
const express = require('express')
const methodOverride = require('method-override')

const app = express()
const usersCtrl = require('./controllers/users')
const recommendationsCtrl = require('./controllers/recommendations')
const db = require('./models')
const game = require('./models/game')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

if (process.env.ON_HEROKU === 'false') {
    // seed route
    app.get('/seed', async (req, res) => {
        await db.User.deleteMany({})
            .then(async deletedData => {
                console.log(`Removed ${deletedData.deletedCount} users`)
                await db.Recs.deleteMany({})
                    .then(async deletedData => {
                        console.log(`Removed ${deletedData.deletedCount} recommendations`)
                        await db.User.insertMany(db.seedData.users)
                        .then(async createdData => {
                            console.log(`Added ${createdData.length} users`)
                            db.Games.model.deleteMany({})
                                .then(async () => {
                                    console.log('Removed all contents of games collection')
                                    db.Games.model.create({})
                                    .then(doc => {
                                        for (let i=0; i<1679; i+=1) {
                                            setTimeout(() => {
                                                console.log("Progress: "+i*100+"/167876")
                                                db.Games.seedData(i*100)
                                                    .then(gameData => {
                                                        for (let game of gameData.data.games) {
                                                            db.Games.model.updateOne(
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
                                            }, i*5000)
                                        }
                                    })
                                })
                            await db.User.find({})
                                .then(users => res.json(users))
                        })
                    })
            })
    })
}

// home page to show request form and lure user into inputting search
app.get('/', (req, res) => {
    db.Recs.find({})
        .then(rec => {
            res.render('home', {rec: rec})
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.use('/users', usersCtrl)
app.use('/recommendations', recommendationsCtrl)
app.get('/*', (req, res) => res.render('404'))

app.listen(process.env.PORT, () => {
    console.log('Express is listening to port ', process.env.PORT)
})