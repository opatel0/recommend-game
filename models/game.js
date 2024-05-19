import axios from 'axios'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const game = mongoose.Schema({gameIds: [Number]})
const model = mongoose.model('Game', game)
const getData = async (game_id) => {
    const link = `https://api.mobygames.com/v1/games/${game_id}?api_key=${process.env.MOBYGAMES_APIKEY}`
    const data = await axios.get(link)
    return data
}
const getSeedData = async (offset) => {
    const link = `https://api.mobygames.com/v1/games?api_key=${process.env.MOBYGAMES_APIKEY}&offset=${offset}`
    const data = await axios.get(link)
    return data
}
// write 100 game IDs from API to DB every 10 seconds 
// # of times specified by count parameter
// tested 1s, 5s, and 10s. Only 10s ran without 429 error
const seedDB = async function (seededModel, count) {
    const millisecondInterval = 10000
    const numberOfGamesReturned = 100
    for (let i = 0; i < count; i += 1) {
        setTimeout(async () => {
            let seededGames = await getSeedData(i * numberOfGamesReturned)
            for (let game of seededGames.data.games) {
                let gameData = await model.updateOne(
                    {_id: seededModel._id},
                    { $push: {gameIds: game.game_id}}
                )
                if (!gameData.acknowledged) {
                    console.log(`Issue pushing game_id ${game.game_id}`)
                }
            }
            console.log(`Progress: ${i * numberOfGamesReturned}/167876`)
        }, i * millisecondInterval)
    }
}

export {model, getData, getSeedData, seedDB}