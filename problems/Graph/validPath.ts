// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive).
// The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi]
// denotes a bi-directional edge between vertex ui and vertex vi.
// Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.
// Given edges and the integers n, source, and destination,
// return true if there is a valid path from source to destination, or false otherwise.

// Constraints:

// 1 <= n <= 2 * 105
// 0 <= edges.length <= 2 * 105
// edges[i].length == 2
// 0 <= ui, vi <= n - 1
// ui != vi
// 0 <= source, destination <= n - 1
// There are no duplicate edges.
// There are no self edges.

// Follow up: Could you solve the problem in less than O(n) time complexity?

/**
 * Determines if there is a valid path from source to destination in a bi-directional graph with n vertices.
 * The graph is represented as an edge list, where each edge is a pair of vertices.
 * This function uses a breadth-first search algorithm to traverse the graph and check for a valid path.
 *
 * @param {number} n - The number of vertices in the graph.
 * @param {number[][]} edges - The edges in the graph, where each edge is a pair of vertices.
 * @param {number} source - The starting vertex.
 * @param {number} destination - The destination vertex.
 * @returns {boolean} - True if there is a valid path from source to destination, false otherwise.
 *
 * @example
 * // Example 1:
 * const n = 3;
 * const edges = [[0,1],[1,2],[2,0]];
 * const source = 0;
 * const destination = 2;
 * console.log(validPath(n, edges, source, destination)); // Output: true
 *
 * // Example 2:
 * const n = 6;
 * const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
 * const source = 0;
 * const destination = 5;
 * console.log(validPath(n, edges, source, destination)); // Output: false
 *
 * Time Complexity: O(n + m), where n is the number of vertices and m is the number of edges.
 * Space Complexity: O(n), where n is the number of vertices.
 */
export function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  const visited = new Set();
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const queue = [source];
  visited.add(source);

  while (queue.length) {
    const curr: number = queue.shift() as number;

    if (curr === destination) return true;

    for (const neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;
}
