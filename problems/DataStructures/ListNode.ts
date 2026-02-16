// ListNode class

// ListNode is a class that represents a node in a linked list.
// It has a value and a reference to the next node in the list.

// ListNode(val) creates a new ListNode object with the given value and a null next reference.
// ListNode(val, next) creates a new ListNode object with the given value and the specified next reference.

/**
 * Definition for singly-linked list.
 *
 * @param {number} val - The value of the node.
 * @param {ListNode | null} next - The next node in the list.
 * @return {ListNode}
 *
 * @example
 * const node = new ListNode(1);
 * console.log(node.val); // Output: 1
 * console.log(node.next); // Output: null
 *
 * const node2 = new ListNode(2, node);
 * console.log(node2.val); // Output: 2
 * console.log(node2.next); // Output: ListNode { val: 1, next: null }
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
export class ListNode {
  val: any;
  next: ListNode | null;
  /**
   * Creates a new ListNode.
   * @param {any} val - The value of the node.
   * @param {ListNode | null} [next=null] - The next node in the list.
   */
  constructor(val: any, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
