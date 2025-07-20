import { ListNode } from '../DataStructures/ListNode';

// Given the head of a linked list, return the list after sorting it in ascending order.

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

/**
 * Sorts a linked list in ascending order.
 *
 * @param {ListNode | null} head
 * @return {ListNode | null}
 *
 * @example
 * const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
 * const result = sortList(head); // Output: [1, 2, 3, 4]
 *
 * const head = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));
 * const result = sortList(head); // Output: [-1, 0, 3, 4, 5]
 *
 * const head = new ListNode();
 * const result = sortList(head); // Output: []
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
export function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  /**
   * Splits a linked list into two halves.
   *
   * The function takes a linked list as an argument and returns the head of the second half of the list.
   * The original list is modified to end at the middle node.
   *
   * @param {ListNode} head
   * @return {ListNode}
   *
   * @example
   * const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
   * const secondHalf = split(head);
   * console.log(head.next); // Output: null
   * console.log(secondHalf.val); // Output: 3
   */
  const split = (head: ListNode): ListNode => {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null = null;
    while (fast && fast.next) {
      prev = slow;
      slow = slow!.next;
      fast = fast.next.next;
    }
    if (prev) prev.next = null;
    return slow!;
  };

  /**
   * Merges two sorted linked lists.
   *
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   *
   * @example
   * const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
   * const l2 = new ListNode(2, new ListNode(4, new ListNode(6)));
   * const merged = merge(l1, l2);
   * console.log(merged); // Output: [1, 2, 3, 4, 5, 6]
   */
  const merge = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    const dummy = new ListNode(0);
    let curr = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
  };

  // Divide the list
  const mid = split(head);

  // Sort each half
  const left = sortList(head);
  const right = sortList(mid);

  // Merge sorted halves
  return merge(left, right);
}
