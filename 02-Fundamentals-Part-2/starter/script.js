// Node.js Server
/*
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from the server');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
})
*/

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

/*
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);


const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

*/

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
