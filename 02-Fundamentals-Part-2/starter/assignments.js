//=================
// FUNCTIONS
//=================

/*
1. Write a function called 'describeCountry' which takes three parameters:
  'country', 
  'population' and 
  'capitalCity'. 
  Based on this input, the function returns a string with this format: 
  'Finland has 6 million people and its capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. 
   Store the returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    let string = `${country} has ${population} people and its capital city is ${capitalCity}.`;
    return string;
}

const Portugal = describeCountry('Portugal', 10.28, 'Lisbon');
const USA = describeCountry('United States of America', 328.20, 'Washington DC');
const Mexico = describeCountry('Mexico', 127.60, 'Mexico City');
console.log(Portugal);
console.log(USA);
console.log(Mexico);


//=================
// FUNCTION DECLARATION
//         vs.
// FUNCTION EXPRESSION
//=================

/*
1.  The world population is 7900 million people.

    Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and
    returns the percentage of the world population that the given population represents. 
    
    For example, China has 1441 million people, so it's about 18.2% of the world population.

2.  To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100.

3.  Call 'percentageOfWorld1' for 3 populations of countries of your choice,
    store the results into variables, and log them to the console

4.  Create a function expression which does the exact same thing, 
    called 'percentageOfWorld2', 
    and also call it with 3 country populations (can be the same populations)
*/

function percentageOfWorld1(country, population) {
    return `${country} has ${((population / 7900) * 100).toFixed(2)} percent of the world's population.`
}

let PortugalPopulationPercentage = percentageOfWorld1('Portugal', 10.28);
let USAPopulationPercentage = percentageOfWorld1('The United States of America', 328.20);
let MexicoPopulationPercentage = percentageOfWorld1('Mexico', 127.60);

console.log(PortugalPopulationPercentage);
console.log(USAPopulationPercentage);
console.log(MexicoPopulationPercentage);

const percentageOfWorld2 = function(country, population) {
   return `${country} has ${((population / 7900) * 100).toFixed(2)} percent of the world's population.`
}

let CanadaPopulationPercentage = percentageOfWorld2('Canada', 37.59);
let ChinaPopulationPercentage = percentageOfWorld2('China', 1441);
let ItalyPopulationPercentage = percentageOfWorld2('Italy', 60.36);

console.log(CanadaPopulationPercentage);
console.log(ChinaPopulationPercentage);
console.log(ItalyPopulationPercentage);


//=================
// ARROW FUNCTIONS
//=================
/*
Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
*/

const percentageOfWorld3 = (country, population) => {
    return `${country} has ${((population / 7900) * 100).toFixed(2)} percent of the world's population.`
}

let IndiaPopulationPercentage = percentageOfWorld3('India', 1326);
let FrancePopulationPercentage = percentageOfWorld3('France', 57.06);
let BrazilPopulationPercentage = percentageOfWorld3('Brazil', 211);
console.log(IndiaPopulationPercentage);
console.log(FrancePopulationPercentage);
console.log(BrazilPopulationPercentage);


//=================
// FUNCTIONS CALLING OTHER FUNCTIONS
//=================
const describePopulation = (country, population) => {
    const callFunc = percentageOfWorld1(country, population);
    return `${country} has ${population} million people, so ${callFunc}`
}

let Peru = describePopulation('Peru', 32.82);
let Iceland = describePopulation('Iceland', .36);
let Japan = describePopulation('Japan', 126.3);
console.log(Peru);
console.log(Iceland);
console.log(Japan);

//=================
// INTRODUCTION TO ARRAYS
//=================
const populations = [32.82, .36, 126.3, 1326];
console.log(populations);

if(populations.length === 4){
    console.log(true);
    
} else {
    console.log(false);
    
};
const percentages = [percentageOfWorld1('Peru', populations[0]), percentageOfWorld1('Iceland', populations[1]), percentageOfWorld1('Japan', populations[2]), percentageOfWorld1('India', populations[3])];
console.log(percentages);

//=================
// MEHTODS: Basic Array Operations
//=================
/*
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'.

2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array.

3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array.

4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'

5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

const neighboursOfChina = ['Afghanistan', 'Bhutan', 'India', 'Kazakhstan', 'Kyrgystan', 'Laos', 'Myanmar', 'Mongolia', 'Nepal', 'North Korea', 'Pakistan', 'Russia', 'Tajikistan', 'Vietnam'];
console.log(neighboursOfChina);
neighboursOfChina.push('Utopia');
console.log(neighboursOfChina);
neighboursOfChina.pop();
console.log(neighboursOfChina);

const germanyIsPresent = neighboursOfChina.includes('Germany');
console.log('Is Germany a neighbor of China?', germanyIsPresent);
if(!germanyIsPresent) {
    console.log('Probably not a central European country :D');
}
neighboursOfChina[9] = "Democratic People's Republic of Korea";
console.log(neighboursOfChina);



