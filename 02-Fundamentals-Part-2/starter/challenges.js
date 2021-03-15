//===================
// CODING CHALLENGE #1
//===================
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! <br 
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2

5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
*/



const dScores1 = [44, 23, 71];
const kScores1 = [65, 54, 49];
const dScores2 = [85, 54, 41];
const kScores2 = [23, 34, 27];
console.log('dScores[0]:', dScores1[0]);

const calcAverage = (score1, score2, score3) => ( (score1 + score2 + score3) / 3 ).toFixed(2);

const averageDolphinScore1 = calcAverage(dScores1[0], dScores1[1], dScores1[2]);
const averageKoalaScore1 = calcAverage(kScores1[0], kScores1[1], kScores1[2]);
const averageDolphinScore2 = calcAverage(dScores2[0], dScores2[1], dScores2[2]);
const averageKoalaScore2 = calcAverage(kScores2[0], kScores2[1], kScores2[2]);

console.log('Average Dolphin Score Test 1:', averageDolphinScore1);
console.log('Average Koala Score Test 1:', averageKoalaScore1);
console.log('Average Dolphin Score Test 2:', averageDolphinScore2);
console.log('Average Koala Score Test 2:', averageKoalaScore2);


const checkWinner = function(avgDolhins, avgKoalas) {
    if(avgDolhins >= 2 * avgKoalas) {
        return `Dolphins win 🏆 ${avgDolhins} to ${avgKoalas}`
    } else if (avgKoalas >= 2 * avgDolhins){
        return `Koalas win 🏆 ${avgKoalas} to ${avgDolhins}`
    } else {
        return `There is no winner of this match.`
    }
}

console.log(checkWinner(averageDolphinScore1, averageKoalaScore1));
console.log(checkWinner(averageDolphinScore2, averageKoalaScore2));




//===================
// CODING CHALLENGE #2
//===================
/*
Steven is still building his tip calculator, using the same rules as before: 

Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉 GOOD LUCK 😀
*/

const calcTip = bill => bill >=50 && bill <= 300 ? bill * .15 : bill * .2;

console.log('Tip Amount =', calcTip(100));
console.log('Tip Amount =', calcTip(43));

const billArray = [125, 55, 44];
const tips = [];
const total = [];

for (let i = 0; i < billArray.length; i++){
    let currentTip = (calcTip(billArray[i]));
    console.log('Current tip = ', currentTip);
    tips.push(currentTip);
    console.log(tips);
    total.push(currentTip + billArray[i]);
    console.log(total);
    
}
