const {User} = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.register = (req, res)=>{
    User.create(req.body)
        .then(user =>{
            const userToken = jwt.sign({id: user._id}, process.env.SECRET_KEY);
            res
                .cookie('userToken', userToken, {httpOnly: true})
                .json({message: 'success', user:user});
        })
        .catch(err => {
            res.status(400).json(err)
        });
}

module.exports.cookie = (req, res)=>{
    res.cookie('test cookie', 'test cookie', {httpOnly:true}).json("success")
}


module.exports.login = async(req, res) =>{
    const user = await User.findOne({email: req.body.email});
    if(user === null) {
        return res.sendStatus(400);
    }
    const corrPassword = await bcrypt.compare(req.body.password, user.password);
    if(!corrPassword){
        return res.sendStatus(400);
    }
    const userToken = jwt.sign({id: user._id}, process.env.SECRET_KEY);
    res
        .cookie('userToken', userToken, {httpOnly: true})
        .json({message: 'success'});
}


module.exports.logout = (req, res) =>{
    res.clearCookie('userToken')
    res.sendStatus(200)
}