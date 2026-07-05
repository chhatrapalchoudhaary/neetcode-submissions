class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const char = {}
        if (s.length !== t.length) return false;
        for (let each of s){
            char[each]=(char[each] || 0 )+1
        }
        for (let each of t)
        {
            if(!char[each]) return false;
            char[each]--;
        }
        return true;

    }
}
