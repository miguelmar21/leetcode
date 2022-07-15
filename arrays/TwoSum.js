// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

function TwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let l = i + 1; l < nums.length; l++) {
      if (nums[i] + nums[l] === target) {
        return [i, l]
      }
    }
  }
}

var twoSumFaster = function(nums, target) {
  let map = new Map();
  // Using [2, 7, 11, 15]
  for(let i = 0; i < nums.length; i ++) {
      if(map.has(target - nums[i])) {
          return [map.get(target - nums[i]), i];
      } else {
          map.set(nums[i], i);
      }
  }
return [];
};

//