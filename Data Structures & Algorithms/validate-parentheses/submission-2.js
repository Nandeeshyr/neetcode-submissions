class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let par = {
            '(': ')', '{': '}', '[': ']'
        }
        let stack = []; // to store only the open bracket
        if(s.length % 2 != 0) return false; //when odd count
        for(let i=0; i<s.length;i++){
            if(par[s[i]]){ //check the opening bracket 
                stack.push(par[s[i]]) //then push it's closing bracket
            }else{  //for the closing bracket
                if(stack.pop() != s[i]){ //check the right end's char with char s[i]
                    return false;
                }
            }
        }
        return stack.length===0; // Return true ONLY if all open brackets were closed
    }
}
