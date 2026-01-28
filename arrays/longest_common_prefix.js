class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        for(let i = 1; i<strs.length; i++){
            for(let j = 0; j<prefix.length; j++){
                if(strs[i][j] === prefix[j]){
                    continue;
                } else{
                    prefix = prefix.slice(0, j);
                    if(prefix === ''){
                        return prefix;
                    }
                    break;
                }
            }
        }
        return prefix;
    }
}
