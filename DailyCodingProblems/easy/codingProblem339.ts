const mainFunc = (arr: number[], k: number) => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      for (let c = j + 1; c < arr.length; ++c) {
        if (arr[i] + arr[j] + arr[c] === k) {
          return true;
        }
      }
    }
  }
  return false;
};


// tests
const arr: number[] = [20, 303, 3, 4, 25];
const k: number = 49;
let res: boolean = mainFunc(arr, k);
