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
            res.json(newProduct)
        })
        .catch(err => {
            res.status(400).json(err)
        });
}

module.exports.getAll = (req,res) => {
    console.log("inside get all");
    Product.find()
    .then((allProducts) => {
        console.log(allProducts);
        res.json(allRestaurants);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
}