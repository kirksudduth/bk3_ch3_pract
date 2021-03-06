console.log("This is main.js");

// Lightning Exercise 1: Write a factory function that
// creates an object that represents a doctor. The
// function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice
import { pets, bowWowKennels } from "./pets.js";
const createDoctor = (name, specialty, address) => {
  return {
    docName: name,
    docSpecialty: specialty,
    docAddress: address,
  };
};

const mary = createDoctor("Mary", "Opthomalogist", "300 North Boulevard");
console.log("createDoctor", mary);

// Pets Stuff

console.table(pets.createPets("Dianne", "Golden Pinscher"));
console.log(bowWowKennels);
