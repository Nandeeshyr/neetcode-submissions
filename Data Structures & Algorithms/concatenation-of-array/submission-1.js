class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];
        for(let i=0;i<nums.length;i++){
            ans[i] = nums[i]; // placing at the same index as its original array
            ans[i+nums.length] = nums[i]; // It places at offset (i + length), NOT
        }
        //return [...nums, ...nums];
        return ans;
    }
}
