export const rotate = (nums, k) => {
  const numsLength = nums.length;
  const rotateBy = k % nums.length;
  return [
    ...nums.slice(numsLength - rotateBy),
    ...nums.slice(0, numsLength - rotateBy)
  ];
};

export const rotateMutate = (nums, k) => {
    
}