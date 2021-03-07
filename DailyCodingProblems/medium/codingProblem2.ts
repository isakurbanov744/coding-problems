const _mainFunc = (nums: number[], indx: number): number => {
  let right: number = 1;
  let left: number = 1;

  for (let i = 0; i < nums.length; ++i) {
    if (i < indx) {
      left *= nums[i];
    }
    if (i > indx) {
      right *= nums[i];
    }
  }

  return right * left;
};

const mainFunc = (nums: number[]): number[] => {
  let outPut: number[] = [];

  for (let i = 0; i < nums.length; ++i) {
    outPut.push(_mainFunc(nums, i));
  }
  
  return outPut;
};

// test
mainFunc([1, 2, 3, 4, 5]);
