const mongoose = require('mongoose'); // Fixing the typo in 'mongoose'

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
});


const User = mongoose.model("User", schema); 

module.exports = User; 
