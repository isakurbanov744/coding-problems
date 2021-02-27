let map: any = {
   0: "0",
   1: "1",
   6: "9",
   8: "8",
   9: "6"
};

const mainFunc = (n: number): string[] => {
  return getNum(n, n);
};

const getNum = (n: number, m: number): string[] => {
  if (n === 0 || n < 0) return [""];
  if (n === 1) return [map[0], map[1], map[8]];

  const result: string[] = [];
  const list: string[] = getNum(n - 2, m);

  for (let i = 0; i < list.length; i++) {
    const s: string = list[i];

    if (n !== m) result.push(map[0] + s + map[0]);

    result.push(map[1] + s + map[1]);
    result.push(map[6] + s + map[6]);
    result.push(map[8] + s + map[8]);
    result.push(map[9] + s + map[6]);
  }

  return result;
};

// test
mainFunc(3);
