const mongoose = require('mongoose')
const schema = mongoose.schema

const itemSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    }
}, {timestamps: true})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item