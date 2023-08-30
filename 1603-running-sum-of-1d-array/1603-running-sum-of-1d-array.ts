function runningSum(nums: number[]): number[] {
    if(nums.length <= 1) {
        return nums
    }

    const result = []
     nums.reduce((acc, next) => {
         result.push(acc + next);
         return acc + next;
    }, 0)
    
    return result;
};