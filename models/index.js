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
    const deletedRecs = await Recs.deleteMany({})
    console.log(`Removed ${deletedRecs.deletedCount} recommendations`)
    const deletedModel = await Games.model.deleteMany({})
    console.log('Removed all contents of games collection')
    const createdModel = await Games.model.create({})
    for (let i=0; i<1679; i+=1) {
        setTimeout(async () => {
            console.log("Progress: "+i*100+"/167876")
            let seededGames = await Games.seedData(i*100)
            console.log(seededGames)
            for (let game of seededGames.data.games) {
                let gameData = await Games.model.updateOne(
                    {_id: createdModel._id},
                    { $push: {gameIds: game.game_id}}
                )
                console.log(gameData)
                if (!gameData.acknowledged) {
                    console.log(`Issue pushing game_id ${game.game_id}`)
                }
            }
        }, i*10000)
    }
}