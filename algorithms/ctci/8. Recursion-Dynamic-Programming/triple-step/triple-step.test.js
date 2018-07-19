import tripleStep from "./triple-step";

test(`1 possible way to go up 1 step`, () => {
  expect(tripleStep(1)).toEqual(1);
});
