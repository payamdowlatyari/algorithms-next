// Also known as: Cache

// Intent: The Flyweight Pattern is a structural design pattern that lets you
// fit more objects into the available amount of memory by sharing common parts
// of state between multiple objects instead of keeping all of the state in
// individual objects.

// Applicability: Use the Flyweight Pattern when you have a large number of
// objects with similar or identical state.

// Structure: The Flyweight interface declares an operation that is supposed to
// be implemented by all concrete flyweight objects. The Flyweight class also
// maintains a reference to the shared state.

// Real world example: A web page with a form that captures a user's input. When
// the form is submitted, you want to store the user's input in the database.

// ### Pros:
// - You can save lots of RAM, assuming your program has tons of similar objects.

// ### Cons:
// - You might be trading RAM over CPU cycles when some of the context data needs
// to be recalculated each time somebody calls a flyweight method.
// - The code becomes much more complicated. New team members will always be wondering
// why the state of an entity was separated in such a way.

/**
 * The Flyweight stores a common portion of the state (also called intrinsic
 * state) that belongs to multiple real business entities. The Flyweight accepts
 * the rest of the state (extrinsic state, unique for each entity) via its
 * method parameters.
 *  
 * @example
 * const factory = new FlyweightFactory([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
 ])
    const flyweight = factory.getFlyweight([1, 2, 3]);
    flyweight.operation(['a', 'b', 'c']);
    // Output: Flyweight: Displaying shared ({"0":1,"1":2,"2":3}) and unique (["a","b","c"]) state.
 * 
 * const flyweight2 = factory.getFlyweight([4, 5, 6]);
    flyweight2.operation(['d', 'e', 'f']);
    // Output: Flyweight: Displaying shared ({"0":4,"1":5,"2":6}) and unique (["d","e","f"]) state.
 */
class Flyweight {
  private sharedState: any;

  /**
   * The Flyweight's state is initialized inside of a factory method, which is
   * called by the client code.
   */
  constructor(sharedState: any) {
    this.sharedState = sharedState;
  }

  /**
   * The Flyweight's operations must be able to accept extrinsic state, which
   * is unique for each object. The Flyweight's methods will use this state,
   * but they won't store it anywhere. Instead, they'll receive it each time
   * they're called.
   *
   * @param {string[]} uniqueState - The extrinsic state passed in by the client code.
   *
   */
  public operation(uniqueState: string[]): void {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(uniqueState);
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
  }
}

/**
 * The Flyweight Factory creates and manages the Flyweight objects. It ensures
 * that flyweights are shared correctly. When the client requests a flyweight,
 * the factory either returns an existing instance or creates a new one, if it
 * doesn't exist yet.
 *
 * @example
 * const factory = new FlyweightFactory([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
 ])
    const flyweight = factory.getFlyweight([1, 2, 3]);
    flyweight.operation(['a', 'b', 'c']);
    // Output: Flyweight: Displaying shared ({"0":1,"1":2,"2":3}) and unique (["a","b","c"]) state.
 * 
 * const flyweight2 = factory.getFlyweight([4, 5, 6]);
    flyweight2.operation(['d', 'e', 'f']);
    // Output: Flyweight: Displaying shared ({"0":4,"1":5,"2":6}) and unique (["d","e","f"]) state.
 */
class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = <any>{};

  /**
   * Constructor.
   *
   * @param {string[][]} initialFlyweights - The initial flyweights to create.
   */
  constructor(initialFlyweights: string[][]) {
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  /**
   * Returns a Flyweight's string hash for a given state.
   */
  private getKey(state: string[]): string {
    return state.join('_');
  }

  /**
   * Returns an existing Flyweight with a given state or creates a new one.
   */
  public getFlyweight(sharedState: string[]): Flyweight {
    const key = this.getKey(sharedState);

    if (!(key in this.flyweights)) {
      console.log(
        "FlyweightFactory: Can't find a flyweight, creating new one.",
      );
      this.flyweights[key] = new Flyweight(sharedState);
    } else {
      console.log('FlyweightFactory: Reusing existing flyweight.');
    }

    return this.flyweights[key];
  }

  /**
   * Returns the number of unique flyweights in the factory.
   */
  public listFlyweights(): void {
    const count = Object.keys(this.flyweights).length;
    console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
    for (const key in this.flyweights) {
      console.log(key);
    }
  }
}

/**
 * The client code usually creates a bunch of pre-populated flyweights in the
 * initialization stage of the application.
 */
const factory = new FlyweightFactory([
  ['Chevrolet', 'Camaro2018', 'pink'],
  ['Mercedes Benz', 'C300', 'black'],
  ['Mercedes Benz', 'C500', 'red'],
  ['BMW', 'M5', 'red'],
  ['BMW', 'X6', 'white'],
  // ...
]);
factory.listFlyweights();

// ...

/**
 * Adds a car to the police database.
 *
 * @param {FlyweightFactory} ff - The flyweight factory to use.
 * @param {string} plates - The license plates of the car.
 * @param {string} owner - The owner of the car.
 * @param {string} brand - The brand of the car.
 * @param {string} model - The model of the car.
 * @param {string} color - The color of the car.
 */
function addCarToPoliceDatabase(
  ff: FlyweightFactory,
  plates: string,
  owner: string,
  brand: string,
  model: string,
  color: string,
) {
  console.log('\nClient: Adding a car to database.');
  const flyweight = ff.getFlyweight([brand, model, color]);

  // The client code either stores or calculates extrinsic state and passes it
  // to the flyweight's methods.
  flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

factory.listFlyweights();
