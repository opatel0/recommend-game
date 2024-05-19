import express from 'express'
import { Games, Recs } from '../models/index.js'

const router = express.Router()

router.get('/', async (res) => {
    const recs = await Recs.find({})
    res.render('recommendations/feed', {recs})
})

router.get('/new', (res) => res.render('recommendations/request-form'))

router.post('/new', async (req, res) => {
    const gameId = {'randomId': Math.floor(Math.random() * 100)};
    const doc = await Games.model.find({})
    const data = await Games.getData(doc[0].gameIds[gameId.randomId])
    const rec = await Recs.create({searchCriteria: gameId, games: data.data})
    res.render('recommendations/rec-details', {rec})
})

router.get('/:id', async (req, res) => {
    const rec = await Recs.findById({_id: req.params.id})
    res.render('recommendations/rec-details', {rec})
})

router.delete('/:id', async (req, res) => {
    const rec = await Recs.deleteOne({_id: req.params.id})
    res.redirect('/recommendations')
})

export {router}