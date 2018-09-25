/**
 * 0.Name: 
 * Valid Anagram
 *
 * 1.Description:
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 *
 * 2.Example:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 3.Solution:
 * Creat a char histogram for string s
 * decrease the count for a char if it appears in string t once, if not return false
 * check if every count number ends up to 0
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * O(n)
 * 
 */

// Function
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // char Histogram
    var s_dict = {};
    var char = "";
    for(var i=0; i<s.length; i++) {
        char = s[i]
        if(!(char in s_dict)){
            s_dict[char] = 1;
        }
        else{
            s_dict[char]++;
        }
    }
    // anagram or not
    for(var i=0; i<t.length; i++) {
        char = t[i];
        if(!(char in s_dict)) {
            return false;
        }
        else {
            s_dict[char]--;
        }
    }
    //// Iterate ench values in a dict
    for(var char in s_dict){
        if(s_dict[char] !== 0) {
            return false;
        }
    }
    return true;
};

// Test Cases
var s = "anagram";
var t = "nagaram";
var s1 = "rat";
var t1 = "car";
var s2 = "ab";
var t2 = "a";
console.log(isAnagram(s, t));
console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));