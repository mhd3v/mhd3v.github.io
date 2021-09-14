const startDate = moment([2020, 3, 1]);
const years = moment().diff(startDate, 'year');
const months = moment().diff(startDate.add(years, 'years'), 'months');

document.getElementById("current-work-exp").innerHTML = `(${years} year ${months} months)`;