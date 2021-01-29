const flip = (str: string, n: number) => {
  let counter: number = 0;
  for (let i: number = 0; i < n; ++i) {
    if (str[i] == "y") {
      ++counter;
    }
  }
  return counter;
};

const mainFunc = (str: string) => {
  let n: number = str.length;
  let lastXInd: number = 0;

  for (let i: number = 0; i < n; ++i) {
    if (str[i] == "x") {
      lastXInd = i;
    }
  }
  let count: number = flip(str, lastXInd);
  return count;
};

const test: string = "xyxxxyxyy";
const res: number = mainFunc(test);
console.log(res);

const testTwo: string = "xyxxxyxyyx";
const resTwo: number = mainFunc(testTwo);
console.log(resTwo);
