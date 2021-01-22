const area = function (i: number, j: number, heA: number, heB: number) {
  let x: number = j - i;
  let y: number;
  if (heA > heB) {
    y = heB;
  } else {
    y = heA;
  }
  let area: number = x * y;
  return area;
};
const maxArea = function (height: number[]) {
  let are: number[] = [];
  for (let i: number = 0; i < height.length; ++i) {
    for (let j: number = i + 1; j < height.length; ++j) {
      let areaS = area(i, j, height[i], height[j]);
      are.push(areaS);
    }
  }

  let container: any = Math.max(...are);
  return container;
};

//tests
let height: number[] = [4, 3, 2, 1, 4];
let res: number = maxArea(height);
console.log(res);
