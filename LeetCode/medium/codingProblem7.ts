const dist = (p1: number[]): number => {
  let x1: number = p1[0];
  let y1: number = p1[1];

  return x1 * x1 + y1 * y1;
};

const kClosest = (points: number[][], K: number): number[][] => {
  let r: number[][] = points.sort((a, b) => dist(a) - dist(b)).slice(0, K);
  return r;
}

// test
kClosest([[1, 3], [-2, 2]], 1);