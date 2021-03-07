const mainFunc = (inpSet: any[]) => {
  const powerSet: any = [];
  getPowSet([], 0);

  function getPowSet(path: any, index: number) {
    powerSet.push(path);
    for (let i = index; i < inpSet.length; i++) {
      getPowSet([...path, inpSet[i]], i + 1);
    }
  }

  return powerSet;
};

// test
mainFunc(["a", "b", "c"]);
