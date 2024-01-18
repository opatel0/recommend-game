const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    searchCriteria: mongoose.Mixed,
    games: [mongoose.Mixed]
})

module.exports = recommendationSchema