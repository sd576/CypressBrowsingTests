export function addBusinessDays(days) {
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
