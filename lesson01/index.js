const twoSum = (nums, target) => {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            const a = target - nums[i];
            if (nums[j] === a) {
                return [i, j];
            }
        }
    }
};
const nums = [3, 2,4];
console.log(twoSum(nums, 6));