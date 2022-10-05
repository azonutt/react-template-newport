const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})
const UserModel = mongoose.model('login', UserSchema)
module.exports = UserModel;