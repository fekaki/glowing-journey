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
