const currentDate = new Date();
const newDate = addDays(currentDate, 2);

// dayjs(currentDate).isBusinessDay();
// dayjs(currentDate).nextBusinessDay().format('DD/MM/YYYY');

function addDays(currentDate, days) {
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate;
}

console.log(newDate.toLocaleDateString('en-uk'));

// let currentDate = new Date();
// console.log(currentDate.toLocaleDateString('en-uk'));

// ============================================================

// // First of all, include dayjs
// const dayjs = require('dayjs');

// // Then, include dayjs-business-time
// const dayjsBusinessTime = require('dayjs-business-time');

// // Attach dayjs plugin
// dayjs.extend(dayjsBusinessTime);

// const day = dayjs(Date);
// const timeToAdd = 2;

// const newBusinessTime = day.addBusinessDays(timeToAdd);

// console.log(newBusinessTime);
