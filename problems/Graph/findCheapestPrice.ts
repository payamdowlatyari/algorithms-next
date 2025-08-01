// There are n cities connected by some number of flights.
// You are given an array flights where flights[i] = [fromi, toi, pricei]
// indicates that there is a flight from city fromi to city toi with cost pricei.

// You are also given three integers src, dst, and k,
// return the cheapest price from src to dst with at most k stops.
// If there is no such route, return -1.

// Constraints:

// 1 <= n <= 100
// 0 <= flights.length <= (n * (n - 1) / 2)
// flights[i].length == 3
// 0 <= fromi, toi < n
// fromi != toi
// 1 <= pricei <= 104
// There will not be any multiple flights between two cities.
// 0 <= src, dst, k < n
// src != dst

/**
 * Find the cheapest price from src to dst with at most k stops.
 *
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 *
 * @example
 * Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
 * Output: 700
 * Explanation:
 * The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
 * Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
 *
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
 * Output: 200
 * Explanation:
 * The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.
 *
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
 * Output: 500
 * Explanation:
 * The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.
 *
 * Input: n = 3, flights =[[0,1,2],[1,2,1],[2,0,10]], src = 1, dst = 2, k = 1
 * Output: 1
 * Explanation:
 * The optimal path with at most 1 stop from city 1 to 2 is marked in red and has cost 1.
 *
 * Time complexity: O(n^2 * k)
 * Space complexity: O(n)
 */
export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  const graph: [number, number][][] = Array.from({ length: n }, () => []);
  for (const [from, to, price] of flights) {
    graph[from].push([to, price]);
  }

  const dist = Array(n).fill(Infinity);
  dist[src] = 0;

  for (let stops = 0; stops <= k; stops++) {
    const newDist = [...dist];
    for (let u = 0; u < n; u++) {
      for (const [v, price] of graph[u]) {
        if (dist[u] !== Infinity && newDist[v] > dist[u] + price) {
          newDist[v] = dist[u] + price;
        }
      }
    }
    dist.splice(0, n, ...newDist);
  }

  return dist[dst] === Infinity ? -1 : dist[dst];
}
