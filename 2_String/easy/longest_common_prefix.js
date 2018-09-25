/**
 * 0.Name: 
 * Longest Common Prefix
 *
 * 1.Description:
 * Write a function to find the longest common prefix string amongst an array of strings. 
 * If there is no common prefix, return an empty string "".
 * 
 * All given inputs are in lowercase letters a-z.
 *
 * 2.Example:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 3.Solution:
 * Compare character by character for all words in the array
 * 
 * 4.Corner Case:
 * Input: []
 *       (num of words = 0)
 * 
 * 5.Complexity:
 * 
 */

// Function
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var num_words = strs.length;
    if(num_words === 0) {
        return "";
    }
    var char = '';
    // i-th char
    for(var i=0; ; i++) {
        char = strs[0][i];
        // j-th word
        for(var j=0; j < num_words; j++) {
            if(strs[j][i] == undefined || strs[j][i] != char) {
                return strs[0].slice(0,i);
            }
        }
    }

};

// Test Cases
var strs = ["flower", "flow", "flight"];
var lcp = longestCommonPrefix(strs);
console.log(lcp);