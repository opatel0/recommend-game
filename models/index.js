import mongoose from 'mongoose'
import dotenv from 'dotenv'
import recommendationSchema from './recommendation.js'
import { model, getData, getSeedData, seedDB } from './game.js'
import { fileURLToPath } from 'url'
dotenv.config()

mongoose.connect(process.env.MONGODBURI)
const db = mongoose.connection
db.on('connected', () => console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`))

const Recs = mongoose.model('recommendation', recommendationSchema)
const Games = { model, getData, getSeedData }

export { Recs, Games }

// seed script
const deleteAllRecs = () => Recs.deleteMany({});
const deleteGameModel = () => Games.model.deleteMany({})

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    try {
        await Promise.all([deleteAllRecs(), deleteGameModel()])
        const createdModel = await Games.model.create({})
        seedDB(createdModel, 1679)
    } catch(e) {
        throw new Error(`Error seeding: ${e}`)
    }
}