// Node class

// Node is a class that represents a node in a graph.
// It has a value and a list of its neighbors.

// Node(val) creates a new Node object with the given value and an empty neighbors list.
// Node(val, neighbors) creates a new Node object with the given value and the specified neighbors list.

/**
 * Definition for a Node.
 * This class represents a node in a graph.
 *
 * @param {number} val
 * @param {Node[]} neighbors
 *
 * @example
 * const node = new Node(1, []);
 * node.val; // 1
 * node.neighbors; // []
 */
export class Node {
  val: number;
  neighbors: Node[];
  /**
   * Constructs a new Node.
   * @param {number} val - The value of the node.
   * @param {Node[]} neighbors - The neighbors of the node.
   */
  constructor(val: number | undefined, neighbors: Node[] | undefined = []) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}
