//===================
// STRICT MODE
// Allows for the writing of secure JS code
//===================
'use strict';


// E.g. #1: After purposefully misspelling a variable, in strict mode the browser DevTool console will issue 
// an Uncaught ReferenceError; without strict mode, no message would appear to help me find and fix this bug.
let hasDriversLicense = false;
const passTest = true;

if(passTest) {
    /*
    hasDiverlicence = true;
    */
}
if(hasDriversLicense) {
    console.log('I can drive');
    
}

// E.g. #2: strict mode will also introduce into the console (a short-list of) reserved variable names 
// as a warning that they cannot be used.
/*
const interface = 'Audio';
const private = 987;
*/


//===================
// FUNCTIONS
// Reusable machine-like code -- input data | output data
// Not all function must accept paramenters
// Not all funcitons must return a value

/*
FUNCTION DECLARATION (has a name; globally scoped; is hoisted)
FUNCITON EXPRESSION  (no name - anonymous; locally scoped; not hoisted)
ARROW FUNCTION       (no name - anonymous; locally scoped; not hoisted)
*/

//===================
function logger() {
    console.log('My name is Steve.');
}

// Call | Run | Invoke (the function)
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log('apples:', apples, 'oranges:', oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}
// The string - juice - is returned from this function; 
// So then, the call/invocation of the function IS the return value; 
// Save that return value (save the function call) into its own variable and then console.log the juice string via this variable.
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//=================
// FUNCTION DECLARATION
//         vs.
// FUNCTION EXPRESSION
//=================

//FUNCTION DECLARATION (globally scoped; is hoisted; can be called out of sequence)
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const stevesAge = calcAge1(1967);
console.log("Steve's Age", stevesAge);

//FUNCITON EXPRESSION (expressions return a value which can be stored into a variable)
const calcAge2 = function(birthYear) {
    return 2021 - birthYear;
}
const RandysAge = calcAge2(1964);
console.log("Randy's Age", RandysAge);


//=================
// ARROW FUNCTION
// Unlike function declarations and function expressions, arrow funcitons do not get a 'this' keyword
//=================

// Example 1
const calcAge3 = (birthYear) => 2021 - birthYear;
const LorrainesAge = calcAge3(1947);
console.log("Lorraine's Age:", LorrainesAge);

//Example 2
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
const stevesRetirement = yearsUntilRetirement(1967, "Steve");
const randysRetirement = yearsUntilRetirement(1964, "Randy");
const lorrainesRetirement = yearsUntilRetirement(1947, "Lorriane");
console.log("Years to Steve's Retirement", stevesRetirement);
console.log("Years to Randy's Retirement", randysRetirement);
console.log("Years to Lorraine's Retirement", lorrainesRetirement);


//=================
// FUNCTIONS CALLING OTHER FUNCTIONS
//=================

function fruitDicer(fruit){
    return fruit * 8;               //cut fruit into 4 pieces; therefore 2 apples yields 16 pieces
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruitDicer(apples);
    const orangePieces = fruitDicer(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));


//=================
// REVIEWING FUNCTIONS

/*
==FUNCTION DECLARATION==
function calcAge(birthYear) { return 2021 - birthYear };

==FUNCTION EXPRESSION==
const calcAge = function(brithYear) { return 2021 - birthYear}

==ARROW FUNCTION==
const calcAge = birthYear =>  return 2021 - birthYear
*/

//=================

const calculateAge = function(year) {
    return 2021 - year;
}
const yearsUntilRetirement2 = function (birthyear, appelation) {
    const age = calculateAge(birthyear);
    const retirement = 65 - age;

    if(retirement < 0){
        return `${appelation} should have retired ${Math.abs(retirement)} years ago.🎉`
    } else {
        return `${appelation} retires in ${retirement} years.`;
    }

}
console.log(yearsUntilRetirement2(1967, 'Steve'));
console.log(yearsUntilRetirement2(1964, 'Randy'));
console.log(yearsUntilRetirement2(1947, 'Lorraine'));


//=================
// INTRODUCTION TO ARRAYS
// Arrays are data structures (a container that holds values that can be referrenced)
// Unlike primitive values, ***arrays are mutable***.
//=================
// Array Literal Syntax
const friends = ['Michael', "Steven", "Peter"];
console.log(friends);

// Array Function Syntax
const years = new Array(1991, 1984, 2008, 2021);

console.log(friends[0]);
console.log(friends[2]);

// Length Property of Arrays
console.log('Length of friends array:', friends.length);

// Obtain the last element in the array: 
// friends.length - 1 is an expression inside the bracket notation; 
// expressions produce a value, in this case an index number, which will yeild the value of the last element in the friends array 
console.log('Last element in the friends array:', friends[friends.length - 1]);

// MUTATE ARRAY
friends[2] = 'Randy', 'Lorriane', 'Vana', 'Chad', 'Ernie';
console.log(friends);

// Arrays can hold many data types, including other arrays and objects
const sirName = 'Archuleta'
const steve = ['Steve', sirName, 53, true, 2021 -1967, [friends], {'Markup': 'HTML', 'style': 'CSS', 'dynacism': 'JavaScript'}];
console.log(steve);

// Exercise<br
const calculateSomeonesAge = function(yearOfBirth) {
    return 2021 - yearOfBirth;
}
const birthYears = [1967, 1964, 1947, 2000, 2009];

console.log(calculateSomeonesAge(birthYears)); // THIS WILL NOT WORK
// This will return NaN, because the expression in the return statement expects a single value, not an array

const theAge1 = calculateSomeonesAge(birthYears[0]);
const theAge2 = calculateSomeonesAge(birthYears[1]);
const theAge3 = calculateSomeonesAge(birthYears[2]);
const theAge4 = calculateSomeonesAge(birthYears[3]);
const theAgeLast = calculateSomeonesAge(birthYears[birthYears.length - 1]);
console.log(theAge1, theAge2, theAge3, theAge4, theAgeLast);

const arrayOfAges = [calculateSomeonesAge(birthYears[0]), calculateSomeonesAge(birthYears[1]), calculateSomeonesAge(birthYears[2]), calculateSomeonesAge(birthYears[3]), calculateSomeonesAge(birthYears[birthYears.length - 1])];
console.log("Array of ages:", arrayOfAges);

//=================
// METHODS: BASIC ARRAY OPERATIONS
// Built in functions
//=================

// PUSH METHOD -- add element to the end of the array.
//             -- the push function retruns a 'length'value of the new array, whcih can be stored in a variable.
const bestFriends = ['Steve', 'Randy', 'Lorraine', 'Spencer'];
console.log(bestFriends);
const newLength = bestFriends.push('Jason');
console.log(bestFriends);
console.log(newLength);


// UNSHIFT METHOD -- add element to the beginning of the array.
//                -- the unshift function retruns a 'length'value of the new array, whcih can be stored in a variable.
const newLength2 = bestFriends.unshift('John');
console.log(bestFriends);
console.log(newLength2);

// POP METHOD -- remove element from the end of the array.
//            -- the pop function retruns the value of the removed elemenb, whcih can be stored in a variable.
const removed = bestFriends.pop();
console.log(bestFriends);
console.log(removed);

// SHIFT METHOD -- remove element from the beginning of the array.
//              -- the pop function retruns the value of the removed elemenb, whcih can be stored in a variable.
const removed2 = bestFriends.shift();
console.log(bestFriends);
console.log(removed2);

// INDEXOF METHOD -- returns the index of an element
console.log('The index of Steve is:', bestFriends.indexOf('Steve'));

// INCLUDES METHOD -- returns a boolean value regarding an element's presence inside an array.
const isPresent = bestFriends.includes('Lorraine');
console.log(isPresent);
if(isPresent){
    console.log('You have a best friend named Lorraine.');
    
}


//=================
// INTRODUCTION TO OBJECTS
//=================