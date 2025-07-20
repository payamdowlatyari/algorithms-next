// You are given an integer numberOfUsers representing the total number of users and an array events of size n x 3.

// Each events[i] can be either of the following two types:

// 1. Message Event: ["MESSAGE", "timestampi", "mentions_stringi"]
// This event indicates that a set of users was mentioned in a message at timestampi.
// The mentions_stringi string can contain one of the following tokens:
// id<number>: where <number> is an integer in range [0,numberOfUsers - 1].
// There can be multiple ids separated by a single whitespace and may contain duplicates.
// This can mention even the offline users.
// ALL: mentions all users.
// HERE: mentions all online users.

// 2. Offline Event: ["OFFLINE", "timestampi", "idi"]
// This event indicates that the user idi had become offline at timestampi for 60 time units.
// The user will automatically be online again at time timestampi + 60.
// Return an array mentions where mentions[i] represents the number of mentions the user with id i has across all MESSAGE events.

// All users are initially online, and if a user goes offline or comes back online,
// their status change is processed before handling any message event that occurs at the same timestamp.

// Note that a user can be mentioned multiple times in a single message event, and each mention should be counted separately.

// Constraints:

// 1 <= numberOfUsers <= 100
// 1 <= events.length <= 100
// events[i].length == 3
// events[i][0] will be one of MESSAGE or OFFLINE.
// 1 <= int(events[i][1]) <= 105
// The number of id<number> mentions in any "MESSAGE" event is between 1 and 100.
// 0 <= <number> <= numberOfUsers - 1
// It is guaranteed that the user id referenced in the OFFLINE event is online at the time the event occurs.

/**
 * Counts the number of mentions for each user based on a sequence of events.
 *
 * @param {number} numberOfUsers - The total number of users.
 * @param {Array} events - An array of events where each event is an array containing the event type,
 *                         timestamp, and data. Events can be of type "MESSAGE" or "OFFLINE".
 *
 * - "MESSAGE" events contain a space-separated string of mentions, which could be specific user ids ("id<number>"),
 *   "ALL" to mention all users, or "HERE" to mention all currently online users.
 * - "OFFLINE" events specify a user id who goes offline for 60 time units.
 *
 * @returns {Array} - An array where each index corresponds to a user id and holds the count of mentions
 *                    for that user across all events.
 *
 * Note: All users start online, and offline status is processed before message events at the same timestamp.
 * A user offline due to an "OFFLINE" event will come back online automatically after 60 time units.
 *
 * @example
 * Input: numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]
 * Output: [2,2]
 * Explanation:
 * Initially, all users are online.
 * At timestamp 10, id1 and id0 are mentioned. mentions = [1,1]
 * At timestamp 11, id0 goes offline.
 * At timestamp 71, id0 comes back online and "HERE" is mentioned. mentions = [2,2]
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function countMentions(
  numberOfUsers: number,
  events: Array<any>,
): Array<any> {
  const mentions = new Array(numberOfUsers).fill(0);
  const offlineEndTimes = new Array(numberOfUsers).fill(0);

  for (const event of events) {
    const [type, timestampStr, data] = event;
    const timestamp = parseInt(timestampStr, 10);

    if (type === 'OFFLINE') {
      const userId = parseInt(data.replace('id', ''), 10);
      offlineEndTimes[userId] = timestamp + 60;
    } else if (type === 'MESSAGE') {
      const mentionedUsers = data.split(' ');
      for (const mentionedUser of mentionedUsers) {
        if (mentionedUser === 'ALL') {
          for (let i = 0; i < numberOfUsers; i++) {
            mentions[i]++;
          }
        } else if (mentionedUser === 'HERE') {
          for (let i = 0; i < numberOfUsers; i++) {
            if (offlineEndTimes[i] <= timestamp) {
              mentions[i]++;
            }
          }
        } else {
          const userId = parseInt(mentionedUser.replace('id', ''), 10);
          if (offlineEndTimes[userId] <= timestamp) {
            mentions[userId]++;
          }
        }
      }
    }
  }

  return mentions;
}
