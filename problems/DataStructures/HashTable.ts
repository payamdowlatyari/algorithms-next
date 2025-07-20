/**
 * A class representing a hash table.
 *
 * @class HashTable
 * @extends Array
 *
 * @example
 * const hashTable = new HashTable();
 * hashTable.add('key', 'value');
 * const value = hashTable.get('key');
 * console.log(value); // 'value'
 */
export class HashTable {
  buckets: any[];
  collisions: number;
  /**
   * Constructs a new HashTable.
   *
   * @param {number} [size=2] The size of the underlying array.
   */
  constructor(size: number = 2) {
    this.buckets = new Array(size);
    this.collisions = 0;
  }

  /**
   * A djb2 hash function implementation. This function is used to map keys to
   * array indices in the hash table.
   *
   * @param {string} key The key to hash.
   * @returns {number} A number representing the hashed key.
   */
  hash(key: string): number {
    let hashVal = 0;
    const stringTypeKey = `${key}${typeof key}`;

    for (let i = 0; i < stringTypeKey.length; i++) {
      const charCode = stringTypeKey.charCodeAt(i);
      hashVal += charCode << (i * 8);
    }
    return hashVal;
  }

  /**
   * Maps a key to an index in the underlying array.
   *
   * @param {string} key The key to map to an index.
   * @returns {number} A number representing the index.
   */
  getIndex(key: string): number {
    return this.hash(key) % this.buckets.length;
  }

  /**
   * Adds a key-value pair to the hash table.
   *
   * @param {string} key The key to add to the hash table.
   * @param {*} value The value associated with the key.
   * @returns {HashTable} The hash table instance.
   */
  set(key: string, value: any): HashTable {
    const index = this.getIndex(key);

    if (this.buckets[index]) {
      this.buckets[index].push({ key, value });

      if (this.buckets[index].length > 1) {
        this.collisions++;
      }
    } else this.buckets[index] = [{ key, value }];
    return this;
  }

  /**
   * Retrieves the value associated with the given key from the hash table.
   *
   * @param {string} key The key whose associated value is to be returned.
   * @returns {*} The value associated with the specified key, or undefined if the key is not found.
   */
  get(key: string): any {
    const index = this.getIndex(key);

    for (let i = 0; i < this.buckets[index].length; i++) {
      const input = this.buckets[index][i];

      if (input.key === key) return input.value;
    }
  }
}
