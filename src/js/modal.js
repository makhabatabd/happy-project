// const modal = document.getElementById("modal");
// const cheap = document.getElementById("cheap");
// const medium = document.getElementById("medium");
// const expensive = document.getElementById("expensive");
// const buy = document.getElementById("buy");
// const close = document.getElementById("close");
// const standard = document.getElementById("standard");
// const premium = document.getElementById("premium");
// const lifetime = document.getElementById("lifetime");
// const send = document.getElementById("send");
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const form = document.getElementById("form");
// const loading = document.getElementById("loading");
// const outter = document.querySelector(".modal__outter");
// const name_label = document.querySelector(".name__label");
// const email_label = document.querySelector(".email__label");

// cheap.addEventListener("click", () => {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden";
//   outter.style.display = "block";
//   standard.classList.add("cheap");
// });

// medium.addEventListener("click", () => {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden";
//   outter.style.display = "block";
//   premium.classList.add("medium");
// });

// expensive.addEventListener("click", () => {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden";
//   outter.style.display = "block";
//   lifetime.classList.add("expensive");
// });

// buy.addEventListener("click", () => {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden";
//   outter.style.display = "block";
//   lifetime.classList.add("expensive");
// });

// close.addEventListener("click", (e) => {
//   e.preventDefault();
//   modal.style.display = "none";
//   outter.style.display = "none";
//   standard.classList.remove("cheap");
//   premium.classList.remove("medium");
//   lifetime.classList.remove("expensive");
//   loading.style.display = "none";
//   document.body.style.overflow = "auto";
//   form.reset();
//   name_label.style.display = "none";
//   email_label.style.display = "none";
// });

// close.addEventListener("click", (e) => {
//   e.preventDefault();
//   outter.style.display = "none";
//   modal.style.display = "block";
//   standard.classList.remove("cheap");
//   premium.classList.remove("medium");
//   lifetime.classList.remove("expensive");
//   loading.style.display = "none";
//   document.body.style.overflow = "auto";
//   form.reset();
//   name_label.style.display = "none";
//   email_label.style.display = "none";
// });

// send.addEventListener("click", (e) => {
//   e.preventDefault();
//   name.value === ""
//     ? (name_label.style.display = "block")
//     : (name_label.style.display = "none");
//   email.value === ""
//     ? (email_label.style.display = "block")
//     : (email_label.style.display = "none");
//   if (name.value !== "" && email.value !== "") {
//     loading.style.display = "block";
//     setTimeout(function () {
//       outter.style.display = "none";
//       standard.classList.remove("cheap");
//       premium.classList.remove("medium");
//       lifetime.classList.remove("expensive");
//       loading.style.display = "none";
//       document.body.style.overflow = "auto";
//       form.reset();
//     }, 3000);
//   }
// });

const buttons = document.querySelectorAll(".option__button");
const inputs = document.querySelectorAll(".modal-plan__radio");
const modal = document.getElementById("modal");
const outter = document.querySelector(".modal__outter");
const name_label = document.querySelector(".name__label");
const email_label = document.querySelector(".email__label");
const form = document.getElementById("form");
const loading = document.getElementById("loading");
const name = document.getElementById("name");
const email = document.getElementById("email");
const close = document.getElementById("close");
const send = document.getElementById("send");

let plan;

buttons.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
    // document.body.style.overflow = "hidden";
    plan = e.target.value;
    modal.style.display = "block";
    outter.style.display = "block";

    console.log(inputs);
    inputs.forEach((item) =>
      item.value == plan ? (item.checked = true) : (item.checked = false)
    );
  })
);

close.addEventListener("click", (e) => {
  e.preventDefault();
  outter.style.display = "none";
  modal.style.display = "block";
  loading.style.display = "none";
  document.body.style.overflow = "auto";
  form.reset();
  name_label.style.display = "none";
  email_label.style.display = "none";
});

send.addEventListener("click", (e) => {
  e.preventDefault();
  name.value === ""
    ? (name_label.style.display = "block")
    : (name_label.style.display = "none");
  email.value === ""
    ? (email_label.style.display = "block")
    : (email_label.style.display = "none");
  if (name.value !== "" && email.value !== "") {
    loading.style.display = "block";
    setTimeout(function () {
      outter.style.display = "none";
      loading.style.display = "none";
      document.body.style.overflow = "auto";
      form.reset();
    }, 3000);
  }
});
