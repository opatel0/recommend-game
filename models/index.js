import mongoose from 'mongoose'
import dotenv from 'dotenv'
import recommendationSchema from './recommendation.js'
import { model, getData, seedData } from './game.js'
import { fileURLToPath } from 'url'
dotenv.config()

mongoose.connect(process.env.MONGODBURI)
const db = mongoose.connection
db.on('connected', () => console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`))

const Recs = mongoose.model('recommendation', recommendationSchema)
const Games = { model, getData, seedData }

export { Recs, Games }

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    await Recs.deleteMany({})
        .then(async deletedData => {
            console.log(`Removed ${deletedData.deletedCount} recommendations`)
            await Games.model.deleteMany({})
        .then(async () => {
            console.log('Removed all contents of games collection')
            Games.model.create({})
        .then(doc => {
            for (let i=0; i<1679; i+=1) {
                setTimeout(() => {
                    console.log("Progress: "+i*100+"/167876")
                    Games.seedData(i*100)
                        .then(gameData => {
                            for (let game of gameData.data.games) {
                                Games.model.updateOne(
                                    {_id: doc._id},
                                    { $push: {gameIds: game.game_id}}
                                ).then(confirmation => {
                                    if (confirmation.adknowledged === false) {
                                        console.log(`Issue pushing game_id ${game.game_id}`)
                                    }
                                })
                            }
                            console.log('Added 100 game IDs')
                        })
                }, i*10000)
            }
        })})})
}