const dist = (p1: number[], centPoint: number[]): number => {
    let a: number = centPoint[0] - p1[0];
    let b: number = centPoint[1] - p1[1];

    let d: number = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));

    return d;
}

const mainFunc = (n: number[][], centPoint: number[],  k: number): number[][] => {

    let res: number[][] = n.sort((p1: number[], p2: number[]) => dist(p1, centPoint) - dist(p2, centPoint)).slice(0, k);
    return res;

}


// test
let points: number[][] = [[0, 0], [5, 4], [3, 1]];
let centPoint: number[] = [4, 0];
mainFunc(points, centPoint, 2);