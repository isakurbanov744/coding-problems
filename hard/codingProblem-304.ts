const move = (mat: number[][], p: number, q: number) => {
  let Xmoves: Array<number> = [2, -1, 1, -2, -2, -1, 1, 2];
  let Ymoves: Array<number> = [-1, 2, 2, 1, -1, -2, -2, 1];
  let validMoves: number[][] = [];

  for (let i: number = 0; i < 8; i++) {
    let x: number = p + Xmoves[i];
    let y: number = q + Ymoves[i];
    if (x >= 0 && y >= 0 && x < 8 && y < 8 && mat[x][y] == 0) {
      validMoves.push([x, y]);
    }
  }
  return validMoves;
};

const explore = (
  mat: number[][],
  pos: Array<number>,
  turns: number,
  valData: any
) => {
  if (turns === 0) {
    return false;
  }

  let p: number = pos[0];
  let q: number = pos[1];

  let moves: any = move(mat, p, q);

  valData[0] += 8;
  valData[1] += moves.length;

  for (let i: number = 0; i < moves.length; ++i) {
    explore(mat, moves[i], turns - 1, valData);
  }
};

const prob = (mat: number[][], pos: Array<number>, turns: number) => {
  let valData: Array<number> = [0, 0];

  explore(mat, pos, turns, valData);

  return valData[1] / valData[0];
};

// tests
const board: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

let turns: number = 7;
let position: number[] = [0, 0];

let res: number = prob(board, position, turns);

console.log("Probability is: ", res.toFixed(4));
