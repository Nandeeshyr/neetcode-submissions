class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let out = [];
       let p = 1;
       // Multiplies the number with the numbers on its left only (Prefix Pass)
       // Ex 1: [1,2,4,6]    => [1,  1*1,  1*1*2,  1*1*2*4]  => [1, 1,  2, 8]
       // Ex 2: [-1,0,1,2,3] => [1, 1*-1, 1*-1*0, 1*-1*0*1, 1*-1*0*1*2] => [1, -1, 0, 0, 0]
        let pre = 1;
        for(let i=0; i< nums.length; i++){
            out[i] = pre;
            pre = pre * nums[i];
        }
       // Multiplies the left-side product with the numbers on its right only (Postfix Pass)
       // Ex 1: [1,1,2,8]    => [1*(1*6*4*2), 1*(1*6*4), 2*(1*6), 8*(1)] => [48, 24, 12, 8]
       // Ex 2: [1,-1,0,0,0] => [1*(1*3*2*1*0), -1*(1*3*2*1), 0*(1*3*2), 0*(1*3), 0*(1)] => [0, -6, 0, 0, 0]
        let post = 1;
        for(let j=nums.length-1;j>=0;j--){
            out[j] *= post;
            post = post * nums[j];
        }
       return out;
    }
}
