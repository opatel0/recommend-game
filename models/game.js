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
const seedData = async (offset) => {
    let link = await axios.get(`https://api.mobygames.com/v1/games?api_key=${process.env.MOBYGAMES_APIKEY}&offset=${offset}`)
    return link
}

export {model, getData, seedData}