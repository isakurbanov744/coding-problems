function subsets(nums: number[]): number[][] {
  const powerSet: any = [];
  getPowSet([], 0);

  function getPowSet(path: any, index: number) {
    powerSet.push(path);
    for (let i = index; i < nums.length; i++) {
      getPowSet([...path, nums[i]], i + 1);
    }
  }

  return powerSet;
}
