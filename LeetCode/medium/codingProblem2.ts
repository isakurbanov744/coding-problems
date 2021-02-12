function intToRoman(num: number): string {
  if (num <= 0) {
    return "";
  }
  let rom: any = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let outPut: any = "";
  let index: any;

  for (index in rom) {
    while (num >= rom[index]) {
      outPut += index;
      num -= rom[index];
    }
  }

  return outPut;
}

//test
let inp: string = intToRoman(4);
let inp2: string = intToRoman(0);
let inp3: string = intToRoman(9);
