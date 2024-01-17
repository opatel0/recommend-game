require('dotenv').config()
const path = require('path')
const express = require('express')
const methodOverride = require('method-override')

const app = express()
const usersCtrl = require('./controllers/users')
const recommendationsCtrl = require('./controllers/recommendations')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/user', usersCtrl)
app.use('/recommendations', recommendationsCtrl)
app.get('/seed', (req, res) => res.send(('seed')))
app.get('/*', (req, res) => res.send('404'))

app.listen(process.env.PORT, () => {
    console.log('Express is listening to port ', process.env.PORT)
})