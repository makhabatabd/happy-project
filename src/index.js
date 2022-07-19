import "bootstrap";
import "./styles/styles.scss";

const light_div = document.getElementById("light__div");
const dark_div = document.getElementById("dark__div");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const mode = document.getElementById("mode");

light_div.addEventListener("click", () => {
  mode.classList.add("light__mode");
  mode.classList.remove("dark__mode");
  if (mode.classList.contains("light__mode")) {
    light.classList.remove("white");
    light.classList.add("orange");
    dark.classList.remove("orange");
    dark.classList.add("black");
  }
});

dark_div.addEventListener("click", () => {
  mode.classList.add("dark__mode");
  if (mode.classList.contains("dark__mode")) {
    light.classList.remove("orange");
    light.classList.add("white");
    dark.classList.remove("black");
    dark.classList.add("orange");
  }
});
