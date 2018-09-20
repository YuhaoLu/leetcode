/**
 * 0.Name: 
 * Calculate the sum of the increasing subarrays
 *
 * 1.Description:
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit.
 * You may not engage in multiple transactions at the same time.
 *
 * 2.Example:
 * Input: [7, 1, 5, 3, 6, 4]
 * Output: 7
 *        (     4    3     )
 * 
 * 3.Solution:
 * -------------------------
 * | 7 | 1 | 5 | 3 | 6 | 4 |
 * -------------------------
 *   i
 * last  j
 * 
 * 4.Corner Case:
 * The last subarray is increasing, remember to sum up the last segment
 * 
 * 5.Complexity:
 * O(n)
 * 
 */

/**
 * @param {prices[]} nums
 * @return {maxProfit}
 */
var maxProfit = function (prices) {
    if(prices.length < 2) {
        return 0;
    }
    var i=0, last=0, j=1;
    var sum = 0;
    while(j < prices.length) {
        if(prices[last] <= prices[j]) {
            last++;
            j++;
            if(j === prices.length) {
                sum += prices[last] - prices[i];
            }
        }
        else {
            sum += prices[last] - prices[i];
            i = j;
            last = i;
            j++;
        }
    }
    return sum;
};


var prices0 = [7, 1, 5, 3, 6, 4];
var prices1 = [1, 2, 3, 4, 5, 6];
var prices2 = [6, 5, 4, 3, 2, 1];
console.log(maxProfit(prices1));
