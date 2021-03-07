const mainFunc = (nums: number[]) => {
  let numsSet = new Set(nums);
  let counter: number = 1;

  while (numsSet.has(counter)) {
    ++counter;
  }

  return counter;
};

// test
mainFunc([3, 4, -1, 1]);
