const cons = (a: any, b: any) => {
  return [a, b];
};

const car = (f: any) => {
  return f[0];
};

const cdr = (f: any) => {
  return f[1];
};

// test
console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));
