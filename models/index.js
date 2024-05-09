import mongoose from 'mongoose'
import dotenv from 'dotenv'
import recommendationSchema from './recommendation.js'
import { model, getData, seedData } from './game.js'
dotenv.config()

mongoose.connect(process.env.MONGODBURI)
const db = mongoose.connection
db.on('connected', () => console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`))

const Recs = mongoose.model('recommendation', recommendationSchema)
const Games = { model, getData, seedData }

export { Recs, Games }