var nextPermutation = function(nums: any) {
    
    for(let i = nums.length-1; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            const large = nextLarge(i);
            swap(i, large);
            reverse(i+1);
            console.log(nums)
            return;
        }
    }
	
    nums.reverse()
    
    function swap(i: any, j: any) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function reverse(idx: any) {
        let start = idx, end = nums.length-1;
        
        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
    
    function nextLarge(idx: number) {
        for(let i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) 
            return i;
        }
        return;
    }
};

//test
nextPermutation([1, 3, 2])