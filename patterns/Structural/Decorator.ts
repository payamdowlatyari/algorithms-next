/**
 * The base Component interface defines operations that can be altered by
 * decorators.
 */
interface DecoratorComponent {
  operation(): string;
}

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 *
 * @example
 * const component = new ConcreteComponent();
 * console.log(`RESULT: ${component.operation()}`);
 */
class ConcreteComponent implements DecoratorComponent {
  /**
   * @returns {string} The result of the primitive operation.
   */
  public operation(): string {
    return 'ConcreteComponent';
  }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 *
 * @example
 * const component = new ConcreteComponent();
 * const decorator = new ConcreteDecoratorA(component);
 * console.log(`RESULT: ${decorator.operation()}`);
 */
class Decorator implements DecoratorComponent {
  protected component: DecoratorComponent;

  /**
   * @param component The component to be wrapped.
   */
  constructor(component: DecoratorComponent) {
    this.component = component;
  }

  /**
   * The Decorator delegates all work to the wrapped component.
   */
  public operation(): string {
    return this.component.operation();
  }
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 *
 * @example
 * const component = new ConcreteComponent();
 * const decorator = new ConcreteDecoratorA(component);
 * console.log(`RESULT: ${decorator.operation()}`);
 */
class ConcreteDecoratorA extends Decorator {
  /**
   * Decorators may call parent implementation of the operation, instead of
   * calling the wrapped object directly. This approach simplifies extension
   * of decorator classes.
   */
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 *
 * @example
 * const component = new ConcreteComponent();
 * const decorator = new ConcreteDecoratorB(component);
 * console.log(`RESULT: ${decorator.operation()}`);
 */
class ConcreteDecoratorB extends Decorator {
  /**
   * Calls the parent operation and wraps its result with additional behavior
   * specific to ConcreteDecoratorB.
   */
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCodeForDecorator(component: DecoratorComponent) {
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

/**
 * This way the client code can support both simple components...
 */
const simple2 = new ConcreteComponent();
console.log("Client: I've got a simple component:");
clientCodeForDecorator(simple2);

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const decorator1 = new ConcreteDecoratorA(simple2);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("Client: Now I've got a decorated component:");
clientCodeForDecorator(decorator2);
