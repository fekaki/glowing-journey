// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log('Felipe');
// console.log(23);

// javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);

// // console.log(typeof 23);
// // console.log(typeof "Felipe");
// console.log(typeof javascriptIsFun);

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// // const birthYear = 1991;
// // birthYear = 1990;

// var job = "programmer";
// job = "teacher";

// const lastName = "Arakaki";
// console.log(lastName);

// const now = 2037;
// const ageFelipe = now - 1988;
// const ageSarah = now - 2018;
// console.log(ageFelipe, ageSarah);


// console.log(ageFelipe * 2, ageFelipe / 10, 2**3);

// const firstName = "Felipe";
// const lastName = "Arakaki";
// console.log(`${firstName} ${lastName}`);

// let x = 10 + 5;
// x += 10;
// x += 4;
// x++;
// x--;
// console.log(x);

// console.log(ageFelipe > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x=y= 25 - 10 - 5;
// console.log(x, y)

// const averageAge = (ageFelipe + ageSarah) / 2;
// console.log(ageFelipe, ageSarah, averageAge);

///////////////////////////////////////////////////////////////

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:

// const massMark = 95;
// const heightMark = 1.88;
// console.log(massMark, heightMark)

// const massJohn = 85;
// const heigthJohn = 1.76;
// console.log(massJohn, heigthJohn);


// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// const bmiMark = massMark / heightMark ** 2;
// console.log(bmiMark);

// const bmiJonh = massJohn / heigthJohn ** 2;
// console.log(bmiJonh);

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// const markHigherBMI = bmiMark > bmiJonh
// console.log(markHigherBMI);


// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

//////////////////////////////////////////////

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew);

console.log(`String
multiple
lines
`);

console.log("String \n\
multiple \n\
lines");
*/

//////////////////////////////////////////////

/*
const age = 15;

if(age >= 18) {
  console.log(`Sarah can start driving licence`);
} else {
  const yearsLeft = 18-age;
  console.log(`Sara is not allowed to drive! Wait ${yearsLeft} years!`)
};

const birthYear = 2012;

let century
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/


////////////////////////////////////////////

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉

/*
const massMark = 95;
const heightMark = 1.88;
console.log(massMark, heightMark)

const massJohn = 85;
const heigthJohn = 1.76;
console.log(massJohn, heigthJohn);

const bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

const bmiJonh = massJohn / heigthJohn ** 2;
console.log(bmiJonh);

let markHigherBMI;

if(markHigherBMI = bmiMark > bmiJonh){
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJonh})`);
} else{
  console.log(`John's BMI (${bmiJonh}) is higher than Mark's (${bmiMark})!`);
};

*/

////////////////////////////////////////////////////


// type covvertion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Felipe'));
// console.log(typeof(NaN));

// console.log(String(23), 23);

// type coercion

// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('I am ' + String(23) + ' years old');

// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Felipe'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 1;
// if(money) {
//   console.log("Don't spend it all ;");
// } else {
//   console.log("You should get a job!");
// };

// let height = 120;
// if(height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// };

// 6 Equality Operators ==

// const age = '18';
// if(age === 18) console.log("You just became an adult (strict)");

// if(age == 18) console.log("You just became an adult (loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log('Cool 23 is an amazing number!');
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number isnot 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision

// if(hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!");
//   } else {
//     console.log("Someone else should drive...");
//   }

/*
  1. Calculate the average score for each team, using the test data below
    averageDolphins = (96 + 108 + 89) / 3
    averageKoalas = (96 + 108 + 89) / 3

  2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

  3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than other team. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks
  4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

  TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
  TEST DATA BONUS: 1: Dolphins score 97, 112 and 101. Koalas score 109,95 and 123
  TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const scoreDolphin1 = 96;
// const scoreDolphin2 = 108;
// const scoreDolphin3 = 89;

// const scoreKoala1 = 88;
// const scoreKoala2 = 91;
// const scoreKoala3 = 110;

// const sumScoreDolphin = scoreDolphin1 + scoreDolphin2 + scoreDolphin3
// console.log(`The sum of Dolphins score is ${sumScoreDolphin}!`);

// const averageDolphins = sumScoreDolphin / 3;
// console.log(`The average of Dolphins score is ${averageDolphins.toFixed(2)}!`);

// const sumScoreKoala = scoreKoala1 + scoreKoala2 + scoreKoala3
// console.log(`The sum of Koalas score is ${sumScoreKoala}!`);

// const averageKoalas = sumScoreKoala / 3;
// console.log(`The average of Koalas score is ${averageKoalas.toFixed(2)}!`);

// if(averageDolphins > averageKoalas) {
//   console.log('The winner of the competition is Dolphins!');
// } else if(averageDolphins < averageKoalas) {
//   console.log('The winner of the competition is Koalas!');
// } else{
//   console.log('The competitions against Dolphin and Koala is DRAW!');
// };

// bonus 1

// const scoreDolphin1 = 97;
// const scoreDolphin2 = 112;
// const scoreDolphin3 = 80;

// const scoreKoala1 = 109;
// const scoreKoala2 = 95;
// const scoreKoala3 = 50;

// const sumScoreDolphin = scoreDolphin1 + scoreDolphin2 + scoreDolphin3
// console.log(`The sum of Dolphins score is ${sumScoreDolphin}!`);

// const averageDolphins = sumScoreDolphin / 3;
// console.log(`The average of Dolphins score is ${averageDolphins.toFixed(2)}!`);

// const sumScoreKoala = scoreKoala1 + scoreKoala2 + scoreKoala3
// console.log(`The sum of Koalas score is ${sumScoreKoala}!`);

// const averageKoalas = sumScoreKoala / 3;
// console.log(`The average of Koalas score is ${averageKoalas.toFixed(2)}!`);

// if(averageDolphins > averageKoalas && sumScoreDolphin >= 100) {
//   console.log('The winner of the competition is Dolphins!');
// } else if(averageDolphins < averageKoalas && sumScoreKoala >= 100) {
//   console.log('The winner of the competition is Koalas!');
// } else if (sumScoreDolphin === sumScoreKoala && averageDolphins >= 100 && averageKoalas >= 100) {
//   console.log('The competitions against Dolphin and Koala is DRAW!');
// } else {
//   console.log('No one wins the trophy!');
// };

const day = 'wednesay';
switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!')
}

if (day === 'monday'){
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === "thursday") {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday || day '=== 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!')
}
