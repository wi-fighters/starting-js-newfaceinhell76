
let name = "This is a Sentence - DOESN'T MATTER how long my sentence is. I could keep going. @@@@";
// console.log(name.length);
// console.log(name[name.length - 3]);

//Using methods to manipulate strings
//changing string case

// console.log(name.toLowerCase());
// console.log(name.toUpperCase());

//check whether a string contains another string
//case sensitive 
// if you insert another string  to check, it will only check first string
let email= "johnsmith@example.com";
const emailCheck = email.includes("@");
// console.log(emailCheck);

// remove the padding (white spaces) from a string the beginning and end of a string  
let fullName = `  John Smith  `;
// console.log(fullName);
let trimmedName = fullName.trim();
// console.log(trimmedName);

//extracting parts of a string 
const word = "sentence";
const partOfString = word.substring(6, 8);
// console.log(partOfString);

const ten = "10";
// console.log(ten);
// console.log(parseInt(ten));
// console.log(typeof ten);
// console.log(typeof parseInt(ten));

const tenPointFive = "10.999999";
// console.log(typeof tenPointFive);
const stringToFloat = parseFloat(tenPointFive)
// console.log(typeof stringToFloat);

// string concatenation with numbers 
// console.log(typeof (2 + "2"));
// "22"
// type: string 

// The remainder operator/ Modulo / Modulus 
// % 
const number = 323908329343;
console.log(number % 2 === 0);