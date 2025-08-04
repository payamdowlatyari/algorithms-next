/**
 * The Component interface declares an `accept` method that should take the base
 * visitor interface as an argument.
 * Each Concrete Component must implement this method.
 */
interface VisitorComponent {
  accept(visitor: Visitor): void;
}

/**
 * Each Concrete Component must implement the `accept` method in such a way that
 * it calls the visitor's method corresponding to the component's class.
 *
 * @example
 * const components: VisitorComponent[] = [new ConcreteComponentA(), new ConcreteComponentB()];
 * const visitor: Visitor = new ConcreteVisitor();
 * components.forEach(component => component.accept(visitor));
 */
class ConcreteComponentA implements VisitorComponent {
  /**
   * Note that we're calling `visitConcreteComponentA`, which matches the
   * current class name. This way we let the visitor know the class of the
   * component it works with.
   */
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentA(this);
  }

  /**
   * Concrete Components may have special methods that don't exist in their
   * base class or interface. The Visitor is still able to use these methods
   * since it's aware of the component's concrete class.
   */
  public exclusiveMethodOfConcreteComponentA(): string {
    return 'A';
  }
}

/**
 * Concrete Components must implement the `accept` method in such a way that
 * it calls the visitor's method corresponding to the component's class.
 *
 * @example
 * const components: VisitorComponent[] = [new ConcreteComponentA(), new ConcreteComponentB()];
 * const visitor: Visitor = new ConcreteVisitor();
 * components.forEach(component => component.accept(visitor));
 */
class ConcreteComponentB implements VisitorComponent {
  /**
   * Same here: visitConcreteComponentB => ConcreteComponentB
   */
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentB(this);
  }

  /**
   * Concrete Components may have special methods that don't exist in their
   * base class or interface. The Visitor is still able to use these methods
   * since it's aware of the component's concrete class.
   */
  public specialMethodOfConcreteComponentB(): string {
    return 'B';
  }
}

/**
 * The Visitor Interface declares a set of visiting methods that correspond to
 * component classes. The signature of a visiting method allows the visitor to
 * identify the exact class of the component that it's dealing with.
 */
interface Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void;

  visitConcreteComponentB(element: ConcreteComponentB): void;
}

/**
 * Concrete Visitors implement several versions of the same algorithm, which can
 * work with all concrete component classes.
 *
 * You can experience the biggest benefit of the Visitor pattern when using it
 * with a complex object structure, such as a Composite tree. In this case, it
 * might be helpful to store some intermediate state of the algorithm while
 * executing visitor's methods over various objects of the structure.
 *
 * @example
 * const components: VisitorComponent[] = [new ConcreteComponentA(), new ConcreteComponentB()];
 * const visitor1: Visitor = new ConcreteVisitor1();
 * const visitor2: Visitor = new ConcreteVisitor2();
 * components.forEach(component => component.accept(visitor1));
 * components.forEach(component => component.accept(visitor2));
 */
class ConcreteVisitor1 implements Visitor {
  /**
   * Concrete Components may have special methods that don't exist in their
   * base class or interface. The Visitor is still able to use these methods
   * since it's aware of the component's concrete class.
   */
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`,
    );
  }

  /**
   * Concrete Components may have special methods that don't exist in their
   * base class or interface. The Visitor is still able to use these methods
   * since it's aware of the component's concrete class.
   */
  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(
      `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`,
    );
  }
}

/**
 * Concrete Visitors implement several versions of the same algorithm, which can
 * work with all concrete component classes.
 *
 * @example
 * const components: VisitorComponent[] = [new ConcreteComponentA(), new ConcreteComponentB()];
 * const visitor1: Visitor = new ConcreteVisitor1();
 * const visitor2: Visitor = new ConcreteVisitor2();
 * components.forEach(component => component.accept(visitor1));
 * components.forEach(component => component.accept(visitor2));
 */
class ConcreteVisitor2 implements Visitor {
  /**
   * Concrete Components may have special methods that don't exist in their
   * base class or interface. The Visitor is still able to use these methods
   * since it's aware of the component's concrete class.
   */
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`,
    );
  }

  /**
   * Concrete Components may have special methods that don't exist in their
   * base class or interface. The Visitor is still able to use these methods
   * since it's aware of the component's concrete class.
   */
  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(
      `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`,
    );
  }
}

/**
 * The client code can run visitor operations over any set of elements without
 * figuring out their concrete classes. The accept operation directs a call to
 * the appropriate operation in the visitor object.
 */
function clientCodeForVisitor(
  components: VisitorComponent[],
  visitor: Visitor,
) {
  // ...
  for (const component of components) {
    component.accept(visitor);
  }
  // ...
}

const components = [new ConcreteComponentA(), new ConcreteComponentB()];

console.log(
  'The client code works with all visitors via the base Visitor interface:',
);
const visitor1 = new ConcreteVisitor1();
clientCodeForVisitor(components, visitor1);

console.log(
  'It allows the same client code to work with different types of visitors:',
);
const visitor2 = new ConcreteVisitor2();
clientCodeForVisitor(components, visitor2);
