function divide(dividend: number, divisor: number): number {
  let signDividend: number = dividend < 0 ? -1 : 1;
  let signDivisor: number = divisor < 0 ? -1 : 1;
  let quo: number = 0;

  if (divisor === 0) return 0;

  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  if (dividend === divisor) return 1 * (signDividend * signDivisor);

  if (divisor === 1 && dividend != 2147483647) return dividend * (signDividend * -signDivisor);

  if (divisor === 1 || divisor === -1) return dividend * (signDividend * signDivisor);

  if (dividend === -2147483648 && divisor > 0) dividend = 2147483649;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  while (dividend > divisor) {
    dividend -= divisor;
    ++quo;
  }

  return quo * (signDividend * signDivisor);
}

//test
let res: number = divide(-1, 1);
