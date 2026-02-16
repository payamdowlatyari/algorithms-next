// Graph data structure implementation

// This implementation uses an adjacency list to store the graph's vertices and edges.
// Each vertex is represented as a key in the adjacency map, and its value is an array of neighboring vertices.

// The Graph class provides methods to add vertices, edges, and perform depth-first search (DFS) and breadth-first search (BFS) traversals on the graph.

// The addVertex method adds a new vertex to the graph.
// The addEdge method adds an undirected edge between two vertices.
// The dfs method performs a depth-first search traversal on the graph, starting from a given vertex.
// The bfs method performs a breadth-first search traversal on the graph, starting from a given vertex.
// The printGraph method prints the graph's adjacency list.

// Example usage:
// const graph = new Graph();
// graph.addVertex(1);
// graph.addVertex(2);
// graph.addEdge(1, 2);
// graph.dfs(1);
// graph.bfs(1);
// graph.printGraph();

/**
 * @class Graph
 * @description Represents a graph using an adjacency list.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 * The graph supports adding vertices and edges, as well as performing DFS and BFS traversals.
 *
 * @example
 * const graph = new Graph();
 * graph.addVertex(1);
 * graph.addVertex(2);
 * graph.addEdge(1, 2);
 * graph.dfs(1);
 * graph.bfs(1);
 * graph.printGraph();
 */
export class Graph {
  adjacencyMap: { [key: string]: string[] } = {};
  /**
   * Initializes a new instance of the Graph class.
   * Sets up an empty adjacency map to hold the graph's vertices and edges.
   */
  constructor() {
    this.adjacencyMap = {};
  }

  /**
   * Adds a new vertex to the graph.
   *
   * @param {*} vertex - The value of the new vertex.
   * @returns {void}
   */
  addVertex(vertex: string | number): void {
    this.adjacencyMap[vertex] = [];
  }

  /**
   * Adds an undirected edge between two vertices in the graph.
   *
   * @param {*} vertex1 - The first vertex to connect.
   * @param {*} vertex2 - The second vertex to connect.
   * @throws {Error} If either vertex does not exist in the graph.
   * @returns {void}
   */
  addEdge(vertex1: string, vertex2: string): void {
    if (!this.adjacencyMap[vertex1] || !this.adjacencyMap[vertex2]) {
      throw new Error('Both vertices must exist in the graph');
    }
    this.adjacencyMap[vertex1].push(vertex2);
    this.adjacencyMap[vertex2].push(vertex1);
  }

  /**
   * Prints the adjacency list of the graph.
   *
   * @param {Function} [output] - A function that takes a string and prints it.
   * By default, uses console.log.
   * @returns {void}
   */
  printGraph(output: Function = (value: any) => console.log(value)): void {
    const keys = Object.keys(this.adjacencyMap);
    for (const i of keys) {
      const values = this.adjacencyMap[i];
      let vertex = '';
      for (const j of values) {
        vertex += j + ' ';
      }
      output(i + ' -> ' + vertex);
    }
  }

  /**
   * Performs a depth-first traversal of the graph starting from the source vertex.
   *
   * @param {string | number} source - The source vertex to start the DFS.
   * @param {Set} [visited=new Set()] - A set to keep track of visited vertices.
   * @param {Function} [output=value => console.log(value)] - A function to output the visited nodes. Defaults to console.log.
   * @returns {void}
   */
  dfs(
    source: string | number,
    visited: Set<string | number> = new Set(),
    output: Function = (value: any) => console.log(value),
  ): void {
    if (visited.has(source)) {
      return;
    }
    output(`Visited node ${source}`);
    visited.add(source);
    for (const neighbour of this.adjacencyMap[source]) {
      this.dfs(neighbour, visited, output);
    }
  }

  /**
   * Performs a breadth-first traversal of the graph starting from the source vertex.
   *
   * @param {number} source - The source vertex to start the BFS.
   * @param {Function} [output=value => console.log(value)] - A function to output the visited nodes. Defaults to console.log.
   * @returns {void}
   */
  bfs(
    source: string | number,
    output: Function = (value: any) => console.log(value),
  ): void {
    const queue = [source];
    const visited = new Set();
    while (queue.length) {
      const node = queue.shift();
      if (visited.has(node)) {
        continue;
      }
      visited.add(node);
      output(`Visited node ${node}`);
      if (node !== undefined && this.adjacencyMap[node]) {
        for (const neighbour of this.adjacencyMap[node]) {
          queue.push(neighbour);
        }
      }
    }
  }
}
