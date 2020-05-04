console.log("I want all the pets");

let bowWowKennels = [];

const pets = {
  createPets: function (name, breed) {
    return {
      petName: name,
      petBreed: breed,
    };
    // let petPush = bowWowKennels.push(pets.createPets(name, breed));
    // petPush;
    // console.log(petPush);
    // .then(bowWowKennels.push(petObj))
  },
};
bowWowKennels.push(pets.createPets("dianne", "shnauzer"));
bowWowKennels.push(pets.createPets("sparkle", "pitbull"));
bowWowKennels.push(pets.createPets("arlo", "bloodhound"));
export { pets, bowWowKennels };
