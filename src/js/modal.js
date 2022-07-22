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
    document.body.style.overflow = "hidden";
    plan = e.target.value;
    modal.style.display = "block";
    outter.style.display = "block";
    inputs.forEach((item) =>
      item.value == plan ? (item.checked = true) : (item.checked = false)
    );
  })
);

function changeName() {
  name_label.style.display = "block";
  name.style.backgroundColor = "#FFEEEE";
}

function changeEmail() {
  email_label.style.display = "block";
  email.style.backgroundColor = "#FFEEEE";
}

function undoName() {
  name_label.style.display = "none";
  name.style.backgroundColor = "#F2F2F2";
}

function undoEmail() {
  email_label.style.display = "none";
  email.style.backgroundColor = "#F2F2F2";
}

close.addEventListener("click", (e) => {
  e.preventDefault();
  outter.style.display = "none";
  modal.style.display = "block";
  loading.style.display = "none";
  document.body.style.overflow = "auto";
  form.reset();
  undoEmail();
  undoName();
});

send.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value === "") {
    changeName();
  }
  if (email.value === "") {
    changeEmail();
  }
  if (name.value !== "" && email.value !== "") {
    loading.style.display = "block";
    undoEmail();
    undoName();
    setTimeout(function () {
      outter.style.display = "none";
      loading.style.display = "none";
      document.body.style.overflow = "auto";
      form.reset();
    }, 3000);
  }
});

name.addEventListener("input", () => {
  name.value !== "" ? undoName() : changeName();
});

email.addEventListener("input", () => {
  email.value !== "" ? undoEmail() : changeEmail();
});
