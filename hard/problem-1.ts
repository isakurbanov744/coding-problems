let sortItems = (array: number[]) => {
  for (let i: number = 0; i < array.length; ++i) {
    for (let j: number = i + 1; j < array.length; ++j) {
      if (array[i] > array[j]) {
        let temp: number = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

let findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  let median: number;
  let nums3: number[] = nums1.concat(nums2);

  nums3 = sortItems(nums3);

  if (nums3.length % 2 === 0) {
    let middle: number = Math.floor(0 + (nums3.length - 0) / 2);
    let beforeMid: number = middle - 1;
    median = (nums3[beforeMid] + nums3[middle]) / 2;
    return median;
  }

  if (nums3.length % 2 != 0) {
    let mid: number = Math.floor(nums3.length / 2);
    median = nums3[mid];
    return median;
  }
};

// tests
let res: any = findMedianSortedArrays([20, 1], [4, 9, 10]);
console.log(res);

let res2: any = findMedianSortedArrays([1402, 1], [740, 77, 15, 107]);
console.log(res2);
