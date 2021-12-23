const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
  app.get('/api/author', AuthorController.getAllAuthors);
  app.post('/api/author', AuthorController.addAuthor);
  app.put('/api/author/:id', AuthorController.updateAuthor);
  app.get('/api/author/:id', AuthorController.getOneAuthor);
  app.delete('/api/author/:id', AuthorController.deleteAuthor);

}