class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    //Question: Find the max area of square
    maxArea(heights) {
        let left = 0; //start from left end
        let right = heights.length - 1; //start from right end
        let maxWater = 0; //consider max as 0 at first
        while(left < right){
            let width = right - left;
            let currHeight = Math.min(heights[left],heights[right]);
            let currentArea = width * currHeight;
            maxWater = Math.max(currentArea, maxWater);
            if(heights[left] < heights[right]){
                left++;
            }else{
                right--;
            }
        }
        return maxWater;
    }
}
