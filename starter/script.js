'use strict';

//////////////////////////////////
////////Default parameters////////
//////////////////////////////////

// const bookings = [];

// const createBooking = function (
//   flightNo,
//   passengerNo = 1,
//   price = 199 * passengerNo
// ) {
//   const booking = {
//     flightNo,
//     passengerNo,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('PIA213');
// createBooking('PIA65', 3);
// createBooking('PIA654', 3, 134);
// createBooking('PIA9798', undefined, 429);

//////////////////////////////////
///////Values v/s refrences///////
//////////////////////////////////

// const gym = 'classic gym 2';
// const ahmed = {
//   name: 'Syed Muhammad AHmed Bukhari',
//   memNo: 4555745695870,
// };

// const checkIn = function (gymName, member) {
//   gymName = 'Next Level gym';
//   ahmed.name = 'Mr, ' + member.name;

//   if (member.memNo === 4555745695870) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Detail');
//   }
// };

// checkIn(gym, ahmed);
// console.log(gym);
// console.log(ahmed);

// const newMemNo = function (person) {
//   person.memNo = Math.trunc(Math.random() * 10000000000);
// };

// newMemNo(ahmed);
// checkIn(gym, ahmed);

//////////////////////////////////
//////Higher Order Functionn//////
//////////////////////////////////

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
//   console.log(str);
// };

// const firstUpper = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // High order function

// const transformer = function (str, fn) {
//   console.log(`Orignal String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('javascript is the best!', firstUpper);
// transformer('javascript is the first best webdevelopment language!', oneWord);

// //Callback function
// //JS takes callback all the times
// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['ahmed', 'harris', 'ibrahim'].forEach(high5);

//Function returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Ahmed');
// greeterHey('Harris');

// greet('asalamalaikum')('Ya sheikh');

//////////////////////////////////
/////Closer Look at Function//////
//////////////////////////////////

// const luftansa = {
//   airline: 'luftansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight, ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// luftansa.book(534, 'Syed Muhammad Ahmed Bukhari');
// luftansa.book(424, 'hafsa irfan');
// console.log(luftansa);

// // Another aitline launched
// const euowrings = {
//   airline: 'Euowrings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = luftansa.book;
// // book(432, 'Rana Ibrahim');

// //This method in call() functionality

// book.call(euowrings, 45, 'Abdullah taj');
// console.log(euowrings);

// // Another aitline launched
// const swiss = {
//   airline: 'swiss',
//   iataCode: 'SS',
//   bookings: [],
// };

// book.call(swiss, 77, 'Kubra bibi');

// // Apply() method   =====> old way
// const flightData = [25, 'Ashtar Hussain'];
// book.apply(swiss, flightData);

// // New method
// book.call(swiss, ...flightData);

// ////////BIND method/////////

// const bookEW = book.bind(euowrings);
// const bookSW = book.bind(swiss);
// const bookLA = book.bind(luftansa, 34);

// bookEW(43, 'Shanza batool');
// bookSW(99, 'iram fatima');
// bookLA(69, 'izhar shah');

// bookLA('Ahmed bukhari');
// bookLA('imran hashmi');

// //Bind() with event listner
// luftansa.planes = 300;
// luftansa.buyPlanes = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', luftansa.buyPlanes.bind(luftansa));

// //Partial application
// const taxRate = (rate, value) => value + value * rate;
// console.log(taxRate(0.1, 200));

// const pakTax = taxRate.bind(null, 0.23);

// console.log(pakTax(100));
// console.log(pakTax(23));

// //Challenge video

// const tax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const pakTax2 = tax(0.23);
// console.log(pakTax2(100));
// console.log(pakTax2(23));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   //Task 1
//   registerNewAnswer: function () {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n (Write option number)`
//       )
//     );

//     console.log(answer);
//     // const message = `What is your favourite programming language?
//     //   0: JavaScript
//     //   1: Python
//     //   2: Rust
//     //   3: C++
//     //   (Write option number)`;

//     // const answer = prompt(message);
//     // console.log(answer);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   //P3
//   displayResults: function (type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//       // "Poll results are 13, 2, 4, 1".
//     }
//   },
// };

// // poll.registerNewAnswer();
// //p4
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// //2:
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's build another simple poll app — this time for desserts!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'dessertPoll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite dessert?
        0: Ice Cream
        1: Cake
        2: Donut
        3: Brownie
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 2, increase the value AT POSITION 2 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 5 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer dessert poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 4, 1, 7, 2". 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the dessertPoll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [3, 2, 6]
BONUS TEST DATA 2: [0, 4, 5, 1, 3, 2]

GOOD LUCK 😀
*/

// const dessertPoll = {
//   question: 'What is your favourite dessert?',
//   options: ['0: Ice Cream', '1: Cake', '2: Donut', '3: Brownie'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer: function () {
//     const answer = prompt(
//       `What is your favourite dessert?\n${this.options.join(
//         '\n'
//       )}\n(Write option number)`
//     );

//   },
// };

// dessertPoll.registerNewAnswer();

//////////////////////////////////
//Imediatly invoked Function Exp//
//////////////////////////////////

// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();
// // console.log(isPrivate);

// (() => console.log('this will also never run again'))();

// {
//   const isPrivate2 = 23;
//   var notPrivate = 45;
// }

// // console.log(isPrivate2);
// console.log(notPrivate);

//////////////////////////////////
/////////////Clousers/////////////
//////////////////////////////////
