/**
 * 0.Name: 
 * Implement strStr()
 *
 * 1.Description:
 * Return the index of the first occurrence of needle in haystack, 
 * or -1 if needle is not part of haystack.
 *
 * 2.Example:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 3.Solution:
 * 
 * 4.Corner Case:
 * What should we return when needle is an empty string?
 * This is a great question to ask during an interview.
 * we will return 0 when needle is an empty string.
 * 
 * 5.Complexity:
 * 
 */

// Function
var strStr = function (haystack, needle) {
    return haystack.search(needle);
};

// KMP Algorithm??
var strStr = function (haystack, needle) {
    if(needle.length === 0) {
        return 0;
    }
    var times = haystack.length - needle.length + 1;
    for(var i=0; i < times; i++) {
        var j = 0;
        while(haystack[i+j] === needle[j]){
            j++;
        }
        if(j === needle.length) {
            return i;
        }
    }
    return -1;
};

// Test Cases
var haystack = "hello";
var needle = "ll";

var haystack1 = "aaaaa";
var needle1 = "bba";

console.log(strStr(haystack,needle));
console.log(strStr(haystack1, needle1));