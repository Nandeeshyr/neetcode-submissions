class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length) return false;
        let map = {};
        for(let n of s){ //Map creation
            map[n] = (map[n] || 0) + 1;
        }
        for(let n of t){
            if(!map[n]){
                return false;
            }
            map[n]--;
        }
        return true;
    }
}
