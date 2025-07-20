import { TrieNode } from '../DataStructures/TrieNode';

// A trie (pronounced as "try") or prefix tree is a tree data structure used to
// efficiently store and retrieve keys in a dataset of strings.
// There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

// Constraints:

// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 104 calls in total will be made to insert, search, and startsWith.

/**
 * Trie is a prefix tree (trie) data structure that allows for efficient storage and retrieval
 * of strings, supporting operations like insertion, searching for exact words, and checking for prefixes.
 * @class Trie
 * @property {TrieNode} root - The root node of the trie.
 *
 * @example
 * const trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // returns true
 * trie.search("app");     // returns false
 * trie.startsWith("app"); // returns true
 * trie.insert("app");
 * trie.search("app");     // returns true
 */
export class Trie {
  root: TrieNode;
  /**
   * Constructs a new Trie with a root node.
   * The root node is an instance of TrieNode and is initialized with an empty children object
   * and a boolean flag indicating whether the node is the end of a word.
   */
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word - The word to be inserted.
   * @returns {void}
   */
  insert(word: string): void {
    let currentNode: any = this.root;
    for (const char of word) {
      if (
        currentNode.children[char] === undefined ||
        currentNode.children[char] === null
      ) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;
  }

  /**
   * Searches for a word in the trie.
   * @param {string} word - The word to search for.
   * @returns {boolean} - True if the word is found in the trie, false otherwise.
   */
  search(word: string): boolean {
    const node = this._findNode(word);
    return node !== null && node.isEndOfWord;
  }

  /**
   * Checks if a prefix is present in the trie.
   * @param {string} prefix - The prefix to check for.
   * @returns {boolean} - True if the prefix is found in the trie, false otherwise.
   */
  startsWith(prefix: string): boolean {
    return this._findNode(prefix) !== null;
  }

  /**
   * Finds a node in the trie corresponding to a given word.
   * @param {string} word - The word to search for.
   * @returns {TrieNode|null} - The node corresponding to the word, or null if not found.
   */
  _findNode(word: string): TrieNode | null {
    let currentNode: any = this.root;
    for (const char of word) {
      if (!currentNode.children[char]) {
        return null;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode;
  }
}
