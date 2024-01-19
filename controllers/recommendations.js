const express = require('express')
const router = express.Router()
const db = require('../models')

// index
// STRETCH: give users option to make recommendations hidden from index page
router.get('/', (req, res) => {
    db.Recs.find({})
        .then(recs => res.json(recs))
})

// new
router.get('/new', (req, res) => res.send('New recommendation form'))
// STRETCH: new recommendations unassociated with user accounts somehow persist between sessions in a user's browser, with an option to clear them out
router.post('/new', (req, res) => {
    db.Recs.create(req.body)
        .then(rec => res.json(rec))
})

// show
router.get('/:id', (req, res) => {
    // iterates through all users to find matching id
    // TO DO: recommendation id should be an input (req.query maybe?)
    // STRETCH: user can create new recommendation with form filled out with all existing recommendation search criteria, as a way to make "edits" and keeping the old one (which can be deleted)
    db.Recs.find({_id: req.params.id})
        .then(rec => res.json(rec))
})

// delete
router.delete('/:id', (req, res) => {
    db.Recs.deleteOne({_id: req.params.id})
        .then(rec => res.json(rec))
})

module.exports = router