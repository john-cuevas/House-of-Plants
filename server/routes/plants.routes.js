const PlantController = require('../controllers/plant.controller')

module.exports = app => {
    app.get("/api/plants", PlantController.allPlants)
    app.get("/api/plants/:id", PlantController.onePlant)
    app.post("/api/plants", PlantController.createPlant)
    app.put("/api/plants/:id", PlantController.updatePlant)
    app.delete("/api/plants/:id", PlantController.deletePlant)
}
