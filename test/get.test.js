import { get } from "../src";


test("Test With Single layer Object - return exact value", () => {
  const a = { a: 2 };
  expect(get(a, "a")).toEqual(2);
});

test("Test With Single layer Object - return object Value", () => {
  const a = { a: 2, b : { c: "C"} };
  expect(get(a, "b")).toEqual({ c: "C"});
});

test("Test With Multi layer Object - return object Value", () => {
  const a = { a: 2, b : { c: "C"} };
  expect(get(a, "b.c")).toEqual("C");
});