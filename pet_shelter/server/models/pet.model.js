const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  petName: { 
    type: String,
    required: [true, "A pet name is required."],
    minlength: [3, "A pet name must be at least 3 characters long"],
  },
  petType: {  
    type: String,
    required: [true, "A pet type is required."],
    minlength: [3, "A pet type must be at least 3 characters long"],
  },
  petDescription: { 
    type: String,
    required: [true, "A pet description is required."],
    minlength: [3, "A pet description must be at least 3 characters long"],
  }
}, {timestamps: true});

// the model will join the collection and the schema
const Pet = mongoose.model('pets', PetSchema);

module.exports = Pet;