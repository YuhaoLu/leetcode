/**
 * 0.Name: 
 * Two Sum
 *
 * 1.Description:
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * 2.Example:
 * Input: nums = [2, 7, 11, 15], 
 *        target = 9
 * 
 * Output: [0, 1]
 * ( nums[0] + nums[1] = 2 + 7 = 9 )
 * 
 * 3.Solution:
 * Traverse each elem in the array and save [remainder: index] in a dict
 * If find the remainder in the rest numbers, return the index pair.
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * O(n)
 * 
 */

// Function
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var dict = {};
    var remainder = 0;
    for(var i = 0; i < nums.length; i++) {
        elem = nums[i];
        if(elem in dict) {
            return [dict[elem], i];
        }
        
        remainder = target - elem;
        if(!(remainder in dict)) {
            dict[remainder] = i;
        }
        
    }
};

// Test Cases
var nums = [2, 7, 11, 15];
var target = 9;
console.log(twoSum(nums, target));