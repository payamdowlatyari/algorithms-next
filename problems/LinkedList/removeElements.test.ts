import { removeElements } from './removeElements';
import { ListNode } from '../DataStructures/ListNode';
import { linkedListToArray } from './helpers/linkedListToArray';
import { describe, expect, test } from '@jest/globals';

// Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:

// Input: head = [], val = 1
// Output: []

// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []

describe('Remove Elements Tests', () => {
  test('Test 1', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(6);
    head.next.next.next = new ListNode(3);
    head.next.next.next.next = new ListNode(4);
    head.next.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next.next = new ListNode(6);

    const result = removeElements(head, 6);
    expect(linkedListToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  test('Test 2', () => {
    const result = removeElements(null, 1);
    expect(linkedListToArray(result)).toEqual([]);
  });

  test('Test 3', () => {
    const head = new ListNode(7);
    head.next = new ListNode(7);
    head.next.next = new ListNode(7);
    head.next.next.next = new ListNode(7);

    const result = removeElements(head, 7);
    expect(linkedListToArray(result)).toEqual([]);
  });
});
