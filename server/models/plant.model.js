const mongoose = require('mongoose')

const PlantSchema = new mongoose.Schema({
    commonName : {
        type: String
    },
    scientificName : {
        type: String
    },
    picture : {
        type: String
    },
    description : {
        type: String
    },
    temperature : {
        type: String
    },
    humidity : {
        type: String
    },
    water : {
        type: String
    },
    light : {
        type: String
    },
    soil : {
        type: String
    },
    fertilizer : {
        type: String
    },

}, {timestamps : true})

module.exports.Plant = mongoose.model('Plant', PlantSchema)