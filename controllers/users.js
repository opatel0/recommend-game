const express = require('express')
const router = express.Router()
const db = require('../models')

// index
// TO DO: redirect to user dashboard if logged in
router.get('/', (req,res) => {
    res.redirect('/users/new')
})

// create
router.get('/new', (req, res) => res.render('users/new-user'))
router.post('/new', (req, res) => {
    // STRETCH: add logic to prevent repeat usernames
    db.User.create(req.body)
        .then(user => res.redirect(req.body.username))
})

// show
router.get('/:id', async (req, res) => {
    await db.User.find({'username': req.params.id})
        .then(async user => {
            recs = {}
            for (rec of user[0].recommendations) {
                await db.Recs.find({_id: rec})
                    .then(doc => {
                        recs[rec] = doc
                    })
            }
            res.render('users/dashboard', {recs: recs})
        })
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