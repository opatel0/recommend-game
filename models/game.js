const axios = require('axios')
const mongoose = require('mongoose')
require('dotenv').config()

const game = mongoose.Schema({gameIds: [Number]})

module.exports = {
    model: mongoose.model('Game', game),
    getData: async (game_id) => {
        let link = await axios.get(`https://api.mobygames.com/v1/games/${game_id}?api_key=${process.env.MOBYGAMES_APIKEY}`)
        return link
    },
    seedData: async (offset) => {
        let link = await axios.get(`https://api.mobygames.com/v1/games?api_key=${process.env.MOBYGAMES_APIKEY}&offset=${offset}`)
        return link
    }
}