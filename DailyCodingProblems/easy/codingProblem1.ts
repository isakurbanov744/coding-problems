const mainFunc = (nums: number[], k: number): boolean => {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (nums[i] + nums[j] == k) {
        return true;
      }
    }
  }

  return false;
};

// test
mainFunc([10, 15, 3, 7], 17);
