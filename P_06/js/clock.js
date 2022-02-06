const clock = document.querySelector(".clock");
const yymmdd = document.querySelector(".date");
const ampm = document.querySelector(".ampm");
const sec = document.querySelector(".seconds");

function getDay() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 0부터 시작
  const days = String(date.getDate()).padStart(2, "0");

  const week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
  const day = date.getDay();
  const todayLabel = week[day];
  yymmdd.innerHTML = `${year}.${month}.${days}.${todayLabel}`;
}
function getClock() {
  const date = new Date();

  let hours = date.getHours();
  ampm.innerHTML = `${hours > 12 ? 'PM' : 'AM'}`;

  //12시간제로 변경
  hours %= 12;
  hours = hours || 12;

  const hoursString = String(hours).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${hoursString}:${minutes}`;
  sec.innerHTML = seconds;
}

getDay();
getClock();
setInterval(getClock, 1000);