class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    let left = 0; //start from left
    let right = s.length - 1; // start from right

    while(left < right){
        let codeL = s.charCodeAt(left); // convert to ASCII
        let codeR = s.charCodeAt(right);

        if(codeL>=65 && codeL <=90) codeL +=32; // convert from capital to small
        if(codeR>=65 && codeR <=90) codeR +=32;
        
        // Skip non-alpha && numeric from left
        if(!((codeL>=97 && codeL<=122) || (codeL>=48 && codeL<=57))){
            left++;
            continue;
        }
        // Skip non-alpha & numeric from right
        if(!((codeR>=97 && codeR<=122) || (codeR>=48 && codeR<=57))){
            right--;
            continue;
        }

        if(codeL !== codeR){
            return false;
        }
        
        left++;
        right--;
    }
      return true; 
    }
}
