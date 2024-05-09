import express from 'express'
import { Games, Recs } from '../models/index.js'

const router = express.Router()

// index
// STRETCH: give users option to make recommendations hidden from index page
router.get('/', (req, res) => {
    Recs.find({})
        .then(recs => res.render('recommendations/feed', {recs: recs}))
})

// new
router.get('/new', (req, res) => res.render('recommendations/request-form'))
// STRETCH: new recommendations unassociated with user accounts somehow persist between sessions in a user's browser, with an option to clear them out
router.post('/new', (req, res) => {
    let gameId = {};
    gameId['randomId'] = Math.floor(Math.random() * 100)
    Games.model.find({})
        .then(doc => {
            Games.getData(doc[0].gameIds[gameId.randomId])
                .then(gameData => {
                    Recs.create({searchCriteria: gameId, games: gameData.data})
                        .then(rec => res.render('recommendations/rec-details', {rec: rec}))
                })
        })
})

// show
router.get('/:id', (req, res) => {
    // STRETCH: user can create new recommendation with form filled out with all existing recommendation search criteria, as a way to make "edits" and keeping the old one (which can be deleted)
    Recs.findById({_id: req.params.id})
        .then(rec => res.render('recommendations/rec-details', {rec: rec}))
})

// delete
router.delete('/:id', (req, res) => {
    Recs.deleteOne({_id: req.params.id})
        .then(rec => res.redirect('/recommendations'))
})

export {router}