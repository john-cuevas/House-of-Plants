const UserController = require("../controllers/user.controller")
const {authenticate} = require("../configs/jwt.config")

module.exports = app =>{
    app.get(`/api/cookie`, UserController.cookie)
    app.post(`/api/register`, UserController.register)
    app.post(`/api/login`, UserController.login)
    app.get(`/api/logout`, UserController.logout)
}
//figure out where I need to put the authenticate