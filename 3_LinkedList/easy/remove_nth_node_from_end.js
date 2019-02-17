/**
 * 0.Name: 
 * Remove Nth Node From End of List
 *
 * 1.Description:
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * 
 * Given n will always be valid.
 * Could you do this in one pass?
 * 
 * 2.Example:
 * Input: linked list: 1->2->3->4->5,
 *                 and n = 2.
 * Output:linked list: 1->2->3->5
 * 
 * 3.Solution:
 *   1->2->3->4->5
 *   j  i
 * 
 * Use two moving pointers
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * 
 */

// Function
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeNthFromEnd = function (head, n) {
    var i = head, j = head;
    var count = 0;
    while(i !== null) {
        if(count > n) {
            j = j.next;
        }
        count++;
        i = i.next;
    }
    j.next = j.next.next;
};

// Test Cases
var nums = [];
console.log(nums);