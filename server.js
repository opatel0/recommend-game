import express from 'express'
import methodOverride from 'method-override'
import { router as recommendationsCtrl } from './controllers/recommendations.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))
app.use('/recommendations', recommendationsCtrl)
app.get('/*', (req, res) => res.render('404'))

app.listen(process.env.PORT, () => {
    console.log('Express is listening to port ', process.env.PORT)
})