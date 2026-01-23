class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /*for every element of arr, delete a match from arr2
        if arr2 is empty when all elements of arr are exhausted, then we know that arr and arr2 are anagrams.
        */
        let s_arr = [...s];
        let t_arr = [...t];
        if(s_arr.length === t_arr.length){
            for(let element of s_arr){
                for(let i = 0; i<t_arr.length; i++){
                    if(element === t_arr[i]){
                        t_arr.splice(i, 1);
                        break;
                    }
                }
            }  
        }else{
            (s_arr.length != t_arr.length)
            return false;
        }
        if(t_arr.length == 0){
            return true;
        }else{
            return false;
        }
    }
}
