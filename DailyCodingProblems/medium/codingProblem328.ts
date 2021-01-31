const eloProbability = (scoreOne: number, scoreTwo: number) => {
  return 1.0 / (1.0 + Math.pow(10, (scoreOne - scoreTwo) / 400));
};

const mainFunc = (scoreOne: number, scoreTwo: number, gameRes: boolean) => {
  let eloProbOne = eloProbability(scoreTwo, scoreOne);
  let eloProbTwo = eloProbability(scoreOne, scoreTwo);

  if (gameRes) {
    var ratOne: number = scoreOne + 30 * (1 - eloProbOne);
    var ratTwo: number = scoreTwo + 30 * (0 - eloProbTwo);
  } else {
    var ratOne: number = scoreOne + 30 * (0 - eloProbOne);
    var ratTwo: number = scoreTwo + 30 * (1 - eloProbTwo);
  }

  return [ratOne, ratTwo];
};


// tests
let res: any = mainFunc(2000, 1200, false);
console.log(res);
