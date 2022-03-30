const mongoose = require('mongoose')
const {Plant} = require("./../models/plant.model") //not sure if I need this
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val=> /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    // favorite: {PlantSchema}, // might need to change this as well when I start working on favorites

}, {timestamps: true});


UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash=>{
            this.password = hash
            next()
        })
})





module.exports.User = mongoose.model('User', UserSchema);
