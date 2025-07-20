import { ListNode } from '../DataStructures/ListNode';

// Given the head of a linked list and an integer val, remove all the nodes of
// the linked list that has Node.val == val, and return the new head.

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50

// Follow up: Could you solve it in one pass?

/**
 * Definition for singly-linked list.
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 *
 * @example
 * const head = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
 * const newHead = removeElements(head, 6);
 * // newHead is now 1 -> 2 -> 3 -> 4 -> 5
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function removeElements(
  head: ListNode | null,
  val: number,
): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;
  let curr = head;
  let prev = dummy;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return dummy.next;
}
