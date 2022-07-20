import "bootstrap";
import "./styles/styles.scss";

const light_div = document.getElementById("light__div");
const dark_div = document.getElementById("dark__div");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const mode = document.getElementById("mode");
const span = document.querySelector(".mode__orange");
const title = document.querySelector(".mode__title");

const modal = document.getElementById("modal");
const cheap = document.getElementById("cheap");
const medium = document.getElementById("medium");
const expensive = document.getElementById("expensive");
const buy = document.getElementById("buy");
const close = document.getElementById("close");
const standard = document.getElementById("standard");
const premium = document.getElementById("premium");
const lifetime = document.getElementById("lifetime");
const send = document.getElementById("send");
const name = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const loading = document.getElementById("loading");
const outter = document.querySelector(".modal__outter");
const name_label = document.querySelector(".name__label");
const email_label = document.querySelector(".email__label");

light_div.addEventListener("click", () => {
  mode.classList.add("light__mode");
  mode.classList.remove("dark__mode");
  if (mode.classList.contains("light__mode")) {
    light.classList.remove("white");
    light.classList.add("orange");
    dark.classList.remove("orange");
    dark.classList.add("black");
    span.textContent = "light";
    title.textContent = "Light Mode";
  }
});

dark_div.addEventListener("click", () => {
  mode.classList.add("dark__mode");
  if (mode.classList.contains("dark__mode")) {
    light.classList.remove("orange");
    light.classList.add("white");
    dark.classList.remove("black");
    dark.classList.add("orange");
    span.textContent = "dark";
    title.textContent = "Dark Mode";
  }
});

cheap.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  outter.style.display = "block";
  standard.classList.add("cheap");
});

medium.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  outter.style.display = "block";
  premium.classList.add("medium");
});

expensive.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  outter.style.display = "block";
  lifetime.classList.add("expensive");
});

buy.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  outter.style.display = "block";
  lifetime.classList.add("expensive");
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  outter.style.display = "none";
  standard.classList.remove("cheap");
  premium.classList.remove("medium");
  lifetime.classList.remove("expensive");
  loading.style.display = "none";
  document.body.style.overflow = "auto";
  form.reset();
  name_label.style.display = "none";
  email_label.style.display = "none";
});

send.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value === "") {
    name_label.style.display = "block";
    email_label.style.display = "none";
    send.disabled = true;
  } else if (email.value === "") {
    name_label.style.display = "none";
    email_label.style.display = "block";
    send.disabled = true;
  }
  loading.style.display = "block";
  setTimeout(function () {
    outter.style.display = "none";
    standard.classList.remove("cheap");
    premium.classList.remove("medium");
    lifetime.classList.remove("expensive");
    loading.style.display = "none";
    document.body.style.overflow = "auto";
    form.reset();
    name_label.style.display = "none";
    email_label.style.display = "none";
  }, 5000);
});
