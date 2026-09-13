class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left =0;
        let right=nums.length-1;
        while(left <= right){
            let mid = Math.floor(left + (right - left) / 2); // Find the middle index
            if(nums[mid] === target){
                return mid;
            }else if(nums[mid] < target){
                left = mid + 1; //target is in right half
            }else{
                right = mid - 1; //target is in left half
            }
        }
        return -1;
        //nums = [-1, 0, 2, 4, 6, 8] and target = 4
        //Step left right mid nums[mid] Comparison Action 
        //1     0     5    2     2        2 < 4    Move left = mid + 1 (now 3)
        //2     3     5    4     6        6 > 4    Move right = mid - 1 (now 3)
        //3     3     3    3     4        4 == 4   Match found at index 3!
        
        // for(let i=0;i <nums.length;i++){
        //     if(nums[i] == target){
        //         return i; 
        //     }
        // }
        // return -1;
        
    }
}
