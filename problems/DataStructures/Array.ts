// Array class

// The Array class provides methods to get and set items, retrieve the length of the array, and convert the array to a string.
// It is designed to mimic some basic functionalities of JavaScript's built-in Array.

// Constraints:

// The size of the array should be a non-negative integer.
// The getItem and setItem methods should handle out-of-bounds indices gracefully, returning undefined for getItem and ignoring setItem calls.

// Example usage:

// const arr = new Array(5);
// arr.setItem(0, 10);
// arr.setItem(1, 20);
// console.log(arr.getItem(0)); // 10
// console.log(arr.length); // 5
// console.log(arr.toString()); // "10,20,,,,""

/**
 * Custom Array class to demonstrate basic array operations.
 * This class provides methods to get and set items, retrieve the length of the array, and convert the array to a string.
 * It is designed to mimic some basic functionalities of JavaScript's built-in Array.
 *
 * @property {number} size - The size of the array.
 * @property {Array} data - The internal array to hold the elements.
 *
 * @method getItem(index) - Returns the item at the specified index.
 * @method setItem(index, value) - Sets the item at the specified index to the given value.
 * @method length - Returns the length of the array.
 * @method toString() - Returns a string representation of the array.
 *
 * @example
 * const arr = new Array(5);
 * arr.setItem(0, 10);
 * arr.setItem(1, 20);
 * console.log(arr.getItem(0)); // 10
 * console.log(arr.length); // 5
 * console.log(arr.toString()); // "10,20,,,,""
 */
export class CustomArray {
  size: number;
  data: any[];

  /**
   * Initializes a new instance of the Array class with the specified size.
   *
   * @param {number} size - The size of the array.
   * @property {Array} data - An internal array initialized with null values.
   */
  constructor(size: number) {
    this.size = size;
    this.data = new Array<any>(size).fill(null);
  }

  /**
   * Retrieves the item at the specified index from the array.
   *
   * @param {number} index - The index of the item to retrieve.
   * @returns {*} The item at the specified index, or undefined if the index is out of bounds.
   */
  getItem(index: string | number): any {
    return this.data[Number(index)];
  }

  /**
   * Sets the item at the specified index to the given value.
   *
   * @param {number} index - The index of the item to set.
   * @param {*} value - The value to set the item to.
   */
  setItem(index: number, value: any) {
    this.data[index] = value;
  }

  /**
   * Retrieves the number of items in the array.
   *
   * @returns {number} The number of items in the array.
   */
  get length(): number {
    return this.data.length;
  }

  /**
   * Returns a string representation of the array.
   *
   * @returns {string} A string representation of the array.
   */
  toString(): string {
    return this.data.toString();
  }
}
