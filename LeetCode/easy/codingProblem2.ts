function removeDuplicates(nums: number[]): number {
  let i: number = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) nums[++i] = nums[j];
  }
  console.log(nums);
  return ++i;
}

//test
let res: any = removeDuplicates(1, 2, 2);
