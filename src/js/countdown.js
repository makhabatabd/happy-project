const count = document.querySelector(".count");

const countdown = () => {
  const countDate = new Date("August 20, 2022 13:30:50").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let textDay = Math.floor(gap / day);
  let textHour = Math.floor((gap % day) / hour);
  let textMinute = Math.floor((gap % hour) / minute);
  let textSecond = Math.floor((gap % minute) / second);

  if (textSecond < 10) textSecond = "0" + textSecond;

  if (textDay < 10) textDay = "0" + textDay;

  if (textHour < 10) textHour = "0" + textHour;

  if (textMinute < 10) textMinute = "0" + textMinute;

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;

  if (gap < 0) {
    count.style.display = "none";
  }
};
setInterval(countdown, 1000);
