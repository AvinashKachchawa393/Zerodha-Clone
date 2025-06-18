const mongoose = require('mongoose');
const {UsersSchema} = require('../schemas/UsersSchema');
const passportLocalMongoose = require('passport-local-mongoose');

UsersSchema.plugin(passportLocalMongoose);

const Users = new mongoose.model('Users',UsersSchema);

module.exports = {Users};