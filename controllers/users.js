const express = require('express')
const router = express.Router()

// index
router.get('/', (req,res) => res.send('Show all users'))

// create
router.get('/new', (req, res) => res.send('Create new user form'))
router.post('/new', (req, res) => res.send('Submits new user to db and renders new user page'))

// show
router.get('/:id', (req, res) => res.send('Show individual user page for user ' + req.params.id))

// delete
router.delete('/:id', (req, res) => res.send('Deleted page for user ' + req.params.id))

// edit
router.get('/:id/edit', (req, res) => res.send('Show edit form for user ' + req.params.id))
router.put('/:id/edit', (req, res) => res.send('Edits saved for user ' + req.params.id))

module.exports = router