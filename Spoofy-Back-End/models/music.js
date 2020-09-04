const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
    Artist: { type: String, required: true },
    Album: { type: String, required: true },
}, { timestamps: true });

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;
