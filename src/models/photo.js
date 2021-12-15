const { Schema, model } = require('mongoose');

const PhotoSchema = Schema({
    label: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = model('photo', PhotoSchema);