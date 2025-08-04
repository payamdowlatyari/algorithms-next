// Also known as: Wrapper, Translator

// Intent: Converts the interface of a class into another interface clients expect.
// Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

// Applicability: When you want to use existing code, but its interface isn't compatible with
// the one you need.

// Structure: The Adapter class implements the Target's interface using the Adaptee's interface.
// It delegates the client calls to the Adaptee's methods.

// Real-world example: You want to use an existing class, but its interface is incompatible
// with the one you need. You can create an adapter that translates the interface.

// ### Pros:
// - Single Responsibility Principle. You can separate the interface or data conversion code from the primary business logic of the program.
// - Open/Closed Principle. You can introduce new types of adapters into the program without breaking the existing client code,
// as long as they work with the adapters through the client interface.

// ### Cons:
// - The overall complexity of the code increases because you need to introduce a set of new interfaces and classes.
// Sometimes it’s simpler just to change the service class so that it matches the rest of your code.

/**
 * The Target defines the domain-specific interface used by the client code.
 * It's usually a simple interface with one method.
 *
 * @example
 * const target = new Target();
 * console.log(target.request());
 * // Output: Target: The default target's behavior.
 */
class Target {
  /**
   * The request method that the client code can call on the target object.
   * This method's result is different from the result of the Adaptee's
   * method, but the client code doesn't need to know about such details.
   *
   * @returns A string containing the default target's behavior.
   */
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 *
 * @example
 * const adaptee = new Adaptee();
 * console.log(adaptee.specificRequest());
 * // Output: .eetpadA eht fo roivaheb laicepS
 */
class Adaptee {
  public specificRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 *
 * @example
 * const adaptee = new Adaptee();
 * const adapter = new Adapter(adaptee);
 * console.log(adapter.request());
 * // Output: Adapter: (TRANSLATED) .eetpadA eht fo roivaheb laicepS
 */
class Adapter extends Target {
  private adaptee: Adaptee;

  /**
   * Constructor for Adapter class.
   *
   * @param {Adaptee} adaptee The adaptee object.
   */
  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  /**
   * Calls the Adaptee's specificRequest() method and translates the result into
   * a string that the Target interface can understand.
   *
   * @returns {string} The translated result of the Adaptee's specificRequest() method.
   */
  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

/**
 * The client code supports all classes that follow the Target interface.
 */
function clientCodeForAdapter(target: Target) {
  console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCodeForAdapter(target);

const adaptee = new Adaptee();
console.log(
  "Client: The Adaptee class has a weird interface. See, I don't understand it:",
);
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCodeForAdapter(adapter);
