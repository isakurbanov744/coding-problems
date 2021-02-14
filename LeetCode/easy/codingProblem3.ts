function removeElement(nums: number[], val: number): number {
  if (nums.length === 0 || val < 0) return 0;

  let counter: number = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== val) {
      nums[counter] = nums[i];
      ++counter;
    }
  }

  return counter;
}

//test
let res: number = removeElement([2, 2, 3, 2], 2);