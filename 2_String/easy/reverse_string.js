/**
 * 0.Name: 
 * Reverse String
 *
 * 1.Description:
 * Write a function that takes a string as input and returns the string reversed.
 *
 * 2.Example:
 * Input: "hello"
 * 
 * Output: "olleh"
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
 * @return {string}
 */

var reverseString = function (s) {
    return s.split("").reverse().join("");
}

var reverseString = function (s) {
    var str = "";
    var len = s.length;
    for(var i=0; i < len; i++) {
        str += s[len-1-i];
    }
    return str;

};

// Test Cases
var s = "Hello";
console.log(reverseString(s));