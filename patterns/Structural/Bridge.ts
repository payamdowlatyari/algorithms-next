// Intent: Decouple an abstraction from its implementation so that the two can
// vary independently.

// Applicability: When you have two independent hierarchies of classes, and you
// want to decouple the corresponding interfaces.

// Structure: The Abstraction defines the interface for the "control" part of the
// two class hierarchies. It maintains a reference to an object of the
// Implementation hierarchy and delegates all of the real work to this object.
// The Abstraction doesn't have to know anything about the concrete classes of
// the Implementation hierarchy.

// Real-world example: A web page with a form that captures a user's input. When
// the form is submitted, you want to store the user's input in the database.

// ### Pros:
// - You can create platform-independent classes and apps.
// - The client code works with high-level abstractions. It isn’t exposed to the platform details.
// - Open/Closed Principle. You can introduce new abstractions and implementations independently from each other.
// - Single Responsibility Principle. You can focus on high-level logic in the abstraction and on platform details in the implementation.

// ### Cons:
// - You might make the code more complicated by applying the pattern to a highly cohesive class.

/**
 * The Abstraction defines the interface for the "control" part of the two class
 * hierarchies. It maintains a reference to an object of the Implementation
 * hierarchy and delegates all of the real work to this object.
 *
 * @example
 * const abstraction = new Abstraction(new ConcreteImplementationA());
 * console.log(abstraction.operation());
 * // Output:
 * // Abstraction: Base operation with:
 * // ConcreteImplementationA: Here's the result on the platform A.
 *
 * const extendedAbstraction = new ExtendedAbstraction(new ConcreteImplementationB());
 * console.log(extendedAbstraction.operation());
 * // Output:
 * // ExtendedAbstraction: Extended operation with:
 * // ConcreteImplementationB: Here's the result on the platform B.
 */
class Abstraction {
  protected implementation: Implementation;

  /**
   * @param implementation The implementation object to be used by the Abstraction.
   */
  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  /**
   * Executes the operation defined by the Abstraction, delegating the core
   * functionality to the associated Implementation object. This method
   * constructs a formatted string that includes the result of calling the
   * implementation's operationImplementation method.
   *
   * @returns A string that describes the operation performed by the
   * Abstraction, including the result from the Implementation.
   */
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

/**
 * You can extend the Abstraction without changing the Implementation classes.
 */
class ExtendedAbstraction extends Abstraction {
  /**
   * Executes the operation defined by the ExtendedAbstraction, delegating the
   * core functionality to the associated Implementation object. This method
   * constructs a formatted string that includes the result of calling the
   * implementation's operationImplementation method.
   *
   * @returns A string that describes the operation performed by the
   * ExtendedAbstraction, including the result from the Implementation.
   */
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

/**
 * The Implementation defines the interface for all implementation classes. It
 * doesn't have to match the Abstraction's interface. In fact, the two
 * interfaces can be entirely different. Typically the Implementation interface
 * provides only primitive operations, while the Abstraction defines higher-
 * level operations based on those primitives.
 */
interface Implementation {
  /**
   * This method must be implemented in subclasses to perform the actual
   * platform-specific operation.
   *
   * @returns A string that describes the operation performed by the
   * implementation, which will be included in the formatted string returned
   * by the Abstraction.
   */
  operationImplementation(): string;
}

/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 *
 * @example
 * const concreteImplementationA = new ConcreteImplementationA();
 * console.log(concreteImplementationA.operationImplementation());
 * // Output: ConcreteImplementationA: Here's the result on the platform A.
 */
class ConcreteImplementationA implements Implementation {
  /**
   * This method must be implemented in subclasses to perform the actual
   * platform-specific operation.
   *
   * @returns A string that describes the operation performed by the
   * implementation, which will be included in the formatted string returned
   * by the Abstraction.
   */
  public operationImplementation(): string {
    return "ConcreteImplementationA: Here's the result on the platform A.";
  }
}

/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 *
 * @example
 * const concreteImplementationB = new ConcreteImplementationB();
 * console.log(concreteImplementationB.operationImplementation());
 * // Output: ConcreteImplementationB: Here's the result on the platform B.
 */
class ConcreteImplementationB implements Implementation {
  /**
   * This method performs the specific operation for ConcreteImplementationB.
   *
   * @returns A string that describes the operation performed by this implementation,
   * indicating the result on platform B.
   */
  public operationImplementation(): string {
    return "ConcreteImplementationB: Here's the result on the platform B.";
  }
}

/**
 * Except for the initialization phase, where an Abstraction object gets linked
 * with a specific Implementation object, the client code should only depend on
 * the Abstraction class. This way the client code can support any abstraction-
 * implementation combination.
 */
function clientCodeForBridge(abstraction: Abstraction) {
  // ..

  console.log(abstraction.operation());

  // ..
}

/**
 * The client code should be able to work with any pre-configured abstraction-
 * implementation combination.
 */
let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCodeForBridge(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCodeForBridge(abstraction);
