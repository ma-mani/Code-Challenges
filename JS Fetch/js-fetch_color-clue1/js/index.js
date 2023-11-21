import "./game.js";
import { fetchNewColor } from "./fetch.js";

console.clear();

const data = await fetchNewColor();
console.log(data);
