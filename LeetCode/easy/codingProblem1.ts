function romanToInt(s: string): number {
  let rom: object = {
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

  if (s.length === 0) {
    return 0;
  }

  let arr: string[] = s.split("");
  let sum: number = 0;
  let current: string;
  let currentVal: number;
  let next: string;
  let nextVal: number;

  for (let i = 0; i < arr.length; ++i) {
    current = arr[i];
    currentVal = rom[current];

    next = arr[i + 1];
    nextVal = rom[next];

    currentVal < nextVal ? (sum -= currentVal) : (sum += currentVal);
  }

  return sum;
}

// test
let res: number = romanToInt("III");

let res2: number = romanToInt("MCMXCIV");
