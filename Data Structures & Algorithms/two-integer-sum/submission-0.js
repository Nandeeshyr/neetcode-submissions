class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map={};
        for(let i=0; i<nums.length; i++){
            let c = target - nums[i];
            if(c in map){
                return [map[c],i];
            }
            map[nums[i]]=i;
        }
        return [];
    }
}
