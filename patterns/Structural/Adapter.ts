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
