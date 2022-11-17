// // Part 1: Variables
// let number = 5;
// let string = `5`;
// let isTrue = true;
// console.log(number, string, isTrue);
// if(number == string){
//     console.log(isTrue);
// }

// Part 2: Arrays
// let colour = [`red`, `blue`, `green`, `orange`, `grey`];
// // add purple to end of array
// colour.push(`purple`);
// // use .unshift to add elements to beginning of arrays
// colour.unshift(`pink`);
// // remove 3rd element in array
// // .splice to remove/add elements into array not beginning/end
// // the first number (2) means I want to delete/add at index 2 in array (really the third since arrays start at 0)
// // the second number is (1) because I want to delete(or could reference to add) 1 element
// // if you want to add, you put a third value, `yellow` that you want inserted at index 2
// // could add more if need too 
// colour.splice(2, 1);
// // the console log returns orange because we removed blue in the previous splice
// console.log(colour[3]);
// // adding variable for first element in array
// let firstColour = `pink`;
// // copying first element to end of array
// colour.push(firstColour);
// // remove first element in array
// colour.shift();
// // print array and print array in REVERSE order
// console.log(colour.reverse());
// // assign variable result of green from array
// let green = colour[4];
// // checking to make sure its correct
// console.log(green);
// // using index variable to remove green from array
// // should remove green from array
// colour.splice(4, 1);

// Part 3: Objects
// const variables cannot be reassigned
// const variables must be assigned a value when declared 
const person = {
    firstName:`Siobhan`,
    lastName: `Bonardi`,
    // function within the object to return the first + last name
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    age: 26,
    dob: [
        {
            month: `July`,
            day: 9,
            year: 1996,
        }
    ],
    isEmployed: false,
    pet: [
        {
            name: `Bean`,
            species: `dog`,
            colour: `white`,
        }
    ],
};
// reverse the employment status of the person
// I couldn't figure out how to do this any other way
person.isEmployed = true;
// change the pet name
person.pet.name = `Benny`;
// add a new property
person.maritalStatus = true;

// adding 2 new people
const person2 = {
    firstName:`Craig`,
    lastName:`Eykelbosh`,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    age: 27,
    isEmployed: true,
    maritalStatus: true,
};

const person3 = {
    firstName:`Michelle`,
    lastName:`Egan`,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    age: 26,
    isEmployed: true,
    maritalStatus: false,
};
// create an array of all three people
let people = [person, person2, person3];

// in one output, print out the full name and marital status of all three people
// call the function we made earlier by array.function()
console.log(`Name and Marital Statuses: ${person.fullName()} ${person.maritalStatus}, ${person2.fullName()} ${person2.maritalStatus}, ${person3.fullName()} ${person3.maritalStatus}`);

// Part 4: W3Schools Exercise
// on question 14
// https://www.w3schools.com/js/exercise_js.asp