const Author = require('../models/author.model');

module.exports.addAuthor = (req, res) => {
  const { name } = req.body;
  Author.create({
    name
  })
  .then(author => res.json(author))
  .catch(err => res.status(400).json(err));
}

module.exports.getOneAuthor = (req, res) => {
  console.log('inside get one author');
  Author.findById(req.params.id)
    .then(author => {
      console.log(author);
      res.json(author);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })

}

module.exports.getAllAuthors = (req, res)=> {
  console.log('inside all Authors');
  Author.find({})
  .then(allAuthors => {
    console.log(allAuthors);
    res.json(allAuthors)
  })
  .catch(err=> {
    console.log(err);
    res.status(400).json(err);
  })
}


module.exports.updateAuthor = (req, res) => {
  console.log('inside update');
  Author.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
    runValidators: true,
  })
    .then((updateAuthor) => {
      console.log(updateAuthor);
      res.json(updateAuthor);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    })
    
}

module.exports.deleteAuthor = (req, res) => {
  console.log("inside delete author");
  console.log("looking for id: " + req.params.id)
  Author.findByIdAndDelete(req.params.id)
    .then((deletedAuthor) => {
      console.log(deletedAuthor)
      res.json(deletedAuthor)
    })
    .catch((err) =>{
      console.log(err)
      res.status(400).json(err)
    })
}