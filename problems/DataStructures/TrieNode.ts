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
