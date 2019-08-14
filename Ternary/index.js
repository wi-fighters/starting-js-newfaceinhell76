const legalAge = 18;
const personAge = 34;
const ageCheck = (personAge >= legalAge) ? "you're old enough" : "you're too young";
console.log (ageCheck)


const legalSpeed = 130;
const yourSpeed = 140;
const speedCheck = (yourSpeed > legalSpeed) ?"You're going too fast - slow down!" : "You're driving below the speed limit";
console.log (speedCheck);

const drinkingAge = 21;
const personsAge = 32;
const ageCheck2 = (personsAge >= drinkingAge) ? "here's some wine" : "Here's some juice";
console.log (ageCheck2);

const Student = false;
const isStudent = (Student) ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log (isStudent);

const morning = true;
const timeofDay = (morning) ? "Good Morning" : "Good Evening";
console.log (timeofDay); 



let fullName = "  John Smith    ";
let trimmedName = fullName.trim();
console.log (trimmedName);