import { rotate } from "./rotate-array";

test(`Move Array [1,2,3,4,5,6,7] with k=3`, () => {
  expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
});

test(`Move Array [1,2,3,4,5,6,7] with k=10`, () => {
  expect(rotate([1, 2, 3, 4, 5, 6, 7], 10)).toEqual([5, 6, 7, 1, 2, 3, 4]);
});

test(`Move Array [1,2,3,4,5,6,7] with k=3`, () => {
  expect(rotate([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([4, 5, 6, 7, 1, 2, 3]);
});
