const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')


const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    birthday: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
})

UserSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', UserSchema);
