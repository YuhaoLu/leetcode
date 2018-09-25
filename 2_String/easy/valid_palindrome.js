/**
 * 0.Name: 
 * Valid Palindrome
 *
 * 1.Description:
 * Given a string, determine if it is a palindrome, 
 * considering only alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 *
 * 2.Example:
 * Input: Input: "A man, a plan, a canal: Panama"
 * Output: true
 *        (amanaplanacanalpanama)
 * 
 * Input: "race a car"
 * Output: false
 *         (race a car)
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
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // remove punctuation, change to lowercase
    var s2 = s.replace(/\W/g, '').toLowerCase();
    var len = s2.length;
    for(var i=0; i < len / 2; i++) {
        if(s2[i] !== s2[len-1 - i]) {
            return false;
        }
    }
    return true;
};

// Test Cases
var s = "A man, a plan, a canal: Panama";
var t = "race a car";
console.log(isPalindrome(s));
console.log(isPalindrome(t));