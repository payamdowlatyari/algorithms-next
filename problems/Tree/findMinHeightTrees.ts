// A tree is an undirected graph in which any two vertices are connected by exactly one path.
// In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi]
// indicates that there is an undirected edge between the two nodes ai and bi in the tree,
// you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h.
// Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Constraints:

// 1 <= n <= 2 * 104
// edges.length == n - 1
// 0 <= ai, bi < n
// ai != bi
// All the pairs (ai, bi) are distinct.
// The given input is guaranteed to be a tree and there will be no repeated edges.

/**
 * Find the minimum height trees in a binary tree
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 *
 * @example
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [3,4]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) return [0];

  const adjList: number[][] = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adjList[a].push(b);
    adjList[b].push(a);
  }

  const leaves: number[] = [];
  for (let i = 0; i < n; i++) {
    if (adjList[i].length === 1) leaves.push(i);
  }

  while (n > 2) {
    n -= leaves.length;
    const newLeaves: number[] = [];
    for (const leaf of leaves) {
      const neighbor = adjList[leaf][0];
      adjList[neighbor].splice(adjList[neighbor].indexOf(leaf), 1);
      if (adjList[neighbor].length === 1) newLeaves.push(neighbor);
    }
    leaves.splice(0, leaves.length, ...newLeaves);
  }

  return leaves;
}
