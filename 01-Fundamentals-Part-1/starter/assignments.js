//===================
// VALUES AND VARIABLES
//===================
console.log('//===ASSIGNMENT 1===///');

const country  = 'Portugal';
const continent = 'Europe';
let populationInMillions = 10.28;

console.log('country:', country);
console.log('continent:', continent);
console.log('population in millions:', populationInMillions);

//===================
// DATA TYPES
//===================
const isIsland = false;
let language;

console.log('isIsland:', isIsland);
console.log('population in millions', populationInMillions);
console.log('country:', country);
console.log('language:', language);


//===================
// LET CONST VAR
//===================
 
language = 'Portuguese';


//===================
// BASIC OPERATORS
// TRANSFORM VALUES; COMBINE VALUES
//===================
let half = populationInMillions / 2;
console.log('half of population:', half);
let popPlus1 = populationInMillions + 0.00001;
console.log('add 1 to population:', popPlus1);
let popOfFinland = 6;
let avgPop = 33;
console.log('Port pop > Fin pop?:', populationInMillions > popOfFinland);
console.log('Port pop < avgPop?:', populationInMillions < avgPop);
let description = country + ' is in ' + continent + ', and its ' + populationInMillions + ' million people speak ' + language
console.log(description);

//===================
// TEMPLATE LITERAL
//===================
console.log(`${country} is in ${continent} and its ${populationInMillions} million people speak ${language}`);

//===================
// IF  IF/ELSE
//===================
if(populationInMillions > 33) {
    console.log(`${country}'s population is above average`);   
} else {
    console.log(`${country}'s population is below average`);
    
}

//===================
// TYPE CONVERSION
// TYPE COERCION
//===================
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);



//===================
// EQUALITY OPERATORS
// STRICT === (data type must also be equal)
// NONSTRICT == (data types can be different)
//===================
const numNeighbors = Number(prompt('How many neighboring countries does Portugal have?'));
if(numNeighbors === 1) { 
    console.log('Only 1 border!');44
} else if(numNeighbors > 1) {
    console.log('More than 1 border!');
} else {
    console.log('No borders!');
}


//===================
// LOGICAL OPERATORS
//===================
const speaksEnglish = true;
const hasLessThan50Mpeople = true;
const isNotAnIsland = true;
if(speaksEnglish && hasLessThan50Mpeople && isNotAnIsland) {
    console.log('Portugal does not meet your criteria');
} else {
    console.log('You should live in Portugal');
}

//===================
// SWITCH STATEMENT
//===================
const nativeLanguage = 'Mandarin';

switch(nativeLanguage) {
    case 'Mandarin':
        console.log('Mandarin has the MOST number of native speakers!');
    break;
    case 'Spanish':
        console.log('Spanish is in 2nd place for the number of native speakers');
    break;
    case 'English':
        console.log('English is in 3rd place for the number of native speakers');
    break;
    case 'Hindi':
        console.log('Hindi is in 4th place for the number of native speakers');
    break;
    case Arabic:
        console.log('Arabic is in 5th place for the number of native speakers');
    break;
    default:
        console.log('Your language is a great language also!');      
}

//===================
// TERNARY OPERATOR
//===================
console.log(`Portugal's population is ${populationInMillions > 33 ? "above" : "below"} average.`);

