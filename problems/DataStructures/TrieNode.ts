// TrieNode class

// TrieNode is a class that represents a node in a trie data structure.
// A trie, also known as a prefix tree, is a tree-like data structure that is used to store a dynamic set of strings where the keys are usually strings.
// Each node in the trie represents a single character of a string, and the path from the root to a node represents a prefix of the string.

// TrieNode() creates a new TrieNode object with an empty children object and isEndOfWord set to false.
// The children object is an object where the keys are characters and the values are TrieNode objects representing the child nodes.
// The isEndOfWord property is a boolean that indicates whether the node represents the end of a word in the trie.

/**
 * Trie represents a prefix tree (trie) data structure.
 * It supports insertion, searching for exact words, and checking for prefixes.
 *
 * @class TrieNode
 * @description A TrieNode is a node in a trie data structure.
 * Each node contains a children object that maps characters to TrieNode objects,
 * and a boolean indicating whether the node represents the end of a word.
 *
 * @property {Object} children - An object where keys are characters and values are TrieNode objects.
 * @property {boolean} isEndOfWord - A boolean indicating if the node represents the end of a word.
 *
 * @example
 * const trie = new TrieNode();
 * trie.children['a'] = new TrieNode();
 * trie.children['a'].children['b'] = new TrieNode();
 * trie.children['a'].children['b'].isEndOfWord = true;
 */
export class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord: boolean;
  /**
   * Constructs a new TrieNode.
   * The children object is an empty object which will contain other TrieNode objects,
   * where the key is a lowercase letter and the value is the child node.
   * The isEndOfWord property is a boolean indicating whether the node represents the end of a word.
   */
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
