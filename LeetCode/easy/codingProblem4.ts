function revNum(num: number): number {
  let str: string = num.toString();

  let strArr: string[] = str.split("");

  strArr = strArr.reverse();

  let res: string = strArr.join("");
  let getNum: number = parseInt(res);

  if (Math.pow(-2, 31) <= getNum && getNum <= Math.pow(2, 31) - 1) {
    return getNum;
  } else {
    return 0;
  }
}

function reverse(x: number): number {
  let sign: number = x < 0 ? -1 : 1;

  let a: number = revNum(x);

  return a * sign;
}

//test
let res: number = reverse(5758);
