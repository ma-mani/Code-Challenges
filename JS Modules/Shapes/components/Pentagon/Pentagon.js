import getRandomColor from "../../utils/randomColor.js";

const Pentagon = () => {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor();
  });
  return pentagon;
};

export default Pentagon;
