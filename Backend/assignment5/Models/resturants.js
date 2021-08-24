const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const Resturnatsechema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Resturants', Resturnatsechema, 'Resturants');   // exporting the model