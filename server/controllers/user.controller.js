const {User} = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { Plant } = require("../models/plant.model");
const jwt_decode = require("jwt-decode");

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

module.exports.addFavorite = async(req, res) => {
    try{
        const newPlant = await Plant.findOne({_id:req.body.plantId})
        
        const decoded = jwt_decode(req.cookies.userToken)
        const newUser = await User.findOne({_id:decoded.id})
        let favoriteIndex = -1;
        const {favorites} = newUser;

        for (let i = 0; i < favorites.length; i++) {
            if (newUser.favorites[i].equals(newPlant)) {
                favoriteIndex = i;
                break;
            }
        }
        console.log(favoriteIndex);
        if(favoriteIndex === -1){
            await User.findOneAndUpdate({_id:decoded.id}, {$push: {favorites: newPlant}}, {new: true})
        } 
        //else {
        //     let favoritesCopy = newUser.favorites.slice();
        //     favoritesCopy.splice(favoriteIndex, 1);
        //     await User.findOneAndUpdate({_id:decoded.id}, {favorites: favoritesCopy}, {new: true})
        // }
            

        
        res.sendStatus(204)
    }catch(err){
        res.status(400).json(err)
    }
// req.cookies.userToken
}

module.exports.getUser = async (req, res) => {
    try{
        const decoded = jwt_decode(req.cookies.userToken)
        const newUser = await User.findOne({_id:decoded.id})
        res.status(200).send(newUser)
    }catch(err){
        res.status(500).json(err)
    }
    

}