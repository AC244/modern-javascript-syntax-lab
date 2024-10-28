// Use `.map()` to iterate over the following array:
// 1
// const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
// const multipliedNums = nums.map((num) => {
//     return num * 2;
// })

// console.log(multipliedNums)

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
// 2
// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
// const  [first, second] = pizzaToppings

// console.log(first)
// console.log(second)

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
// 3
// const car = {
//     make: 'Audi',
//     model: 'q5',
//   }
  
//   // Your code here
// const { make, model } = car

// console.log(make)
// console.log(model)

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
// 4
// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// // Your code here
// const controversialPizzaToppings = [...pizzaToppings]

// console.log(controversialPizzaToppings)

// Duplicate the following object and spread its values into a new variable `myCar`.
// 5
// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
//   // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
//   // Your code here
// const myCar = {...car, model: 'q7'} 

// console.log(car)
// console.log(myCar)

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
// 6
// Your code here
const propertyName = 'username'

const userProfile = {
  [propertyName]: 'ACarter21', 
}

console.log(userProfile)
