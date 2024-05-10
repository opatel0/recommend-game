import axios from 'axios'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const game = mongoose.Schema({gameIds: [Number]})
const model = mongoose.model('Game', game)
const getData = async (game_id) => {
    let link = await axios.get(`https://api.mobygames.com/v1/games/${game_id}?api_key=${process.env.MOBYGAMES_APIKEY}`)
    return link
}
const getSeedData = async (offset) => {
    let link = await axios.get(`https://api.mobygames.com/v1/games?api_key=${process.env.MOBYGAMES_APIKEY}&offset=${offset}`)
    return link
}
// write 100 game IDs from API to DB every 10 seconds 
// # of times specified by count parameter
// tested 1s, 5s, and 10s. Only 10s ran without 429 error
const seedDB = async function (seededModel, count) {
    for (let i=0; i<count; i+=1) {
        setTimeout(async () => {
            let seededGames = await getSeedData(i*100)
            for (let game of seededGames.data.games) {
                let gameData = await model.updateOne(
                    {_id: seededModel._id},
                    { $push: {gameIds: game.game_id}}
                )
                if (!gameData.acknowledged) {
                    console.log(`Issue pushing game_id ${game.game_id}`)
                }
            }
            console.log("Progress: "+i*100+"/167876")
        }, i*10000)
    }
}

export {model, getData, getSeedData, seedDB}