/**
 * The Abstract Class defines a template method that contains a skeleton of some
 * algorithm, composed of calls to (usually) abstract primitive operations.
 *
 * Concrete subclasses should implement these operations, but leave the template
 * method itself intact.
 *
 * @example
 * const concreteClass1 = new ConcreteClass1();
 * concreteClass1.templateMethod();
 * // Output:
 * // AbstractClass says: I am doing the bulk of the work
 * // ConcreteClass1 says: Implemented Operation1
 * // AbstractClass says: But I let subclasses override some operations
 * // ConcreteClass1 says: Implemented Operation2
 * // AbstractClass says: But I am doing the bulk of the work anyway
 */
abstract class AbstractClass {
  /**
   * The template method defines the skeleton of an algorithm.
   * It calls (usually) abstract primitive operations that subclasses
   * should implement to carry out the algorithm.
   */
  public templateMethod(): void {
    this.baseOperation1();
    this.requiredOperations1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperations2();
    this.baseOperation3();
    this.hook2();
  }

  /**
   * These operations already have implementations.
   * They can be reused by subclasses without overriding.
   */
  protected baseOperation1(): void {
    console.log('AbstractClass says: I am doing the bulk of the work');
  }

  /**
   * These operations already have implementations.
   * They can be reused by subclasses without overriding.
   */
  protected baseOperation2(): void {
    console.log(
      'AbstractClass says: But I let subclasses override some operations',
    );
  }

  /**
   * These operations already have implementations.
   * They can be reused by subclasses without overriding.
   */
  protected baseOperation3(): void {
    console.log(
      'AbstractClass says: But I am doing the bulk of the work anyway',
    );
  }

  /**
   * These operations have to be implemented in subclasses.
   * Subclasses can also override some operations with a default
   * implementation.
   */
  protected abstract requiredOperations1(): void;

  protected abstract requiredOperations2(): void;

  /**
   * These are "hooks." Subclasses may override them, but it's not mandatory
   * since the hooks already have default (but empty) implementation. Hooks
   * provide additional extension points in some crucial places of the
   * algorithm.
   */
  protected hook1(): void {}

  protected hook2(): void {}
}

/**
 * Concrete classes have to implement all abstract operations of the base class.
 * They can also override some operations with a default implementation.
 * @example
 * const concreteClass1 = new ConcreteClass1();
 * concreteClass1.templateMethod();
 * // Output:
 * // AbstractClass says: I am doing the bulk of the work
 * // ConcreteClass1 says: Implemented Operation1
 * // AbstractClass says: But I let subclasses override some operations
 * // ConcreteClass1 says: Implemented Operation2
 * // AbstractClass says: But I am doing the bulk of the work anyway
 */
class ConcreteClass1 extends AbstractClass {
  /**
   * Concrete classes have to implement all abstract operations of the base class.
   * They can also override some operations with a default implementation.
   */
  protected requiredOperations1(): void {
    console.log('ConcreteClass1 says: Implemented Operation1');
  }

  /**
   * Concrete classes have to implement all abstract operations of the base class.
   * They can also override some operations with a default implementation.
   */
  protected requiredOperations2(): void {
    console.log('ConcreteClass1 says: Implemented Operation2');
  }
}

/**
 * Usually, concrete classes override only a fraction of base class' operations.
 * They can also extend the base implementation of some operations.
 * @example
 * const concreteClass2 = new ConcreteClass2();
 * concreteClass2.templateMethod();
 * // Output:
 * // AbstractClass says: I am doing the bulk of the work
 * // ConcreteClass2 says: Implemented Operation1
 * // AbstractClass says: But I let subclasses override some operations but ConcreteClass2 says: Overridden Hook1
 * // ConcreteClass2 says: Implemented Operation2
 * // AbstractClass says: But I am doing the bulk of the work anyway
 */
class ConcreteClass2 extends AbstractClass {
  /**
   * Concrete classes have to implement all abstract operations of the base class.
   * They can also override some operations with a default implementation.
   */
  protected requiredOperations1(): void {
    console.log('ConcreteClass2 says: Implemented Operation1');
  }

  /**
   * Concrete classes have to implement all abstract operations of the base class.
   * They can also override some operations with a default implementation.
   */
  protected requiredOperations2(): void {
    console.log('ConcreteClass2 says: Implemented Operation2');
  }

  /**
   * Some operations can be overridden to provide a different behavior.
   * The default implementation of the hook is empty.
   */
  protected hook1(): void {
    console.log('ConcreteClass2 says: Overridden Hook1');
  }
}

/**
 * The client code calls the template method to execute the algorithm. Client
 * code does not have to know the concrete class of an object it works with, as
 * long as it works with objects through the interface of their base class.
 */
function clientCodeForTemplateMethod(abstractClass: AbstractClass) {
  // ...
  abstractClass.templateMethod();
  // ...
}

console.log('Same client code can work with different subclasses:');
clientCodeForTemplateMethod(new ConcreteClass1());

console.log('Same client code can work with different subclasses:');
clientCodeForTemplateMethod(new ConcreteClass2());
