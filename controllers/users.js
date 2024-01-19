const express = require('express')
const router = express.Router()
const db = require('../models')

// index
// TO DO: redirect to user dashboard if logged in
router.get('/', (req,res) => {
    res.redirect('/users/new')
})

// create
router.get('/new', (req, res) => res.send('Create new user form'))
router.post('/new', (req, res) => {
    db.User.create(req.body)
        .then(user => res.json(user))
})

// show
router.get('/:id', (req, res) => {
    db.User.find({'username': req.params.id})
        .then(user => res.json(user))
})

// delete
router.delete('/:id', (req, res) => {
    db.User.deleteOne({'username': req.params.id})
        .then(user => res.json(user))
})

// edit
router.get('/:id/edit', (req, res) => res.send('Show edit form for user ' + req.params.id))
router.put('/:id/edit', (req, res) => {
    db.User.updateOne(
        {'username': req.params.id},
        req.body
    ).then(user => res.json(user))
})

module.exports = router