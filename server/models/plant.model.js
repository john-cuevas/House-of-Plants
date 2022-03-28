const mongoose = require('mongoose')

const PlantSchema = new mongoose.Schema({
    commonName : {
        type: String,
        required: [true, "Common name is required"]
    },
    scientificName : {
        type: String,
        required: [true, "Scientific name is required"]
    },
    picture : {
        type: String,
        required: [true, "Picture is required"]
    },
    description : {
        type: String,
        required: [true, "Description is required"]
    },
    temperature : {
        type: String,
        required: [true, "Temperature is required"]
    },
    humidity : {
        type: String,
        required: [true, "Humidity is required"]
    },
    water : {
        type: String,
        required: [true, "Water is required"]
    },
    light : {
        type: String,
        required: [true, "Lighting is required"]
    },
    soil : {
        type: String,
        required: [true, "Soil is required"]
    },
    fertilizer : {
        type: String,
        required: [true, "Fertilizer is required"]
    },
    easy : {
        type: Boolean,
        required: [true, "Ease of care is required"]
    }

}, {timestamps : true})

module.exports.Plant = mongoose.model('Plant', PlantSchema)