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



