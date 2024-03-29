/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;

*/

/*
function logger() {
  console.log("My name is Felipe");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const applOrangeJuice = fruitProcessor(2, 0);
console.log(applOrangeJuice);

const num = Number("23");
*/

// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

/*
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const calcAge3 = (birthYear) => 2037 - birthYear;
*/

/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1991, "Felipe"));

*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log((`${firstName} retires in ${retirement} years`));
    return retirement;
  } else {
    console.log(`${firstName} has already retired!🎉`)
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Felipe"));
console.log(yearsUntilRetirement(1950, "Mike"));

*/

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline,
which works differently.
Each team competes 3 times, and then the average of the scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create a arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koakas win (30 vs. 13".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore drawss this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34, and 27
*/

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 12, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(600, 300);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
 */

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Felipe";
const felipe = [firstName, "Arakaki", 2023 - 1988, "web developer", friends];
console.log(felipe);
console.log(felipe.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

// const friends = ["Michael", "Steven", "Peter"];

// // Add elemets
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

//////////////////////////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before:
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is
different, the tip is 220%

1. Write a function 'calcTip' that takes any bill value as an input and return the
corresponding tip, calculated based on the rules above (you can check out the code
from first tip calculator challenge if you need to). Use the function type you like
most. Test the function using a bill value of 100.

2. And now let's use arrays! So create an array 'bills' containing the test data
below.

3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before.

4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125,555 and 44

HINT Remember that an array needs a value in each position, and that value can actually be the returned value of a funciotn! So you can just call  a function as array values (so don't store the tip values in separate variavles first, vut right in the new array)
*/

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

////////////////////////////////////////////////////////////////

// const felipeArray = [
//   "Felipe",
//   "Arakaki",
//   2037 - 1988,
//   "student",
//   ["Michael", "Peter", "Steven"],
// ];

// const felipe = {
//   firstName: "Felipe",
//   lastName: "Arakaki",
//   age: 2037 - 1988,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(felipeArray);

// const felipe = {
//   firstName: "Felipe",
//   lastName: "Arakaki",
//   age: 2037 - 1988,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(felipe);

// console.log(felipe.lastName);
// console.log(felipe["lastName"]);

// const nameKey = "Name";
// console.log(felipe["first" + nameKey]);
// console.log(felipe["last" + nameKey]);

// const interestedIn =
//   "What do you want to know about Felipe? Choose between firstName, lastName, age, job, and friends";

// if (felipe[interestedIn]) {
//   console.log(felipe[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! What do you want to know about Felipe? Choose between firstName, lastName, age, job, and friends"
//   );
// }

// felipe.location = "Brazil";
// felipe["twiter"] = "@felipearakaki";
// console.log(felipe);

// // CHallenge
// // Felipe has 3 friends, and his best friend is called Michael!

// console.log(
//   `${felipe.firstName} has ${felipe.friends.length} friends, and his best friend is called ${felipe.friends[0]}!`
// );

////////////////////////////////////////////////////////////////

// const felipe = {
//   firstName: "Felipe",
//   lastName: "Arakaki",
//   birthYear: 1988,
//   job: "unemployed",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: false,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} ia a ${this.calcAge()}-years old ${
//       felipe.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(felipe.calcAge());

// console.log(felipe.age);

// Challenge
// "Felipe is a 46-years old teacher. and he has a driver's license"
// console.log(felipe.getSummary());

/////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3

/*

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for ther full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI together with the full name and the respective BMI. Example: 'John's BMI (28.3) is higher than Mark's (23.9)!'

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s  BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

/////////////////////////////////////////////////////////
// console.log("Lifting weights repetition 1 🏋️‍♀️");
// console.log("Lifting weights repetition 2 🏋️‍♀️");
// console.log("Lifting weights repetition 3 🏋️‍♀️");
// console.log("Lifting weights repetition 4 🏋️‍♀️");
// console.log("Lifting weights repetition 5 🏋️‍♀️");
// console.log("Lifting weights repetition 6 🏋️‍♀️");
// console.log("Lifting weights repetition 7 🏋️‍♀️");
// console.log("Lifting weights repetition 8 🏋️‍♀️");
// console.log("Lifting weights repetition 9 🏋️‍♀️");
// console.log("Lifting weights repetition 10 🏋️‍♀️");

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

/////////////////////////////////////////////////////////

// const felipe = [
//   "Felipe",
//   "Arakaki",
//   2037 - 1988,
//   "student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// // console.log(felipe[0])
// // console.log(felipe[1])
// // ...
// // console.log(felipe[4])
// // felipe[5] does NOT exist

// for (let i = 0; i < felipe.length; i++) {
//   // Reading from felipe array
//   console.log(felipe[i], typeof felipe[i]);

//   // Filling types array
//   // types[i] = typeof felipe[i];
//   types.push(typeof felipe[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < felipe.length; i++) {
//   if (typeof felipe[i] !== "string") continue;

//   console.log(felipe[i], typeof felipe[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < felipe.length; i++) {
//   if (typeof felipe[i] === "number") break;

//   console.log(felipe[i], typeof felipe[i]);
// }

/////////////////////////////////////////////////////
// const felipe = [
//   "Felipe",
//   "Arakaki",
//   2037 - 1988,
//   "student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// for (let i = felipe.length - 1; i >= 0; i--) {
//   console.log(i, felipe[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------- Starting exercise ${exercise}`);

//   for (let rep = 0; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
//   }
// }

///////////////////////////////////////////////
// ex.01

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// ex.02
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// ex.03
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end ...");
// }

///////////////////////////////////////////////////////////

// Conding Challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values.
2. Create empty arrays for the tips and the totals ('tips' and ' totals')
3. Use the 'calcTip' function we wrote before (no need repeat) to calcculate tips and total values (bill + tip) for every bil value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52.

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays.

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers. This function calculates the average of all numbers in the given array. This is a DIFFICULTY challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop, you have all values added together.
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
  4.3 Call the function woth the 'totals' array

*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

///////////////////////////////////////////////////////////////
