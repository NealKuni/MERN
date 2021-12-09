const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    joke: {
        type: String
    }
});

const Joke = mongoose.model('jokes', JokeSchema);

module.exports = Joke; 