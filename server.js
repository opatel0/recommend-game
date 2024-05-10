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