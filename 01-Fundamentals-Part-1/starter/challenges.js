//===================
// CODING CHALLENGE #1
//===================

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula:

BMI = mass / height ** 2   =   mass / (height * height) 
(mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
console.log('//===CODING CHALLENGES===//');

let marksMassData1 = 78;
let marksHeightData1 = 1.69;

let johnsMassData1 = 92;
let johnsHeightData1 = 1.95;

let marksBMI_1 = marksMassData1 / marksHeightData1 ** 2;
console.log('marksBMI Data 1:', marksBMI_1);

let johnsBMI_1 = johnsMassData1 / johnsHeightData1 ** 2;
console.log('johnsBMI Data 1:', johnsBMI_1);

let markHigherBMI_1 = (marksBMI_1 > johnsBMI_1);
console.log('markHigherBMI_1:', markHigherBMI_1);



marksMassData2 = 95;
marksHeightData2 = 1.88;

johnsMassData2 = 85;
johnsHeightData2 = 1.76;


let marksBMI_2 = marksMassData2 / (marksHeightData2 * marksHeightData2);
console.log('marksBMI Data 2:', marksBMI_2);

let johnsBMI_2 = johnsMassData2 / (johnsHeightData2 * johnsHeightData2);
console.log('johnsBMI Data 2:', johnsBMI_2);

let markHigherBMI_2 = (marksBMI_2 > johnsBMI_2);
console.log('markHigherBMI_2:', markHigherBMI_2);


//===================
// CODING CHALLENGE #2
//===================
/*
Use the BMI example from Challenge #1 and the code that you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement
*/

if (marksBMI_1 > johnsBMI_1) {
    console.log(`Mark's BMI (${marksBMI_1}) is higher than John's BMI ${johnsBMI_1}!`);
    
} else {
    console.log(`John's BMI (${johnsBMI_1}) is higher than Mark's BMI ${marksBMI_1}!`);
    
}

if (marksBMI_2 > johnsBMI_2) {
    console.log(`Mark's BMI (${marksBMI_2}) is higher than John's BMI ${johnsBMI_2}!`);
    
} else {
    console.log(`John's BMI (${johnsBMI_2}) is higher than Mark's BMI ${marksBMI_2}!`);
    
}

//===================
// CODING CHALLENGE #3
//===================
/*
There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score).

3. Bonus 1: Include a requirement for a minimum score of 100. 
With this rule, a team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const dolphinsFirstScore = 96;
const dolphinsSecondScore = 108;
const dolphinsThirdScore = 89;
const dolphinsAverageScore = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;

const koalasFirstScore = 88;
const koalasSecondScore = 91;
const koalasThirdScore = 110;
const koalasAverageScore = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

console.log('dolphins average score=', dolphinsAverageScore, 'koalas average score=', koalasAverageScore);

const dSocred100 = (dolphinsFirstScore > 100 || dolphinsSecondScore > 100 || dolphinsThirdScore > 100);
const kScored100 = (koalasFirstScore > 100 || koalasSecondScore > 100 || koalasThirdScore > 100);

console.log('dolphins scored 100 in at least one game:', dSocred100);
console.log('koalas scored 100 in at least one game:', kScored100);


if(dolphinsAverageScore === koalasAverageScore && dSocred100 && kScored100) {
    console.log('DRAW');
} else if (dolphinsAverageScore > koalasAverageScore && dSocred100) {
    console.log('Dolphin beat the Koalas 🏆');
} else if (koalasAverageScore > dolphinsAverageScore && kScored100){
    console.log('Koalas beat the Dolphins 🏆');
} else {
    console.log('No one wins the trophy 😢');
    
}



//===================
// CODING CHALLENGE #4
//===================
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. 

In his country, it's usual to tip 15% if the bill value is between 50 and
300. 

If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �
*/
const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2; 

console.log(`The bill was ${bill}, the tip was ${tip}, and total was ${bill + tip}`);
