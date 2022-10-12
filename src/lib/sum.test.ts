import { sumFn } from "./sum";

test("Test sum function", () => {
  expect(sumFn(1, 2, 3, 4, 5)).toEqual(15);
});
test("Test sum function", () => {
  expect(sumFn()).toEqual(0);
});

test("Test sum function", () => {
  expect(sumFn(1)).toEqual(1);
});
