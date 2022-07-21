import "bootstrap";
import "../styles/styles.scss";
import "./countdown";
import "./modal";
import "./mode";

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const logo = document.querySelector(".nav__logo");

logo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  logo.style.cursor = "pointer";
});
