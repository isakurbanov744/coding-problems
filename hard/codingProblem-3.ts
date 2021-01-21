const midEl = (arr: number[], l: number, r: number) => {
  let p: number = r + 1;
  let q: number = l;
  for (let i: number = 0; i < arr.length; ++i) {
    p -= 1;
    q += 1;
    if (p == q) {
      return p;
    }
    if (p < q) {
      return p;
    }
  }
  return q;
};

const binarySearch = (arr: number[], l: number, r: number, x: number): number => {
  if (r >= l) {
    let mid: number = +midEl(arr, l, r);

    if (arr[mid] == x) {
      return mid;
    } else if (arr[mid] > x) {
      return binarySearch(arr, l, mid - 1, x);
    } else {
      mid += 1;
      return binarySearch(arr, mid++, r, x);
    }
  } else {
    return -1;
  }
};

// tests
let array: number[] = [3, 7, 9, 15, 17, 20, 90];
let lef: number = 0;
let rig: number = array.length - 1;
let res: number = binarySearch(array, lef, rig, 90);
console.log(res);

let arrayTwo: number[] = [5, 9, 21, 77, 120];
let lefTwo: number = 0;
let rigTwo: number = arrayTwo.length - 1;
let resTwo: number = binarySearch(arrayTwo, lefTwo, rigTwo, 21);
console.log(resTwo);
