import { ListNode } from '../DataStructures/ListNode';

// Reverse Linked List II

// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

// Constraints:
// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

// Follow up: Could you do it in one pass?

/**
 * Reverses a linked list from left to right
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 *
 * @example
 * const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
 * const result = reverseBetween(head, 2, 4);
 * console.log(linkedListToArray(result)); // Output: [1, 4, 3, 2, 5]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function reverseBetween(
  head: ListNode,
  left: number,
  right: number,
): ListNode | null {
  if (!head) return null;

  let curr: ListNode | null = head;
  let prev: ListNode | null = null;
  let count = 1;

  while (count < left) {
    prev = curr;
    curr = curr ? curr.next : null;
    count++;
  }

  const start: ListNode | null = prev;
  const end: ListNode | null = curr;

  while (count <= right && curr) {
    const next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
  }

  if (start) start.next = prev;
  if (end) end.next = curr;

  if (left === 1) return prev;
  return head;
}
