/**
 * 0.Name: 
 * Move Zeroes
 *
 * 1.Description:
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * 2.Example:
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
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
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var len = nums.length;
    var i = 0;
    while(i < len) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            len--;
        }
        else {
            i++;
        }
    }
};

var nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
