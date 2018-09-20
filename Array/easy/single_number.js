/**
 * 0.Name: 
 * Single Number
 *
 * 1.Description:
 * Given a non-empty array of integers, every element appears twice except for one. 
 * Find that single one. Your algorithm should have a linear runtime complexity. 
 * Could you implement it without using extra memory?
 *
 * 2.Example:
 * Input: [4,1,2,1,2]
 * Output: 4
 * 
 * 3.Solution:
 * ^ - XOR each and every numbers
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * O(n)
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var singleNumber = function(nums) {
  var single_num = 0;
  for(var i = 0; i < nums.length; i++) {
      single_num ^= nums[i];
  }

  return single_num;    
};

var nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
