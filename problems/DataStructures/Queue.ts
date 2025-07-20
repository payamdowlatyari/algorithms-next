/**
 * @class Queue
 * @description A class representing a queue data structure.
 *
 * @example
 * const queue = new Queue();
 * queue.enqueue('Item 1');
 * queue.enqueue('Item 2');
 * console.log(queue.dequeue()); // Output: 'Item 1'
 * console.log(queue.peek()); // Output: 'Item 2'
 */
export class Queue {
  items: any[];
  /**
   * Construct a new Queue.
   *
   * @description Initializes a new, empty queue.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Adds an item to the end of the queue.
   *
   * @param {*} item - The item to be added to the queue.
   */
  enqueue(item: any) {
    this.items.push(item);
  }

  /**
   * Removes and returns the item at the front of the queue.
   *
   * @returns {*} The item at the front of the queue.
   */
  dequeue(): any {
    return this.items.shift();
  }

  /**
   * Determines if the queue is empty.
   *
   * @returns {boolean} true if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it.
   *
   * @returns {*} The item at the front of the queue.
   */
  peek(): any {
    return this.items[0];
  }
}
