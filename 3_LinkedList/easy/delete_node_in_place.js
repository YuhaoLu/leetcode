/**
 * 0.Name: 
 * Delete Node in a Linked List
 * 
 * 1.Description:
 * Write a function to delete a node (except the tail) in a singly linked list,
 * given only access to that node.
 * 
 * The linked list will have at least two elements.
 * All of the nodes' values will be unique.
 * The given node will not be the tail and it will always be a valid node of the linked list.
 *
 * 2.Example:
 * Given linked list: 
 *    head
 *     4 -> 5 -> 1 -> 9
 * 
 * Input: head = [4,5,1,9], node = 5
 * Output: [4,1,9]
 * Explanation: You are given the second node with value 5, the linked list
 *              should become 4 -> 1 -> 9 after calling your function.
 * 
 * 3.Solution:
 * In place deletion
 * Don't delete the node, copy the value of the next node to itself
 * 4 -> 5 -> 1 -> 9
 *      ↑____|
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * 
 */

// Function
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteNode = function (node) {
    var next = node.next;
    node.val = next.val;
    node.next = next.next;

};
