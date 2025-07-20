import { sortList } from './sortList';
import { ListNode } from '../DataStructures/ListNode';
import { linkedListToArray } from './helpers/linkedListToArray';
import { describe, expect, test } from '@jest/globals';

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []

describe('Sort Linked List Tests', () => {
  test('Test 1', () => {
    const head = new ListNode(4);
    head.next = new ListNode(2);
    head.next.next = new ListNode(1);
    head.next.next.next = new ListNode(3);

    const result = sortList(head);
    expect(linkedListToArray(result)).toEqual([1, 2, 3, 4]);
  });
  test('Test 2', () => {
    const head = new ListNode(-1);
    head.next = new ListNode(5);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(0);

    const result = sortList(head);
    expect(linkedListToArray(result)).toEqual([-1, 0, 3, 4, 5]);
  });
  test('Test 3', () => {
    const head = null;

    const result = sortList(head);
    expect(linkedListToArray(result)).toEqual([]);
  });
});
