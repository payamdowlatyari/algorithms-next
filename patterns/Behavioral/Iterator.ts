// Intent: Lets you traverse elements of a collection without exposing its
// underlying representation (list, stack, tree, etc.).

// Applicability: When you want to provide a way to access the elements of an
// object without exposing its underlying representation.

// Structure: The Iterator interface specifies the methods that all concrete
// iterators must implement. Concrete iterators provide one or several ways to
// access the elements of the collection.

// Real world example: A web page with a form that captures a user's input. When
// the form is submitted, you want to store the user's input in the database.

// ### Pros:
// - Single Responsibility Principle. You can clean up the client code and the
// collections by extracting bulky traversal algorithms into separate classes.
// - Open/Closed Principle. You can implement new types of collections and iterators
// and pass them to existing code without breaking anything.
// - You can iterate over the same collection in parallel because each iterator
// object contains its own iteration state.
// - For the same reason, you can delay an iteration and continue it when needed.

// ### Cons:
// - Applying the pattern can be an overkill if your app only works with simple collections.
// - Using an iterator may be less efficient than going through elements of
// some specialized collections directly.

/**
 * Iterator Design Pattern
 *
 * Intent: Lets you traverse elements of a collection without exposing its
 * underlying representation (list, stack, tree, etc.).
 */
interface MyIterator<T> {
  /**
   * Return the current element.
   */
  current(): T;

  /**
   * Return the current element and move forward to next element.
   */
  next(): T;

  /**
   * Return the key of the current element.
   */
  key(): number;

  /**
   * Checks if current position is valid.
   */
  valid(): boolean;

  /**
   * Rewind the Iterator to the first element.
   */
  rewind(): void;
}

/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 */
interface Aggregator {
  /**
   * Retrieve an external iterator.
   */
  getIterator(): MyIterator<string>;
}

/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 *
 * @example
 * const iterator = new AlphabeticalOrderIterator(collection);
 * while (iterator.valid()) {
 *     console.log(iterator.current());
 *     iterator.next();
 * }
 */
class AlphabeticalOrderIterator implements MyIterator<string> {
  private collection: WordsCollection;

  /**
   * Stores the current traversal position. An iterator may have a lot of
   * other fields for storing iteration state, especially when it is supposed
   * to work with a particular kind of collection.
   */
  private position: number = 0;

  /**
   * This variable indicates the traversal direction.
   */
  private reverse: boolean = false;

  /**
   * @param {WordsCollection} collection
   * @param {boolean} reverse
   */
  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  /**
   * Rewind the Iterator to the first element.
   */
  public rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  /**
   * Return the current element.
   *
   * @returns {string}
   */
  public current(): string {
    return this.collection.getItems()[this.position];
  }

  /**
   * Return the key of the current element.
   *
   * @returns {number}
   */
  public key(): number {
    return this.position;
  }

  /**
   * Return the current element and move forward to next element.
   *
   * @returns {string}
   */
  public next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  /**
   * Checks if current position is valid.
   */
  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}

/**
 * Concrete Collections provide one or several methods for retrieving fresh
 * iterator instances, compatible with the collection class.
 *
 * @example
 * const iterator = collection.getIterator();
 * while (iterator.valid()) {
 *     console.log(iterator.current());
 *     iterator.next();
 * }
 */
class WordsCollection implements Aggregator {
  private items: string[] = [];

  /**
   * @returns {string[]}
   */
  public getItems(): string[] {
    return this.items;
  }

  /**
   * @returns {number}
   */
  public getCount(): number {
    return this.items.length;
  }

  /**
   * @param {string} item
   */
  public addItem(item: string): void {
    this.items.push(item);
  }

  /**
   * @returns {MyIterator<string>}
   */
  public getIterator(): MyIterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  /**
   * @returns {MyIterator<string>}
   */
  public getReverseIterator(): MyIterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}

/**
 * The client code may or may not know about the Concrete Iterator or Collection
 * classes, depending on the level of indirection you want to keep in your
 * program.
 */
const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
  console.log(iterator.next());
}

console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
  console.log(reverseIterator.next());
}
