/**
 * 0.Name: 
 * Intersection(交集) of two arrays (not two Sets!!)
 *
 * 1.Description:
 * Given two arrays, write a function to compute their intersection
 * Each element in the result should appear as many times as it shows in both arrays.  <-----
 * The result can be in any order.
 * 
 * - What if the given array is already sorted? How would you optimize your algorithm?
 * - What if nums1's size is small compared to nums2's size? Which algorithm is better?
 * - What if elements of nums2 are stored on disk, and the memory is limited 
 *   such that you cannot load all elements into the memory at once?
 *
 * 2.Example:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 * 
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 * 
 * 3.Solution:
 * Create a histogram dict for one array (num: times), 
 * the times represent the max number of times an elem can be printed. - O(m)
 * 
 * For every element x of the other array, Search x in the dict. 
 * If x is present, print it, and decrease the times - O(n)
 * 
 * Complexity: O(m+n)
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


var intersect = function (nums1, nums2) {
    var nums1_dict = {};
    var i, elem;
    for (i = 0; i < nums1.length; i++) {
        elem = nums1[i];
        if(!(elem in nums1_dict)) {
            nums1_dict[elem] = 1;
        }
        else {
            nums1_dict[elem]++;
        }
    }

    var arr = [];
    for (i = 0; i < nums2.length; i++) {
        elem = nums2[i];
        if(elem in nums1_dict && nums1_dict[elem] > 0) {
            arr.push(elem);
            nums1_dict[elem]--;
        }
    }
    return arr;
};

var nums1 = [4, 9, 5];
var nums2 = [9, 4, 9, 8, 4];

var nums11 = [1, 2, 2, 1];
var nums22 = [2, 2];
intersect_part = intersect(nums11, nums22);
console.log(intersect_part);