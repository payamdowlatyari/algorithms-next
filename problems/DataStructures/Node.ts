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
   */
  constructor(val: number | undefined, neighbors: Node[] | undefined = []) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}
