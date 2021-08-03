
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

var expiredMessage = document.querySelector(".note");
var deadlineYear = document.querySelector(".title-date");
var deadlineTime = document.querySelector(".title-time");
var remainingDay = document.querySelector(".day")
var remainingHour = document.querySelector(".hour")
var remainingSecond = document.querySelector(".second")
var remainingMinute = document.querySelector(".minute")




// this gives current year if we dont give it any year(date)
// var d = new Date();
var dateWeWant = new Date(2021, 7, 5, 11, 30, 0);
console.log(dateWeWant)
var year = dateWeWant.getFullYear();
console.log("this is year " + year);
// deadlineYear.innerHTML = `3 ${month} ${year}`

var currentHours = dateWeWant.getHours();
console.log("this is hour "+ currentHours);
var currentMinute = dateWeWant.getMinutes();
console.log("this is minute "+ currentHours);
deadlineTime.innerHTML = `${currentHours} ${currentMinute}am`

var monthKaka = dateWeWant.getMonth(); // Since getMonth() returns month from 0-11 not 1-12
console.log("the month is " + months[monthKaka]);
var month = months[monthKaka];
// deadlineYear.innerHTML = `3 ${month} ${year}`;

// to get current date
var currentDay = dateWeWant.getDate();
console.log("the day is "+ currentDay);

let weekDay = dateWeWant.getDay();
console.log("today is "+ weekdays[weekDay]);
 weekDay = weekdays[weekDay]
 deadlineYear.innerHTML = `${weekDay} ${currentDay} ${month} ${year}`;


// FreeCodeCamp
// 1 second = 1000 millisecond
// 1 minute = 60second
// 1 hr = 60minutes
// 1 day = 24hours

//  dateWeWant (futureDate) to be given in  millisecond
const futureTime = dateWeWant.getTime()
console.log(futureTime);

// const allDates = []
function getRemainingTime(){

  const today = new Date().getTime();
  console.log(today);

  t = futureTime - today;
   console.log(t);

  // we want to know how many miliseconds are in one day ?
const oneDay = 24*60*60*1000; // that is how you reach to miliseconds for one day
console.log(oneDay)
const oneHoure = 60*60*1000;
console.log(oneDay)
const oneMinute = 60*1000;
console.log(oneDay);

// calculate now
let days = t/oneDay;
days = Math.floor(days)
console.log(days);
          // this  > to give us the number of hours in days becuase it is big often
let hours1 = t/ oneHoure;
console.log(hours1);
let hours = Math.floor((t% oneDay)/ oneHoure);
console.log(hours);
let minutes = Math.floor((t% oneHoure)/ oneMinute);
let seconds = Math.floor((t% oneMinute)/ 1000);

if (days <10){(days = `0${days}`)}
remainingDay.innerHTML = days;

// allDates.push(days)
if (hours <10){(hours = `0${hours}`)}
remainingHour.innerHTML = hours;
// allDates.push(hours)
remainingMinute.innerHTML = minutes;
// allDates.push(minutes)
if (seconds <10){(seconds = `0${seconds}`)}
remainingSecond.innerHTML = seconds;
// allDates.push(seconds)
// console.log(allDates)
// return [allDates];
if (t < 0) {
    clearInterval(countdwon);
    // expiredMessage.innerHTML = "this giveaway has expired";
    expiredMessage.innerHTML = `<h3 class="expired">Sorry, this item has been sold</h3>`;
  }
}

//  to run the countdwon automatically
let countdwon = setInterval(getRemainingTime, 1000)


getRemainingTime()
//
