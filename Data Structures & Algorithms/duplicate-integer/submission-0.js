class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */


    hasDuplicate(nums) {
        const seen = new Set();
       for(let each of nums){
            if(seen.has(each)){
                return true;
            }else{
                seen.add(each)
            }
        }
        return false;
        
    }
}
