function revNum(num: number): number {
  let str: string = num.toString();

  let splitString = str.split("");

  let rev: string[] = splitString.reverse();

  let res: string = rev.join("");
  return parseInt(res);
}

function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let temp: number = revNum(x);

  if (temp === x) return true;

  return false;
}

//test
let res: boolean = isPalindrome(121);
