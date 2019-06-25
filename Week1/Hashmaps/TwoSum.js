/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
  let hash = {}
  
  for (let i = 0; i < nums.length; i++){
      hash[nums[i]] = hash[nums[i]] || []
      hash[nums[i]].push(i)
  }
  
  for (let key in hash){
      let num = parseInt(key)
      if (hash[target-num]){
          if (target - num === num && hash[target - num].length > 1){
              return hash[num]
          }
          else {  
              return [hash[num][0], hash[target-num][0]]
          }
      }
  }
  return false

};
