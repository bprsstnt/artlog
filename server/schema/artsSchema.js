const mongoose = require('mongoose');
const { Schema } = mongoose;

const artSchema = new Schema ({
    name: String,
    date: String,
    note: String,
    location: String,
    cupless: {
        name: String
    }
})

module.exports = {artSchema};