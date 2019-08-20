// Math object
// Doing calculations with math 

// Math.ceil() -> rounds up to the next largest integer
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(454.56565));
// console.log(Math.ceil(540.430843843));

// Math.floor() -> return the nearest integer less or equal to a given number
// rounds down to nearest lowest number
// console.log(Math.floor(354.89));
// console.log(Math.floor(99.99));
// console.log(Math.floor(5.5));

// Math.random() -> a random float between 0/1 (1 not inclusive)
// console.log(Math.floor(Math.random() * 1000 + 1)); 

//Math.min() -> gets the smallest number
// console.log(Math.min(3,4, 54, 65, 7, 9, 1, 0, -1, -1.5));

//Math.max() -> gets the largest number 
// const ten = 10;
// const twenty = 20;
// console.log(Math.max(ten, twenty));
// console.log(Math.max(1, 24, 45, 5,65, 76, 8, 76344343));

//Area of Triangle 
//Heron's Formula 
const a = 5;
const b = 6; 
const c = 7;
const s = (a + b + c) /2;
const areaTriangle = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(areaTriangle);

