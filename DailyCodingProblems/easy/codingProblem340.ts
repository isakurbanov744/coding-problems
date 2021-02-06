const pythagorFor = (coorA: number[], coorB: number[]) => {
  let x1 = coorA[0];
  let y1 = coorA[1];
  let x2 = coorB[0];
  let y2 = coorB[1];

  let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  return [coorA, coorB, d];
};

const smallestEl = (arr: number[][]) => {
  let largest: number[];

  for (let i = 0; i < arr.length; ++i) {
    if (arr[0][2] > arr[i][2]) {
      arr[0][2] = arr[i][2];
    }
    largest = arr[0];
  }
  return largest;
};

const mainFunc = (coordinates: number[][]) => {
  let distArr: any = [];

  for (let i = 0; i < coordinates.length; ++i) {
    for (let j = i + 1; j < coordinates.length; ++j) {
      distArr.push(pythagorFor(coordinates[i], coordinates[j]));
    }
  }

  let res: number[] = smallestEl(distArr);
  return [res[0], res[1]];
};

// test

const test: number[][] = [
  [1, 1],
  [-1, -1],
  [3, 4],
  [6, 1],
  [-1, -6],
  [-4, -3],
];
let res: number[] = mainFunc(test);
console.log(res);
