import { countMentions } from './countMentions';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]
// Output: [2,2]
// Explanation:
// Initially, all users are online.
// At timestamp 10, id1 and id0 are mentioned. mentions = [1,1]
// At timestamp 11, id0 goes offline.
// At timestamp 71, id0 comes back online and "HERE" is mentioned. mentions = [2,2]

// Example 2:

// Input: numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","12","ALL"]]
// Output: [2,2]
// Explanation:
// Initially, all users are online.
// At timestamp 10, id1 and id0 are mentioned. mentions = [1,1]
// At timestamp 11, id0 goes offline.
// At timestamp 12, "ALL" is mentioned. This includes offline users, so both id0 and id1 are mentioned. mentions = [2,2]

// Example 3:

// Input: numberOfUsers = 2, events = [["OFFLINE","10","0"],["MESSAGE","12","HERE"]]
// Output: [0,1]
// Explanation:
// Initially, all users are online.
// At timestamp 10, id0 goes offline.
// At timestamp 12, "HERE" is mentioned. Because id0 is still offline, they will not be mentioned. mentions = [0,1]

describe('countMentions', () => {
  test('Example 1', () => {
    expect(
      countMentions(2, [
        ['MESSAGE', '10', 'id1 id0'],
        ['OFFLINE', '11', '0'],
        ['MESSAGE', '71', 'HERE'],
      ]),
    ).toEqual([2, 2]);
  });
  test('Example 2', () => {
    expect(
      countMentions(2, [
        ['MESSAGE', '10', 'id1 id0'],
        ['OFFLINE', '11', '0'],
        ['MESSAGE', '12', 'ALL'],
      ]),
    ).toEqual([2, 2]);
  });
  test('Example 3', () => {
    expect(
      countMentions(2, [
        ['OFFLINE', '10', '0'],
        ['MESSAGE', '12', 'HERE'],
      ]),
    ).toEqual([0, 1]);
  });
});
