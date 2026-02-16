// linked list implementation in typescript

// This implementation defines a LinkedList class with methods to add, remove, and check for values in the list.
// It also includes a LinkedListNode class to represent each node in the list, and a DoubleLinkedList class
// that extends LinkedList to create a doubly linked list with additional functionality.

// The LinkedList class provides methods to add a new value to the end of the list, remove a specific value from the list,
// check if a value exists in the list, and print all values in the list.
// The DoubleLinkedList class adds functionality to remove a node at a specific position and remove the last node from the list.

// Example usage:
// const linkedList = new LinkedList();
// linkedList.add(1);
// linkedList.add(2);
// linkedList.add(3);
// console.log(linkedList); // LinkedList { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }
// linkedList.remove(2);
// console.log(linkedList); // LinkedList { head: { value: 1, next: { value: 3, next: null } } }
// linkedList.add(4);
// console.log(linkedList); // LinkedList { head: { value: 1, next: { value: 3, next: { value: 4, next: null } } } }

/**
 * A class representing a node in a linked list.
 *
 * @class LinkedListNode
 * @param {*} value - The value to be stored in the node.
 * @param {LinkedListNode} [next=null] - The next node in the linked list.
 *
 * @example
 * const node = new LinkedListNode(1);
 * console.log(node.value); // 1
 * console.log(node.next); // null
 *
 * const node2 = new LinkedListNode(2, node);
 * console.log(node2.value); // 2
 * console.log(node2.next); // LinkedListNode { value: 1, next: null }
 */
export class LinkedListNode {
  value: any;
  next: LinkedListNode | null;
  prev: LinkedListNode | null | undefined;
  /**
   * Creates a new LinkedListNode.
   * @param {*} value - The value to be stored in the node.
   * @param {LinkedListNode} [next=null] - The next node in the linked list.
   */
  constructor(value: any, next: LinkedListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * A class representing a linked list data structure.
 *
 * @class LinkedList
 *
 * @example
 * const linkedList = new LinkedList();
 * linkedList.add(1);
 * linkedList.add(2);
 * linkedList.add(3);
 * console.log(linkedList); // LinkedList { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }
 * linkedList.remove(2);
 * console.log(linkedList); // LinkedList { head: { value: 1, next: { value: 3, next: null } } }
 * linkedList.add(4);
 * console.log(linkedList); // LinkedList { head: { value: 1, next: { value: 3, next: { value: 4, next: null } } } }
 */
export class LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  length: number;

  /**
   * Initializes a new instance of the LinkedList class.
   * Sets the head, tail, and length of the list to null, null, and 0, respectively.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new node with the given value to the end of the linked list.
   *
   * @param {*} value - The value to be added to the list.
   */
  add(value: any) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.length++;
  }

  /**
   * Removes the first occurrence of the given value from the list.
   *
   * @param {*} value - The value to be removed from the list.
   * @returns {void}
   */
  remove(value: any): void {
    if (!this.head) return;

    // If the head is the node to remove
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.length--;
        if (!current.next) this.tail = current;
        return;
      }
      current = current.next;
    }
  }

  /**
   * Determines if the given value is present in the list.
   *
   * @param {*} value - The value to be searched for in the list.
   * @returns {boolean} Whether the value was found in the list.
   */
  contains(value: any): boolean {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  /**
   * Prints the values of the nodes in the list.
   *
   * @returns {void}
   */
  printList(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

/**
 * A class representing a doubly linked list data structure.
 *
 * @class DoubleLinkedList
 * @extends LinkedList
 *
 * @example
 * const doubleLinkedList = new DoubleLinkedList();
 * doubleLinkedList.add(1);
 * doubleLinkedList.add(2);
 * doubleLinkedList.add(3);
 * console.log(doubleLinkedList); // DoubleLinkedList { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }
 * doubleLinkedList.removeAt(1);
 * console.log(doubleLinkedList); // DoubleLinkedList { head: { value: 1, next: { value: 3, next: null } } }
 * doubleLinkedList.add(4);
 * console.log(doubleLinkedList); // DoubleLinkedList { head: { value: 1, next: { value: 3, next: { value: 4, next: null } } } }
 */
export class DoubleLinkedList extends LinkedList {
  /**
   * Initializes a new instance of the DoubleLinkedList class.
   * Sets the head, tail, and length of the list to null, null, and 0, respectively.
   */
  constructor() {
    super();
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new node with the given value to the end of the linked list.
   *
   * @param {*} value - The value to be added to the list.
   */
  add(value: any) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
    this.length++;
  }

  /**
   * Removes the node at the specified position from the list.
   *
   * @param {number} position - The position of the node to be removed.
   * @returns {*} The value of the removed node, or null if the position is invalid.
   */
  removeAt(position: number): any {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;

    if (position === 0) {
      if (this.head) {
        current = this.head;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        else this.tail = null;
      }
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail = this.tail?.prev || null;
      if (this.tail) this.tail.next = null;
    } else {
      for (let i = 0; i < position; i++) {
        if (current && current.next) {
          current = current.next;
        } else {
          return null;
        }
      }
      if (current && current.prev && current.next) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    this.length--;

    return current ? current.value : null;
  }

  /**
   * Removes the last node from the list.
   *
   * @returns {void}
   */
  removeLast(): void {
    if (!this.tail) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev ?? null;
      if (this.tail) {
        this.tail.next = null;
      }
    }
    this.length--;
  }
}
