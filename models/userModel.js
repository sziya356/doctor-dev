const mongoose = require('mongoose')


const usereSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const userModel = mongoose.model("users", usereSchema);
module.exports = userModel;