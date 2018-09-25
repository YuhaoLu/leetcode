/**
 * 0.Name: 
 * Remove Duplicates from sorted array
 *
 * 1.Description:
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 *
 * 2.Example:
 * Input: nums = [1,1,2],
 * Output: nums = [1,2, ...]
 * Return Val: 2 (new array length)
 * 
 * 3.Solution:
 * ----------------------
 * | 1 | 1 | 2 | ...
 * ----------------------
 *   i   j
 * 
 *  if num[i] === nums[j]:
 *      remove nums[j];
 *      len--;
 *  else:
 *      i++;
 *      j++;
 * 
 * Use Array as a Linklist ???
 * 
 * 4.Corner Case:
 * nums.length < 2
 * 
 * 5.Complexity:
 * O(n)
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    len = nums.length;
    if(len < 2) {
        return len;
    }
    var i=0, j=1;
    while(j < len) {
        if(nums[i] === nums[j]) {
            nums.splice(j, 1);
            len--;
        }
        else {
            i++;
            j++;
        }
    }
    return nums.length;
};


var arr = [1, 2, 2];
console.log(arr);
len = removeDuplicates(arr);
console.log(arr);
console.log(len);

