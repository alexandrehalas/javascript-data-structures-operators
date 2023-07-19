'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //before ES6

  //openingHours: openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  //ES6 Enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time: t, address, mainIndex = 0, starterIndex = 0 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${t}`
    );
  },

  orderPasta(ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicious pasta with ${ingredient1}, ${ingredient2}, ${ingredient3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log('main ingredient', mainIngredient);
    console.log('others ingredients', otherIngredients);
  },
};

// ES6 MORE DATA STRUCTURES

// Sets collections of unique values

console.log(new Set('Halas'));

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);
console.log(orderSet);

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

orderSet.delete('Pizza');
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

orderSet.clear();
console.log(orderSet);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('How different letters in the string').size);

/*
// LOOPING OBJECTS: Object Keys, Values, Entries

console.log('object:', openingHours);

// property NAMES

const propertyNames = Object.keys(openingHours);
console.log('object keys:', propertyNames);

let message = `Restaurant is open ${propertyNames.length} days on week: `;

for (const day of propertyNames) {
  message += `${day}, `;
}
console.log(message);

// property values

const propertyValues = Object.values(openingHours);
console.log('object values:', propertyValues);

// property entries

const propertyEntries = Object.entries(openingHours);
console.log('object entries:', propertyEntries);

for (const [key, { open, close }] of propertyEntries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
// OPTIONAL CHAINING ES2020

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// with optional chaining
restaurant.openingHours?.mon?.open;

// examples

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// in methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPotato?.(0, 1) ?? 'Method does not exist');

// in arrays

//const users = [{ name: 'Halas', email: 'halas@email.com' }];
const users = [];
console.log(users[0]?.name ?? 'User array empty');

*/

// ENHANCED OBJECT LITERALS

/*
// LOOPING ARRAYS

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const menuItem of menu) {
  console.log(menuItem);
}

for (const menuItem of menu.entries()) {
  console.log(menuItem);
}

for (const menuItem of menu.entries()) {
  console.log(`${menuItem[0] + 1}: ${menuItem[1]}`);
}

for (const [item, value] of menu.entries()) {
  console.log(`${item + 1}: ${value}`);
}
*/

/*
// LOGICAL ASSINGMENT OPERATORS ES2021

const rest1 = {
  name: 'Capri',
  numberGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Jose Maria',
};

// OR ASSINGMENT OPERATOR

//rest1.numberGuests = rest1.numberGuests || 10;
//rest2.numberGuests = rest2.numberGuests || 10;

// rest1.numberGuests ||= 10;
// rest2.numberGuests ||= 10;

// console.log(rest1.numberGuests);
// console.log(rest2.numberGuests);

// NULLISH COALESCING ASSINGMENT OPERATOR

rest1.numberGuests ??= 10;
rest2.numberGuests ??= 10;

console.log(rest1.numberGuests);
console.log(rest2.numberGuests);

// AND ASSINGMENT OPERATOR
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1.owner);
console.log(rest2.owner);
*/

/*
// NULLISH COALESCING OPERATOR ES2020

//restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; // false -> 10
console.log(guests);

//nullish values: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
// SHORT CIRCUITING
// USE any data type, return ANY data type, is called short-circuiting

console.log('---- OR, return the first true----');

console.log(21 || 'Halas'); // true -> 21
console.log('' || 'Halas'); // false true -> Halas
console.log(true || 0); // true -> true
console.log(undefined || null); // false false -> null

console.log(undefined || '' || null || 0 || 'Halas'); // false false false false true -> Halas

restaurant.numGuests = 23;
const guests = restaurant.numGuests || 10; // true -> 23
console.log(guests);

console.log('---- AND, return the first false ----');

console.log(21 && 'Halas'); // true true -> 'Halas'
console.log('' && 'Halas'); // false -> ''
console.log(true && 0); // true false -> 0
console.log(undefined && null); // false -> undefined
console.log(undefined && '' && null && 0 && 'Halas'); // false -> undefined

// this is
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'bacon');
}
// same as
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'bacon');
*/

/*
// REST PATTERN AND PARAMETERS used to collect multiple elements and condense them into an array, the opposite of spread operator

// SPREAD, because on RIGHT side of assingment '='
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of assingment '='
const [a, b, ...others] = [1, 2, 3, 4, 5];

// the rest need be allways the last parameter, because it collect the rest of the array
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//functions
//rest take multiple values and pack into array
const add = function (...numbers) {
  console.log(numbers);
};
add(1, 2, 3, 4);

restaurant.orderPizza('mushrooms', 'onions', 'cheese');
restaurant.orderPizza('mushrooms');
*/

/*
// SPREAD OPERATOR '...' used to build new arrays or to pass multiple values into a function
// expand an array into individual elements

const arr = [3, 4, 5];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

//spread array arr
const goodArr = [1, 2, ...arr];
console.log(goodArr);

console.log(...goodArr);
console.log(1, 2, 3, 4, 5); //same as ...goodArr

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const menuCopy = [...restaurant.mainMenu];

//join more than one array
const joinArr = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(joinArr);

// SPREAD OPERATOR WORKS WITH ALL ITERABLES
// THEY ARE: ARRAYS, STRINGS, MAPS, SETS
// THEY ARE NOT: OBJECTS
const myName = 'Alexandre Halas';
const letters = [...myName];
console.log(letters);

const ingredients = ['Garlic', 'Oil', 'Salt'];
restaurant.orderPasta(...ingredients);

//SINCE ES2018 SPREAD OPERATOR WORKS WITH OBJECTS
const newRestaurant = { ...restaurant, founder: 'Alexandre' };
console.log(newRestaurant);

//copy object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'New Name';
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/

/*
// DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//choose the name of new variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//set default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 222;
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj);
console.log(a, b);

// destructuring nested objects
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 1,
});
*/

// DESTRUCTURING ARRAYS
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring assignment
const [x, y, z] = arr;

console.log(a, b, c);
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switch main and secondary
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//switch main and secondary with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//destructuring nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//destructuring nested array immediately
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
//const [p, q, r] = [8, 9]; // when not find position 2 sets undefined
const [p = 1, q = 1, r = 1] = [8, 9]; // when not find some position sets 1 by default because =1
console.log(p, q, r);

//destructuring two values from function return
const [starter, main] = restaurant.order(0, 1);
console.log(starter, main);
*/
