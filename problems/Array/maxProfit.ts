// You are given an array prices where prices[i] is the price
// of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one
// stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * Calculates the maximum profit from stock prices.
 *
 * @param {number[]} prices
 * @return {number}
 *
 * @example
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * Time complexity: O(n^2) due to nested loops
 * Space complexity: O(1)
 */
export function maxProfit(prices: number[]): number {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      max = Math.max(max, profit);
    }
  }
  return max;
}
