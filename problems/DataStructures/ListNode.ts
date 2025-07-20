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
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
export class ListNode {
  val: any;
  next: ListNode | null;
  /**
   * Creates a new ListNode.
   */
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}
