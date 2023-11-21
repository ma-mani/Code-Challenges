import getRandomColor from "../../utils/randomColor.js";

const Circle = () => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
};

export default Circle;
