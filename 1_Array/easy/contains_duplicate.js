/**
 * 0.Name: 
 * Rotate Array
 *
 * 1.Description:
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 *
 * 2.Example:
 * Input: [1,2,3,1]
 * Output: true
 * 
 * Input: [1,2,3,4]
 * Output: false
 * 
 * 3.Solution:
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * O(n)
 * 
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
    var dict = {};
    for(var i=0; i < nums.length; i++) {
        num = nums[i];
        if(num in dict) {
            return true;
        }
        else {
            dict[num] = 0;
        }
    }
    return false;
};


var nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
