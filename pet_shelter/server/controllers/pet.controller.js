const Pet = require('../models/pet.model');

module.exports.index = (req, res) => {
  console.log('Back end is operational')       
  res.json({        
      message: "Hello World"
  });
}
 
module.exports.createNewPet = (req, res) => {
  const { petName, petType, petDescription } = req.body;
  Pet.create({
    petName,
    petType,
    petDescription,
    })
      .then( newPet => {
        console.log(`NEW PET OBJECT: ${newPet}`)
        res.json(newPet)
      })
      .catch(err => {
        res.status(400).json(err)
      });
}