const mainFunc = (n: number): number[] => {
  if (n === 1) return [1];

  let num: number = n;
  let outPutArr: number[] = [n];

  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : 3 * num + 1;
    outPutArr.push(num);
  }

  return outPutArr;
};

// test
let res: number[] = mainFunc(12);
