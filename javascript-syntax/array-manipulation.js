/* Adding an item to an array */

// adding to an end of an array

const shoppingcart = ['Cake', 'maize', 'oil'];
shoppingcart.push('sweet');

console.log('This is my checkout items:',shoppingcart);

// pushing an array to another

let foodItems = ['Meat', 'Pizza', 'Bacon']
shoppingcart.push(foodItems);

console.log('My added payload of arrays:',shoppingcart);




// adding to the beginning of an array

const shoesCompanies = ['Nike', 'Puma', 'canvas'];
shoesCompanies.unshift('Addidas');

console.log('This is adding another shoes to begining of my collection: ',shoesCompanies);


/* Removing an item to an array */

// Removing an item to an end of an array

const carArray = ['Mitsubishi', 'Toyota', 'BMW', 'Nissan'];
carArray.shift();

console.log('Removing the first car from the list:',carArray);

// Removing an array from the beggining of an array

const bikeArray = ['Honda', 'Suzuki', 'Kawasaki', 'Yamaha'];
bikeArray.pop();

console.log('removing the last car from the list:',bikeArray);

/* Mapping objects from an Array */

let numbers = [2, 4, 6, 8, 10];

// function to return the square of a number

function square(number) {
    
  return number * number;
}

// apply square() function to each item of the numbers list

let square_numbers = numbers.map(square);
console.log('The square result',square_numbers);

const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees
const calcAmt = (obj) => {
    newObj = {};
    newObj.name = obj.name;
    newObj.netEarning = obj.salary + obj.bonus - obj.tax;
    return newObj;
};

let newArr = employees.map(calcAmt);
console.log('The new earnings',newArr);



// program to extract value as an array from an array of objects

function extractValue(arr, prop) {

    let extractedValue = [];

    for (let i=0; i < arr.length ; ++i) {

        // extract value from property
        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);

