/**
 * 0.Name: 
 * Plus One
 *
 * 1.Description:
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, 
 * and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * 2.Example:
 * Input: [1,2,3]
 * Output: [1,2,4]
 * 
 * 3.Solution:
 * Append one zero at the head of the list, calculate the result
 * if the head elem is still 0, remove it
 * carry_bit = (result > 9) ? 1 : 0;
 * 
 * 4.Corner Case:
 * Input: [9, 9, 9]
 * Output: [1, 0, 0, 0]
 * 
 * 5.Complexity:
 * O(n)
 * 
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    digits.unshift(0);
    var carry_bit = 1;
    for(var i = digits.length - 1; i >= 0; i--) {
        result = digits[i] + carry_bit;
        digits[i] = result % 10;
        carry_bit = (result > 9) ? 1 : 0;
    }
    if(digits[0] === 0) {
        digits.shift();
    }
    return digits;
};

var nums = [1, 2, 3];
var nums1 = [9, 9, 9];

console.log(plusOne(nums1));
