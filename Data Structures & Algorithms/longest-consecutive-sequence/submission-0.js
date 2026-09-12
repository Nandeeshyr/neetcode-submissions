class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let maxLen = 0;
        for(let num of numSet){
            if(!numSet.has(num-1)){ //checks its predecessor number else enters-in
                let curNum = num; 
                let curLen = 1;
                while(numSet.has(curNum+1)){ //runs until curNum has successor number
                    curNum++;
                    curLen++;
                }
                maxLen = Math.max(maxLen,curLen);
            }
        }
    return maxLen;
    }
}
