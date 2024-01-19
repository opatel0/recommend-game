const mongoose = require('mongoose')
const recommendationSchema = require('./recommendation.js')

const user = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    recommendations: [mongoose.Types.ObjectId]
})

module.exports = mongoose.model('User', user)