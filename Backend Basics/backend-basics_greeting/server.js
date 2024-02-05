import { createServer } from "node:http";

// export const server = …

export const server = createServer((request, response) => {
  console.log("diese");
  response.end(`Hello, Mani!`);
});
