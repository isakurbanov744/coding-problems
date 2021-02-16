let vowel: string[] = ["a", "e", "i", "o", "u", "y", "w", "h"];

let cons: string[] = ["ck"];

let map: Array<any> = [
  [["b", "f", "p", "v"], 1],
  [["c", "g", "j", "k", "q", "s", "x", "z"], 2],
  [["d", "t"], 3],
  [["m", "n"], 5],
  [["l"], 4],
  [["r"], 6],
];

function removeVowel(str: string[]): string[] {
  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < vowel.length; ++j) {
      if (str[i] === vowel[j]) {
        str.splice(i, 1);
      }
    }
  }
  return str;
}

function similar(str: string): string {
  let tempStr: string[] = str.split("");
  let firstLet: string = tempStr[0];
  let outPut: string = "";
  let ctr: number = 0;

  for (let i = 0; i < tempStr.length; ++i) {
    if (tempStr[i] + tempStr[i + 1] === cons[0]) {
      tempStr.splice(i, 1);
      tempStr.splice(i, 1);
    }
  }

  tempStr = removeVowel(tempStr);

  for (let i = 0; i < map.length; ++i) {
    for (let j = 0; j < map[i][0].length; ++j) {
      for (let k = 0; k < tempStr.length; ++k) {
        if (map[i][0][j] === tempStr[k]) {
          outPut += map[i][1];
          ++ctr;
        }
      }
    }
  }

  while (ctr < 3) {
    outPut += "0";
    ++ctr;
  }

  return firstLet + outPut;
}

function mainFunc(name1: string, name2: string): string | string[] {
  let a: string = similar(name1);
  let b: string = similar(name2);

  if (a === b) return a;

  return [a, b];
}

//test
let res: string | string[] = mainFunc("Jackson", "Jaxen");

let res2: string | string[] = mainFunc("Jackson", "Jack");
