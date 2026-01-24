class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0;
        for(let number of nums){
            for(let j = i+1; j<nums.length; j++){
                let answer = [];
                if((number + nums[j]) == target){
                    if(i < (j+1)){
                        answer.push(i);
                        answer.push(j);
                        return answer;
                    }
                    else if(i > (j)){
                        answer.push(j);
                        answer.push(i);
                        return answer;
                    } else{
                        answer.push(i);
                        answer.push(j);
                        return answer;
                    }
                }
            }
            i++;
        }
    }
}
