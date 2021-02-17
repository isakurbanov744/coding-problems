function countAndSay(n: number): string {
  let init: string = "1";
  
  if (n === 1) return init;

  for (let j = 1; j < n; ++j) {
    let str: string = init.toString();
    let nums: string[] = str.split("");
    let prev: string = nums[0];
    let counter: number = 0;
    let outPut: string = "";

    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] === prev) {
        ++counter;
      } else if (nums[i] !== prev) {
        outPut += counter + prev;
        prev = nums[i];
        counter = 1;
      }
    }
    outPut += counter + prev;

    init = outPut;
  }
  return init;
}

//test
let res: string = countAndSay(4);
