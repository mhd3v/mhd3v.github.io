const startDate = moment([2020, 3, 1]);
const years = moment().diff(startDate, 'year');
const months = moment().diff(startDate.add(years, 'years'), 'months');

let currentExpString = `(${years} year${years > 1 ? 's' : ''}`
currentExpString += months > 0 ? ` ${months} months)`: ')';
document.getElementById("current-work-exp").innerHTML = currentExpString;