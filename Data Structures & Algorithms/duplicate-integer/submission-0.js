class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
hasDuplicate(nums) {
        let map={};
        for(let n of nums){
            map[n] = (map[n] || 0) + 1;
            if(map[n] > 1) return true;
        }
        return false;
    }
}
