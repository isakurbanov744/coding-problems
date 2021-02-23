const mainFunc = (n: number) => {
    let pow: number = 1;
    let res: number = 0;

    while(n) {
        pow = pow * 7;

        if (n & 1) res += pow;

        n >>= 1;
    }
    return res;
}

//test
let res: number = mainFunc(3);
console.log(res);