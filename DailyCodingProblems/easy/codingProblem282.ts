const mainFunc = (arr: number[]) => {
  for (let i: number = 0; i < arr.length; ++i) {
    for (let j: number = i + 1; j < arr.length; ++j) {
      if (
        Math.pow(arr[i], 2) + Math.pow(arr[j], 2) ===
        Math.pow(arr[j + 1], 2)
      ) {
        return true;
      }
    }
  }
  return false;
};

// tests
const test: number[] = [3, 4, 5, 6, 5, 7];
let res: boolean = mainFunc(test);
console.log(res);
