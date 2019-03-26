const twoSum = (nums, target) => {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const a = target - nums[i];
        const found = nums.indexOf(a,i+1);
        if(found!== -1){
            return [i,found]
        }
    }
};
const nums = [3,4,4];
console.log(twoSum(nums, 8));