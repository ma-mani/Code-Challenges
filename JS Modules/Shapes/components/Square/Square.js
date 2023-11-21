import getRandomColor from "../../utils/randomColor.js";

const Square = () => {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
  });
  return square;
};

export default Square;
