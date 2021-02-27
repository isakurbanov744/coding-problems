const mainFunc = (arr: string[] | number[], P: number[]) => {
  if (arr.length !== P.length) return 0;

  let outPut: any = [];

  for (let i = 0; i < P.length; ++i) {
    if (P[i] > P.length) return 0;

    outPut[P[i]] = arr[i];
  }

  return outPut;
};

// test
let arr: string[] = ["a", "b", "c"];
let P: number[] = [2, 5, 0];
mainFunc(arr, P);
