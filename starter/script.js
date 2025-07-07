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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
  console.log(str);
};

const firstUpper = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// High order function

const transformer = function (str, fn) {
  console.log(`Orignal String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is the best!', firstUpper);
transformer('javascript is the first best webdevelopment language!', oneWord);

//Callback function
//JS takes callback all the times
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['ahmed', 'harris', 'ibrahim'].forEach(high5);

//Hi