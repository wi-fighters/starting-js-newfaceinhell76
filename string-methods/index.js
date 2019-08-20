/*# String Exercises
## Use string methods and string interpolation to complete the tasks. Remember: Print the results to the console.


### 1. Characters & Properties
Declare a variable and assign a string as a value. Make sure that the string is at least six characters long. Print the length to the console. Access and print the 2nd and 6th elements of the string. */

let name = "Nicolas";
console.log (name.length);
console.log (name[1], name[5]);



//2. JS 
//Declare a variable and assign the value `JavaScript` to the variable. Print the length of the string to //the console, then print the `J` & `S` characters to the console.

const language ="JavaScript";
console.log (language.length);
console.log (language[0], language[4]);


### 3. I can...
 Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

 const sentence = "I can walk in the park all day!";
 const goal = sentence.includes ("park");
 const park = goal? "park" : "keep trying";
 console.log(`${park}`);


 ### 4. aSc
Declare a variable with the value `JavaScript`. Use string methods to print the the characters `aSc` from your declared variable.


//  4. aSc
 const JS1 = "JavaScript";
 const substring1 = JS1.substring(3, 6);
 console.log(`${JS1} ==> ${substring1}`);

//  5. Upper Case
 const helloWorld = "Hello World";
 const convertedString = helloWorld.toUpperCase();
 console.log(`${helloWorld} ==> ${convertedString}`);


// 6. Lower Case
 const helloEarthling = "Hello Earthling";
 const convertedString2 = helloEarthling.toLowerCase();
 console.log(`${helloEarthling} ==> ${convertedString2}`);


// 7. Does it contain...?
 const niceShoes = "nice shoes";
 const itContain = niceShoes.includes("l");
 const itContain1 = niceShoes.includes("n");
 console.log(niceShoes);
 console.log(` Is the string contains the letter "l": ${itContain}
 Is the string contains the letter "n": ${itContain1}`);





// 8. Front & Back
 const JS2 = "JavaScript";
 const firstCharacter = JS2[0];
 console.log(`${JS2} => ${firstCharacter}${JS2}${firstCharacter}`);

// 9. Last Three Chars
 const JS3 = "JavaScript";
 const last3Characters = JS3.substring(7);
 console.log(`${JS3} => ${last3Characters}${JS3}${last3Characters}`);

// 10. Java
 const Musiker = "veryCool";
 const convertedMusiker = Musiker.toUpperCase();
 const itContain2 = Musiker.includes("Java");
 console.log(` The string with upper case : ${convertedMusiker}`);
 console.log(`Is the string contains the word "Java": ${itContain2}`);





// 11. First and Last
 const JS4 = "JavaScript";
 const firstJS4 = JS4[0];
 const middleJS = JS4.substring(1,9);
 const lastJS4 = JS4[JS4.length - 1];
 console.log(`${JS4} => ${lastJS4}${middleJS}${firstJS4}`);

// 12. Concatenation
 const name = "Graeme Rowland";
 const country = "England";
 const age = 42 ;
 console.log(`My name is ${name}. I am from ${country} and I am ${age} months old.`);

// 13. Capitalize
 const stringtobeCapitalized = "the quick brown fox";
 const firstLetter = stringtobeCapitalized.substring(0 , 1);
 const capitalizedLetter = firstLetter.toUpperCase();
 const modifiedString = stringtobeCapitalized.substring(1);
 console.log(`${stringtobeCapitalized} ==> ${capitalizedLetter}${modifiedString}`);

