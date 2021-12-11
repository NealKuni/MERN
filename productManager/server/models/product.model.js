const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "A product name is required."],
        minlength: [5, "A product name must be at least 5 characters long"],
    },
    price: { 
        type: Number,
        required: [true, "A product price is required."],
    },
    description: { 
        type: String,
        required: [true, "A product description is required."],
        minlength: [5, "A product description must be at least 15 characters long"],
    }
}, {timestamps: true});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
