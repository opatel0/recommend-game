import mongoose from 'mongoose'

const recommendationSchema = new mongoose.Schema({
    searchCriteria: mongoose.Mixed,
    games: [mongoose.Mixed]
})

export default recommendationSchema