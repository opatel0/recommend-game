require('dotenv').config()
const path = require('path')
const express = require('express')
const methodOverride = require('method-override')

const app = express()
const usersCtrl = require('./controllers/users')
const recommendationsCtrl = require('./controllers/recommendations')
const db = require('./models')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// home page to show request form and lure user into inputting search
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/about', (req, res) => {
    res.send('About Page')
})
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
                        await db.Recs.insertMany(db.seedData.recommendations)
                            .then(async createdData => {
                                console.log(`Added ${createdData.length} recommendations`)
                                for (let i=0; i<createdData.length; i++) {
                                    await db.User.find({})
                                        .then(async users => {
                                            db.User.updateOne(
                                                {username: users[i].username},
                                                { $push: {recommendations: createdData[i]._id}}
                                            ).then(user => console.log(user))
                                        })
                                }
                                await db.User.find({})
                                    .then(users => res.json(users))
                            })
                    })
                })
        })
})
app.use('/users', usersCtrl)
app.use('/recommendations', recommendationsCtrl)
app.get('/*', (req, res) => res.send('404'))

app.listen(process.env.PORT, () => {
    console.log('Express is listening to port ', process.env.PORT)
})