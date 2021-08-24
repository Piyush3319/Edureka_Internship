const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const Mealtypechema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Mealtype', Mealtypechema, 'Mealtype');   // exporting the model