// There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming
// a network where connections[i] = [ai, bi] represents a connection between computers ai and bi.
// Any computer can reach any other computer directly or indirectly through the network.

// You are given an initial computer network connections.
// You can extract certain cables between two directly connected computers,
// and place them between any pair of disconnected computers to make them directly connected.

// Return the minimum number of times you need to do this in order to make all the computers connected.
// If it is not possible, return -1.

// Constraints:

// 1 <= n <= 105
// 1 <= connections.length <= min(n * (n - 1) / 2, 105)
// connections[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// There are no repeated connections.
// No two computers are connected by more than one cable.

/**
 * Determines the minimum number of cable moves required to connect all computers in a network.
 * If it's not possible to connect all computers, the function returns -1.
 * Utilizes a union-find (disjoint set) data structure to efficiently manage connected components.
 *
 * @param {number} n - The total number of computers.
 * @param {number[][]} connections - An array of connections where each connection is represented as [ai, bi]
 *                                   indicating a direct connection between computer ai and computer bi.
 * @returns {number} The minimum number of moves required to connect all computers, or -1 if not possible.
 *
 * @example
 * // Example 1:
 * const n = 4;
 * const connections = [[0,1],[0,2],[1,2]];
 * console.log(makeConnected(n, connections)); // Output: 1
 *
 * // Example 2:
 * const n = 6;
 * const connections = [[0,1],[0,2],[0,3],[1,2],[1,3]];
 * console.log(makeConnected(n, connections)); // Output: 2
 *
 * Time Complexity: O(n + m), where n is the number of computers and m is the number of connections.
 * Space Complexity: O(n)
 */
export function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) return -1;

  const parent = Array.from({ length: n }, (_, i) => i);
  let components = n;

  /**
   * Recursively finds the root of a set containing x.
   * This function also performs path compression to optimize subsequent calls.
   *
   * @param {number} x - The element for which to find the root.
   * @returns {number} The root of the set containing x.
   */
  const find = (x: number): number => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  for (const [a, b] of connections) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) {
      parent[rootB] = rootA;
      components--;
    }
  }

  return components - 1;
}
