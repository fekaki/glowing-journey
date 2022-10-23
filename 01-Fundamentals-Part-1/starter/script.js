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

const massMark = 95;
const heightMark = 1.88;
console.log(massMark, heightMark)

const massJohn = 85;
const heigthJohn = 1.76;
console.log(massJohn, heigthJohn);


// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
const bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

const bmiJonh = massJohn / heigthJohn ** 2;
console.log(bmiJonh);

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
const markHigherBMI = bmiMark > bmiJonh
console.log(markHigherBMI);


// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀
