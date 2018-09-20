/**
 * 0.Name: 
 * Rotate Array
 *
 * 1.Description:
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Could you do it in-place with O(1) extra space?
 *
 * 2.Example:
 * Input:  [1, 2, 3, 4, 5, 6, 7] and k = 3
 * Output: [5, 6, 7, 1, 2, 3, 4]
 * 
 * 3.Solution:
 * array.unshift - add from the head
 * array.shift   - delete from the head
 * array.push    - add from the tail
 * array.pop     - delete from the tail
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * O(1)
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
    k %= nums.length;
    var elem = 0;
    for(var i=0; i < k; i++) {
        elem = nums.pop();
        nums.unshift(elem);
    }
};


var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
rotate(nums, k);
console.log(nums);
