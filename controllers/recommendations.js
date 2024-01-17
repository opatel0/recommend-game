const express = require('express')
const router = express.Router()

// index
router.get('/', (req, res) => res.send('Recommendations feed'))

// new
router.get('/new/:recId', (req, res) => res.send('New recommendation form'))
router.post('/new/:recID', (req, res) => res.send('Displays new recommendation'))

// show
router.get('/:id', (req, res) => res.send('Detailed recommendation page'))

// delete
router.delete('/:id', (req, res) => res.send('Deletes recommendation'))

module.exports = router