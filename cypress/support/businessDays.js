// const currentDate = new Date();
// const newDate = addDays(currentDate, 2);

// // dayjs(currentDate).isBusinessDay();
// // dayjs(currentDate).nextBusinessDay().format('DD/MM/YYYY');

// function addDays(currentDate, days) {
//   currentDate.setDate(currentDate.getDate() + days);
//   return currentDate;
// }

// console.log(newDate.toLocaleDateString('en-uk'));

function addBusinessDays(days) {
  let currentDate = new Date();
  let workingDays = 0;
  while (workingDays < days) {
    currentDate.setDate(currentDate.getDate() + 1);
    if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
      continue;
    }
    workingDays++;
  }
  return currentDate;
}
console.log(addBusinessDays(2).toLocaleDateString('en-GB'));
