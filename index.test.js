// const stringLength = require("./index.js");
// const reverseString = require("./index.js");
// import { test } from "mocha";
import {stringLength, reverseString } from "./index.js"

//TASK 1

test("Expect that this test shows an error", () => {
//   expect(stringLength("happym")).toEqual(6);
  expect(() => stringLength("Happpy go luckky")).toThrow("It didn't work");
});
test("Expect that this test shows an error", () => {
  expect(stringLength("happym")).toEqual(6);
});


//Task 2

test("Expect that this test reverses string", () => {
  expect(reverseString("HELLO")).toEqual("OLLEH");
 
});