/* Adding an item to an array */

// adding to an end of an array

const shoppingcart = ['Cake', 'maize', 'oil'];
shoppingcart.push('sweet');

console.log(shoppingcart);


// adding to the beginning of an array

const shoesCompanies = ['Nike', 'Puma', 'canvas'];
shoesCompanies.unshift('Addidas');

console.log(shoesCompanies);


/* Removing an item to an array */

// Removing an item to an end of an array

const carArray = ['Mitsubishi', 'Toyota', 'BMW', 'Nissan'];
carArray.shift();

console.log(carArray);

// Removing an array from the beggining of an array

const bikeArray = ['Honda', 'Suzuki', 'Kawasaki', 'Yamaha'];
bikeArray.pop();

console.log(bikeArray);




const shopingCart = ['cake', 'sweets', 'shoes'];
var a = ['sweets'];

console.log(a.includes(shopingCart));