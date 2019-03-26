// const twoSum = (nums, target) => {
//     const len = nums.length;
//     for (let i = 0; i < len; i++) {
//         const a = target - nums[i];
//         const found = nums.indexOf(a,i+1);
//         if(found!== -1){
//             return [i,found]
//         }
//     }
// };
// const twoSum = (nums, target) => {
//     if (nums.length === 2) return [0, 1];
//     const len = nums.length;
//     const hashmap={};
//     for (let i = 0; i < len; i++) {
//         hashmap[nums[i]]=i;     
//     }
//     for (let i = 0; i < len; i++) {
//         const n = target - nums[i];
//         const found = hashmap[n];
//         if(found !== undefined && found != i) return [i, found]; 
//     }
//     return [0,0];
// };

// const twoSum = (nums, target) => {
//     if (nums.length === 2) return [0, 1];
//     const len = nums.length;
//     let hashmap = {};
//     for(let i = 0; i < len; i++) {
//         let n = target - nums[i];
//         let find = hashmap[n];
//         if(find !== undefined) return [find, i];
//         else hashmap[nums[i]] = i;
//     }
// };

const twoSum = (nums, target) => {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let map = new Map();
    for(let i = 0; i < len; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
};
const nums = [3,4,4];
console.log(twoSum(nums, 8));