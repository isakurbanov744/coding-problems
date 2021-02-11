const countNums = (base: string) => {
  let output: string = "";
  let count: number = 0;
  let prev: string = base[0];

  for (let i = 0; i < base.length; ++i) {
    if (base[i] === prev) {
      count++;
    } 
    else {
      output += count.toString() + prev;
      prev = base[i];
      count = 1;
    }
  }
  output += count.toString() + prev;
  return output;
};

const mainFunc = (base: string, n: number) => {
  for (let i = 0; i < n; ++i) {
    base = countNums(base);
  }
  console.log(base);
};

mainFunc("1", 5);
