/**
 * 0.Name: 
 * Count and Say
 *
 * 1.Description:
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
 *
 * 2.Example:
 * Input & Output:
 * 1    1
 * 2    11
 * 3    21
 * 4    1211
 * 5    111221
 * 
 * 3.Solution:
 * Interation & Memorization
 * -----------------
 * | 1 | 2 | 1 | 1 |
 * -----------------
 *   i
 *       j
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * 
 */

// Function

/**
 * @param {number} n
 * @return {string}
 */
var nextNumber = function (str_arr) {
    var len = str_arr.length;
    var next_str_arr = [];
    var count = 0;
    var i = 0, j = 0;
    while(i < len) {
        j = i;
        while(str_arr[j] === str_arr[i] && j !== len) {
            j++;
        }
        count = j - i;
        next_str_arr.push(count.toString());
        next_str_arr.push(str_arr[i]);
        i = j;
    }
    return next_str_arr;
}

var countAndSay = function (n) {
    str_arr = ["1"];
    for(var i=1; i < n; i++) {
        str_arr = nextNumber(str_arr);
    }
    var str = str_arr.join('');
    return str;
};

// Test Cases
console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));