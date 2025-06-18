const {Schema} = require('mongoose');
const mongoose = require('mongoose');


let UsersSchema = new Schema({
    email:{
        type:String,
        require
    }
});

module.exports = {UsersSchema};