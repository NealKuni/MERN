const Pet = require('../models/pet.model');

module.exports.index = (req, res) => {
  console.log('Back end is operational')       
  res.json({        
      message: "Hello World"
  });
}
 
module.exports.createNewPet = (req, res) => {
  const { petName, petType, petDescription } = req.body;
  const { skill1, skill2, skill3 } = req.body;
  const petSkills = [ skill1, skill2, skill3 ];
  req.body.petSkills = petSkills;
  Pet.create({
    petName,
    petType,
    petDescription,
    petSkills
    })
      .then( newPet => {
        console.log(`NEW PET OBJECT: ${newPet}`)
        res.json(newPet)
      })
      .catch(err => {
        res.status(400).json(err)
      });
}

module.exports.getAllPets = (req,res) => {
  console.log("inside get all");
  Pet.find({})
    .then((allPets) => {
      console.log(allPets);
      res.json(allPets);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    })
}

module.exports.getOnePet = (req, res) => {
  console.log("inside get one pet")
  console.log("looking for id: " + req.params.id)
  Pet.findOne({_id:req.params.id})
    .then(pet => {
      console.log(pet);
      res.json(pet);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
}

module.exports.updatePet = (req, res) => {
  console.log("inside update pet")
  console.log("looking for id: " + req.params.id)
  const { skill1, skill2, skill3 } = req.body;
  const petSkills = [ skill1, skill2, skill3 ];
  req.body.petSkills = petSkills;
  Pet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPet) => {
      console.log( updatedPet);
      res.json(updatedPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    })
  }

  module.exports.deletePet = (req, res) => {
    console.log("inside delete pet");
    console.log("looking for id: " + req.params.id)
    Pet.findByIdAndDelete(req.params.id)
      .then((deletedPet) => {
        console.log(deletedPet)
        res.json(deletedPet)
      })
      .catch((err) =>{
        console.log(err)
        res.status(400).json(err)
      })
  }