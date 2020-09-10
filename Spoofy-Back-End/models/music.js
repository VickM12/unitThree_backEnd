const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
    username: { type: String, required: true },
    artist: { type: String, required: true },
    track: { type: String, required: true },
    image: {type: String, required: true}
}, { timestamps: true });

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;
