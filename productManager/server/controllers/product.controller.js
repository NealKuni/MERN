const Product = require('../models/product.model');

module.exports.index = (req, res) => {
  console.log('Back end is operational')       
  res.json({        
      message: "Hello World"
  });
}

module.exports.createNewProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({
    title,
    price,
    description
    })
      .then( newProduct => {
        console.log(`NEW PRODUCT OBJECT: ${newProduct}`)
        res.json(newProduct)
      })
      .catch(err => {
        res.status(400).json(err)
      });
}
module.exports.getAllProducts = (req,res) => {
  console.log("inside get all");
  Product.find({})
    .then((allProducts) => {
      console.log(allProducts);
      res.json(allProducts);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    })
}

module.exports.getOneProduct = (req, res) => {
  console.log("inside get one product")
  console.log("looking for id: " + req.params.id)
  Product.findOne({_id:req.params.id})
    .then(product => {
      console.log(product);
      res.json(product);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
}


module.exports.updateProduct = (req, res) => {
  console.log("inside update product")
  console.log("looking for id: " + req.params.id)
  Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => {
      console.log( updatedProduct);
      res.json(updatedProduct);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    })
  }


module.exports.deleteProduct = (req, res) => {
  console.log("inside delete product");
  console.log("looking for id: " + req.params.id)
  Product.findByIdAndDelete(req.params.id)
    .then((deletedProduct) => {
      console.log(deletedProduct)
      res.json(deletedProduct)
    })
    .catch((err) =>{
      console.log(err)
      res.status(400).json(err)
    })
}