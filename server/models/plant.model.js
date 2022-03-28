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

// Create Plant variable that is exported, 
// this will allow us to import and enable CRUD functionality
module.exports.Plant = mongoose.model('Plant', PlantSchema)