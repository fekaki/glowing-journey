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

const age = '18';
if(age === 18) console.log("You just became an adult (strict)");

if(age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool 23 is an amazing number!');
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number isnot 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
