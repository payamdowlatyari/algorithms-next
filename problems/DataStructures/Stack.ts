// Stack is a class that represents a stack data structure.
// A stack follows the Last In First Out (LIFO) principle.
// Items are added to the top of the stack and removed from the top.

// Stack() creates a new empty stack.
// push(item) adds an item to the top of the stack.
// pop() removes and returns the item at the top of the stack.
// peek() returns the item at the top of the stack without removing it.
// isEmpty() returns true if the stack is empty, false otherwise.
// size() returns the number of items in the stack.

/**
 * A class representing a stack data structure.
 *
 * @class Stack
 * @description A stack follows the Last In First Out (LIFO) principle.
 * Items are added to the top of the stack and removed from the top.
 *
 * @example
 * const stack = new Stack();
 * stack.push(1);
 * stack.push(2);
 * stack.pop(); // returns 2
 * stack.peek(); // returns 1
 * stack.isEmpty(); // returns false
 * stack.size(); // returns 1
 *
 * Time complexity for push, pop, peek: O(1)
 * Space complexity: O(n) where n is the number of items in the stack
 */
export class Stack {
  items: any[];
  /**
   * Constructor for Stack.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Pushes an item onto the stack.
   *
   * @param {*} item - The item to be added to the stack.
   */
  push(item: any) {
    this.items.push(item);
  }

  /**
   * Removes and returns the item at the top of the stack.
   *
   * @returns {*} The item at the top of the stack.
   */
  pop(): any {
    return this.items.pop();
  }

  /**
   * Returns the item at the top of the stack without removing it.
   *
   * @returns {*} The item at the top of the stack.
   */
  peek(): any {
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the stack is empty.
   *
   * @returns {boolean} true if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the number of items in the stack.
   *
   * @returns {number} The number of items in the stack.
   */
  size(): number {
    return this.items.length;
  }
}
