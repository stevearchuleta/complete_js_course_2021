//===================
// VALUES AND VARIABLES
//===================

console.log('//===VALUES AND VARIABLES===//');

let js = 'amazing';
console.log(40+8+23-10);

console.log('Steve');
console.log('23');

let firstName = "Matilda";
console.log('firstName:', firstName);
console.log('firstName:', firstName);
console.log('firstName:', firstName);

//CAPITAL LETTER FOR CONSTANTS (by convention)
let PI = 3.1415;
console.log('PI:', PI);

let myFirstJob = 'Programmer';
let mySecondJob = 'Teacher';
//vs...
let job1 = 'Taxi Driver';
let job2 = 'Coder';


//===================
// DATA TYPES
// EITHER AN: OBJECT VALUE or... PRIMITIVE VALUE
// DYNAMIC TYPING: do not have to 'define' the value's data type
//===================
console.log('//===DATA TYPES===//');

//===================
// OBJECT VALUE (objects, arrays)
//===================
let me = {
    name: "Steve"
};

//===================
// PRIMITIVE VALUES
// string (in quotes), 
// number (is always floating point), 
// boolean (either true or false), 
// undefined (a variable that is not yet defined; empty value), 
// null (an empty value)
// symbol (unique value)
// bigInt (for numbers larger than the number data type)
//===================
let lastName = 'Archuleta';
let age = 53;
let isMale = true;
let height;

console.log('Boolean true:', true);
let javaScriptIsFun = true;
console.log('variable javaScriptIsFun=', javaScriptIsFun);

console.log('typeof true:', typeof true);
console.log('typeof javaScriptIsFun:', typeof javaScriptIsFun);
console.log('typeof 13:', typeof 13);
console.log('typeof Steve:', typeof 'Steve');

// REASSIGNMENT
javaScriptIsFun = 'YES!';
console.log('reassignment of variable javaScriptIsFun:', javaScriptIsFun);
console.log('typeof javaScriptIsFun:', typeof javaScriptIsFun);

// UNDEFINED
console.log('height:', height);
console.log('variable height typeof:', typeof height);
height = 72;
console.log('height reassigned:', height);

// NULL is NOT and object in JS... it is a Primitive Data Type; a legacy error still exists in JS engine
console.log('typeof null:', typeof null); //returns object (which is an error)

//===================
// LET CONST VAR
// LET IS BLOCK SCOPED
// VAR IS FUNCTION SCOPED
//===================
 
console.log('//===LET, CONST, VAR===//');

//MUTATE A VARIABLE (reassign a value to a variable)
let weight = 270;
weight = 220;

//IMMUTABLE VARIABLE
const birthyear = 1967;

var hairColor = 'brown';
hairColor = 'black';


//===================
// BASIC OPERATORS
// TRANSFORM VALUES; COMBINE VALUES
// OPERATOR PRECEDENCE (see Mozilla Table)
//===================

console.log('//===BASIC OPERATORS===//');

const targetYear = 2037;

const stevesAge = targetYear - 1967;
console.log('stevesAge targetYear-1967:', stevesAge);

const randysAge = targetYear - 1964;
console.log('randysAge targetYear-1964:', randysAge);

console.log('stevesAge * 2:', stevesAge*2, 'randysAge / 10:', randysAge/3);
console.log('2^3 =', 2**3);

//CONCATENATE
const neighborhood = 'Bario Alto';
const city = 'Lisboa';
console.log(neighborhood + ' ,' + city);

//Mathematical Operators
let x = 10 + 5;
console.log(x);
x += 10; //x=x+10
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


//Comparison Operators (to produce a boolean value)
console.log(randysAge > stevesAge);
console.log(randysAge === stevesAge);
console.log(randysAge < stevesAge);
console.log(stevesAge >= 70);
const isOver65 = stevesAge >= 70;
//Example of operator precedence (subtraction has precedence over less than sign)
console.log(targetYear - 1967 < targetYear - 1964);
console.log(25-10-5);

let a, b;
a = b = 25-10-5;
console.log(a,b);

const avgAge = (stevesAge + randysAge) / 2;
console.log(avgAge);



//===================
// STRINGS & TEMPLATE LITERALS
//===================
const fName = 'Steve';
const occupation = 'coder';
const YearOfBirth = 1967;

const steve = `I'm ${fName} a ${2020 - YearOfBirth} year old ${occupation}`;
console.log(steve);

console.log('Old way to write \n\ a string \n\ on multiple \n\lines.');

console.log(`Use backticks and the return bar
to write
strings on 
multiple lines.`);

//===================
// CONDITIONAL IF IF/ELSE STATEMENTS
// CONTROL STRUCTURES
//===================
const girlsAge = 15;
const isOldEnough = girlsAge >= 18;
    if (isOldEnough) {
        console.log(`The girl can start driving 🚗`);
    } else {
        const yearsLeft = 18 - girlsAge;
        console.log(`Sorry, the girl is too young to drive 😢. Wait another ${yearsLeft} years.`);   
    }

const theBirthYear = 1967;
let century;
    if (theBirthYear <= 2000) {
        century = 20 +'th'
    } else {
        century = 21 +'st'
    }
    console.log('century:', century);


//===================
// TYPE CONVERSION
// TYPE COERSION -- JS will automatically type convert in many scenarios
// CONVERT STRINGS TO NUMBERS (most important conversion)
//===================
const inputYear = '1991';
console.log('inputYear + 18=', inputYear + 18); //Returns 199118
console.log(String(inputYear), inputYear); //Returns 1991 1991
console.log(Number(inputYear) + 18); //Returns 20

console.log(Number('Steve')); //NaN
console.log('NaN typeof:', typeof NaN); //number type

console.log(String(23), 23); //23 23
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; //coerced to be 11
n = n -1;
console.log('n=', n); // 10


//===================
// TRUTHY FALSY (JS Engine coerces only when using logical operators and in an if/else statement)
// 5 Falsy Values (become false when type converted into a Boolean)
// Zero 0, Empty Sting "", undefined, null, NaN
// Everything else is truthy (become true when type converted into a String)
//===================
console.log(Boolean('0 is falsy:', 0));
console.log(Boolean('"" is falsy:', ""));
console.log(Boolean('undefined is falsy:', undefined));
console.log(Boolean('null is falsy:', null));
console.log(Boolean('NaN is falsy:', NaN));

const money = 0;
if(money) {
    console.log("Don't spend all of your money!");
} else {
    console.log('You can get a job to earn money!');
}

let theHeight;
if(theHeight) {
    console.log('Yes, the height is defined.');
} else {
    console.log('No, the height is not defined.');
}


//===================
// EQUALITY OPERATORS
// STRICT === (data type must also be equal)
// NONSTRICT == (data types can be different)
//===================
const theAge = 18;
if(theAge === 18) console.log('STRICT OPERATOR: === You just became an adult. :-D');
if(theAge == 18) console.log('LOOSE OPERATOR: == You just became an adult. :-D');

console.log("55' === 55:", '55' === 55);
console.log('55 === 56:', 55 === 56);
console.log("'55' == 55:", '55' == 55);
console.log('55 === 55:', 55 === 55);

//Example 1 with loose equality operator -- note: do not use ==, always use === as in Example 2
const favorite = prompt('What is your least favorite number.');
console.log(favorite);
console.log(typeof favorite);
if(favorite == 44) { //44 is entered as a string; '44'
    console.log('Cool. 44 is your number.');
} else if(favorite === 7) {
    console.log('7 is also a cool number');
    
} else {
    console.log('Number is not 44 or 7');
    
}

//Example 2 with strict equality operator
const yourFavorite = Number(prompt('What is your most favorite number.'));
console.log(yourFavorite);
console.log(typeof yourFavorite);
if(yourFavorite === 44) { //44 is entered as a string, but the NUMBER() converts the promt into a number 44
    console.log('Cool. 44 is your number.');
} else if(yourFavorite === 7) {
    console.log('7 is a cool number.');
    
} else if(yourFavorite === 9) {
    console.log('9 is a cool number.');
} else {
    console.log('Number is not 44 or 7 or 9');
}

if(yourFavorite !== 44) console.log('Why not pick 44?');


//===================
// Boolean Logic
// Use T/F values to solve complex problems
// TRUTH TABLE (AND operator, OR operator)
// NOT operator ( ! )
//===================

// Sarah has a driver's license.   T/F
// Sarah has good vision.   T/F

// AND OPERATOR
// A and B  --if A is true and B is true === TRUE
//          --if A is false and B is true === FALSE
//          --if A is true and B is false === FALSE
//          --if A is false and B is false === FALSE
// OR OPERATOR
// A of B   --if A is true or B is true === TRUE
//          --if A is false or B is true === TRUE
//          --if A is true or B is false === TRUE
//          --if A is false or B is false === FALSE

const hasDriversLicense = true;  //A
const hasGoodVision = true;  //B
console.log('hasDriversLicense && hasGoodVision:', hasDriversLicense && hasGoodVision);
console.log('hasDriversLicense || hasGoodVision:', hasDriversLicense || hasGoodVision);
console.log('!hasDriversLicense', !hasDriversLicense);

if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

const isTired = false;  //C 
console.log('hasDriversLicense || hasGoodVision || isTired:', hasDriversLicense || hasGoodVision || isTired);
console.log('hasDriversLicense && hasGoodVision && isTired:', hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}


//===================
// SWITCH STATEMENT
// alternative means of writing a complicated if/else statement
// COMPARE ONE VALUE TO MULTIPLE DIFFERENT OPTIONS
// Switch statement was designed to compare equlity ===   day === 'Monday'
// use break statement (to stop the code from executing)
//===================

// TASK: Map daily activities to each day of the week
const day = 'Thursday';

switch(day) {
    case 'Monday':      //day === 'Monday'
        console.log('Plan my study week');
        console.log('Apply for coding jobs');
        break;
    case 'Tuesday':     //day === 'Tuesday'
        console.log('Prepare JS Everywhere API for deployment');
        break;
    case 'Wednesday':   //day === 'Wednesday'
    case 'Thursday':    //day === 'Thursday'
        console.log('Review MERN Stack boot camp videos');
        break;
    case 'Friday':      //day === 'Friday'
        console.log('Study Java OOP');
        break;
    case 'Saturday':    //day === 'Saturday'
    case 'Sunday':      // day === 'Sunday'
        console.log('Walk 5 miles');
        console.log('Read Sapiens');
        break;
    default:            // day !== to any of the strings listed as a case
        console.log('Not a valid day');  
}

// Same as switch statement above... using strict comparision in an if else-if statement
// The switch statement helps me avoid using redundant code day ===  DRY CODE

if (day === 'Monday') {
    console.log("It's Monday");
} else if (day === 'Tuesday') {
    console.log("It's Tuesday")
} else if( day === 'Wednesday' || day === 'Thursday') {
    console.log('Do the dishes');
        
} else if(day === 'Friday') {
    console.log('TGIF');
} else if(day === 'Saturday' || day === 'Sunday') {
    console.log("It's the weekend!");  
} else {
    console.log('That is not a valid day');
}


//===================
// STATEMENTS
//     vs.
// EXPRESSIONS
// JavaScript expects statements and expression in different places within the code
// For example: in a template literal, I can only insert expressions, but not statements
//===================

// EXPRESSION IS A PIECE OF CODE THAT PRODUCES A VALUE 
3 + 4
1991
true && false && !true


// STATEMENT DOES NOT PRODUCE A VALUE, BUT IS SIMPLY A LARGE PIECE OF CODE THAT IS EXECUTED
// IF ELSE STATEMENT
// SWITCH CASE STATEMENT

if (23 > 10) {
    const string = '23 is larger than 10';    //NOTE: the string itself is an expression
} 

const myself = 'Steve';
console.log(`I'm ${2021 - 1967} years old; ${myself}`);


//===================
// TERNARY OPERATOR 
// aka CONDITIONAL OPERATOR
// use the ternary operator as an expression that returns a value, then store that value into a variable
// herein, the value is either wine or water (depending upon the boolean value of the condition)
//===================
const someAge = 53;
const drink = someAge >= 18 ? 'wine 🍷' : 'water💦';
console.log(drink);

// use ternary operator as an expression in a teplate literal
// introduce conditionals inside a template literal
console.log(`I like to drink ${someAge >= 18 ? 'wine 🍷' : 'water💦'}`);
