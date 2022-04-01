const UserController = require("../controllers/user.controller")
const {authenticate} = require("../configs/jwt.config")

module.exports = app =>{
    app.get(`/api/cookie`, UserController.cookie)
    app.post(`/api/register`, UserController.register)
    app.post(`/api/login`, UserController.login)
    app.get(`/api/logout`, UserController.logout)
    app.delete("/api/favorites", UserController.addFavorite)
    app.put("/api/favorites", UserController.addFavorite)
    app.get("/api/user", UserController.getUser)
}
//figure out where I need to put the authenticate