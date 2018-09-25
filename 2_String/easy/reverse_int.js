/**
 * 0.Name: 
 * Reverse Integer
 *
 * 1.Description:
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * We could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1] !!! 
 * the function should return 0 when the reversed integer overflows.
 *
 * 2.Example:
 * Input: 123
 * Output: 321
 * 
 * Input: 120
 * Output: 21
 * 
 * 3.Solution:
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * 
 */

// Function
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    str = x.toString();
    reversed_str = str.split('').reverse().join(''); 
    return Math.sign(x) * parseInt(reversed_str); 
};

var reverse = function(x) {
    var res = 0;
    var sign = 1;
    if(x < 0) {
        sign = -1;
    }
    x = x * sign;
    while (x !== 0) {
        res = res * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    res = res * sign;
    var min = (-1) * 2 ** 31;
    var max = 2 ** 31 - 1;
    if (res < min || res > max) {
        return 0;
    }
    return res;
}

// Test Cases
var num = -120;
console.log(reverse(num));