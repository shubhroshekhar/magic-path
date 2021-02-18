import { get } from "../src";


test("Test With Single layer Object - return exact value(int)", () => {
  const a = { a: 2 };
  expect(get(a, "a")).toEqual(2);
});

test("Test With Single layer Object - return exact Value(obj)", () => {
  const a = { a: 2, b : { c: "C"} };
  expect(get(a, "b")).toEqual({ c: "C"});
});

test("Test With Multi layer Object - return exact Value(char)", () => {
  const a = { a: 2, b : { c: "C"} };
  expect(get(a, "b.c")).toEqual("C");
});

test("Test With Multi layer Object - return object Value", () => {
  const a = { a: 2, b : { c: "C"} };
  expect(get(a, {"nk":"b.c"})).toEqual({nk: "C"});
});

// test("Test With Multi layer Date Time - return formated String", () => {
//   const a = {a: new Date("2020-02-18T18:32:10.658Z")};
//   expect(get(a, "a.FORMAT_DATEASSTRING$MM/DD/YYYY")).toEqual("02/19/2020");
// });
