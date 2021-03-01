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


