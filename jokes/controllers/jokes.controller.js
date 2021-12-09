const Joke = require("../models/jokes.model");


module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( (allJokes) => {
            res.json({ joke: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then( (newCreatedJoke) => {
            console.log("created new joke")
            res.json({ joke: newCreatedJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findById((req.params.id ))
        .then( oneJoke => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then( (updateJoke) => {
            res.json({ jokes: updateJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteAnExistingJoke = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}