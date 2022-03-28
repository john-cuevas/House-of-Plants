const {Plant} = require("./../models/plant.model")

// get all
module.exports.allPlants = (req,res) =>{
    Plant.find()
        .then(plants => res.json(plants))
        .catch(err => res.status(400).json(err))

}
// get one
module.exports.onePlant = (req,res) =>{
    Plant.findOne({_id: req.params.id})
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json(err))
}
// create
module.exports.createPlant = (req,res) =>{
    Plant.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))

}
// update
module.exports.updatePlant = (req,res) =>{
    Plant.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}
// delete
module.exports.deletePlant = (req,res) =>{
    Plant.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}
