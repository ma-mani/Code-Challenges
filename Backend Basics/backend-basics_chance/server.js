import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${chance.first()} and i am ${chance.age()} years old. I am a ${chance.profession()}`
  );
});
