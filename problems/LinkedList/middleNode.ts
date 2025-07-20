import { ListNode } from '../DataStructures/ListNode';

// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

/**
 * Returns the middle node of a linked list.
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 * @example
 * const head = new ListNode(1, new ListNode(2, new ListNode(3)));
 * const middle = middleNode(head);
 * console.log(middle.val); // Output: 2
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function middleNode(head: ListNode | null): ListNode | null {
  let count = 0;
  let curr: ListNode | null = head;

  while (curr) {
    count++;
    curr = curr.next;
  }

  let half = Math.floor(count / 2);
  curr = head;

  while (half > 0 && curr !== null) {
    curr = curr.next;
    half--;
  }

  return curr;
}
