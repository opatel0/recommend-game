const axios = require('axios')
const mongoose = require('mongoose')
require('dotenv').config()

const game = mongoose.Schema({gameIds: [Number]})

module.exports = {
    model: mongoose.model('Game', game),
    getData: async (game_id, offset) => {
        let link = await axios.get(`https://api.mobygames.com/v1/games/${game_id}?api_key=moby_SQtHjLv5py9hoPeySHi3kpZSa0Y&offset=${offset}`)
        return link
    }
}