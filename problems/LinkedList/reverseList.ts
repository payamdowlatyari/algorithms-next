import { ListNode } from '../DataStructures/ListNode';

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

/**
 * Reverses a singly linked list.
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 * @example
 * const head = new ListNode(1, new ListNode(2, new ListNode(3)));
 * const result = reverseList(head);
 * console.log(linkedListToArray(result)); // Output: [3, 2, 1]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  let next: ListNode | null = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
