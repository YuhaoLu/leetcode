/**
 * 0.Name: 
 * First Unique Character in a String
 *
 * 1.Description:
 * Given a string, find the first non-repeating character in it and return it's index. 
 * If it doesn't exist, return -1.
 *
 * 2.Example:
 * Input: s = "loveleetcode"
 * 
 * Output: return 2
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
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
    len = s.length;
    // char histogram
    var dict = {};
    var char = "";
    for(var i=0; i < len; i++) {
        char = s[i];
        if(!(char in dict)) {
            dict[char] = 1;
        }
        else {
            dict[char]++;
        }
    }
    // iterate from the head of the array 
    // to find the first occur unique char
    for(var i=0; i < len; i++) {
        char = s[i];
        if(dict[char] === 1) {
            return i;
        }
    }
    return -1;
};

// Test Cases
var s = "loveleetcode";
console.log(firstUniqChar(s));