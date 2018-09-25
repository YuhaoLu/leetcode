/**
 * 0.Name: 
 * String to Integer (atoi)
 *
 * 1.Description:
 * Only the space character ' ' is considered as whitespace character.
 * It could only store integers within 32-bit signed integer range: [−2^31,  2^31 − 1]. 
 * If the numerical value is out of the range of representable values, 
 * INT_MAX (2^31 − 1) or INT_MIN (−2^31) is returned.
 * 
 * 2.Example:
 * (1)
 * Input: "42"
 * Output: 42
 * (2)
 * Input: "   -42"
 * Output: -42
 * Explanation: The first non-whitespace character is '-', which is the minus sign.
 *              Then take as many numerical digits as possible, which gets 42.
 * (3)
 * Input: "4193 with words"
 * Output: 4193
 * Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
 * 
 * (4)
 * Input: "words and 987"
 * Output: 0
 * Explanation: The first non-whitespace character is 'w', which is not a numerical
 *              digit or a +/- sign. Therefore no valid conversion could be performed.
 * 
 * (5)
 * Input: "-91283472332"
 * Output: -2147483648
 * Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
 *              Thefore INT_MIN(−231) is returned.
 * 3.Solution:
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * 
 */

// Function
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var num_str = "";
    var num = 0;
    var INT_MAX = 2 ** 31 - 1;
    var INT_MIN = (-1) * 2 ** 31;

    var re = /^\s*([\+\-]?\d+)\D*/g;
    var match = re.test(str);
    if(match) {
        num_str = str.replace(re,'$1');
        num = parseInt(num_str);
        if(num > INT_MAX) num = INT_MAX;
        if(num < INT_MIN) num = INT_MIN;
    }
    return num;
};

var myAtoi = function (str) {
    // Remove heading spaces
    var i = 0;
    var digits = {};
    while(str[i] === ' ') {
        i++;
    }
    // +/- Sign
    var sign = 1;
    if(str[i] === '+') {
        i++;
    }
    else if(str[i] === '-') {
        sign = -1;
        i++;
    }
    // Number
    var num = 0;
    var j = i;
    var INT_MAX = 2 ** 31 - 1;
    var INT_MIN = (-1) * 2 ** 31;
    while(str[j] >= '0' && str[j] <= '9'){
        j++;
    }
    if(i !== j) {
        num = parseInt(str.slice(i, j));
    }
    // Verify Int Range(-2^31, 2^31 - 1)
    var signed_num = sign * num;
    if(signed_num > INT_MAX) signed_num = INT_MAX;
    if(signed_num < INT_MIN) signed_num = INT_MIN;
    return signed_num;
}

// Test Cases
var s1 = "42"
var s2 = "-  42";
var s3 = "4193 with words";
var s4 = "words and 987"
var s5 = "-91283472332"
console.log(myAtoi(s1));
console.log(myAtoi(s2));
console.log(myAtoi(s3));
console.log(myAtoi(s4));
console.log(myAtoi(s5));