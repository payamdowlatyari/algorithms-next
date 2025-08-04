// Also known as: Intermediary, Controller

// Intent: Lets you define an object that encapsulates how a set of objects interact.
// Mediator promotes loose coupling by keeping objects from referring each other
// explicitly, and it allows you to change their interaction indirectly, by
// passing them through a mediator object.

// Applicability: When you have a set of objects that communicate with each other
// via a common interface and you want to reduce their coupling.

// Structure: The Mediator interface declares a method used by components to
// notify the mediator about various events. The Mediator may react to these
// events and pass the execution to other components.

// Real-world example: The Mediator pattern is used in the jQuery UI library to
// coordinate different UI components.

// ### Pros:
// - Single Responsibility Principle. You can extract the communications between various
// components into a single place, making it easier to comprehend and maintain.
// - Open/Closed Principle. You can introduce new mediators without having to
// change the actual components.
// - You can reduce coupling between various components of a program.
// - You can reuse individual components more easily.

// ### Cons:
// - You can make the system more complex than it needs to be.

/**
 * The Mediator interface declares a method used by components to notify the
 * mediator about various events. The Mediator may react to these events and
 * pass the execution to other components.
 */
interface Mediator {
  notify(sender: object, event: string): void;
}

/**
 * Concrete Mediators implement cooperative behavior by coordinating several
 * components.
 *
 * @example
 * const c1 = new Component1();
 * const c2 = new Component2();
 * const mediator = new ConcreteMediator(c1, c2);
 *
 * console.log('Client triggers operation A.');
 * c1.doA();
 *
 * console.log('');
 * console.log('Client triggers operation D.');
 * c2.doD();
 */
class ConcreteMediator implements Mediator {
  private component1: Component1;

  private component2: Component2;

  /**
   * @param {Component1} c1
   * @param {Component2} c2
   */
  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component1.setMediator(this);
    this.component2 = c2;
    this.component2.setMediator(this);
  }

  /**
   * @param {object} sender
   * @param {string} event
   */
  public notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('Mediator reacts on A and triggers following operations:');
      this.component2.doC();
    }

    if (event === 'D') {
      console.log('Mediator reacts on D and triggers following operations:');
      this.component1.doB();
      this.component2.doC();
    }
  }
}

/**
 * The Base Component provides the basic functionality of storing a mediator's
 * instance inside component objects.
 *
 * @example
 * const c1 = new Component1();
 * const c2 = new Component2();
 * const mediator = new ConcreteMediator(c1, c2);
 *
 * console.log('Client triggers operation A.');
 * c1.doA();
 *
 * console.log('');
 * console.log('Client triggers operation D.');
 * c2.doD();
 */
class BaseComponent {
  protected mediator: Mediator;

  /**
   * @param {Mediator} mediator
   */
  constructor(mediator?: Mediator) {
    this.mediator = mediator!;
  }

  /**
   * @param {Mediator} mediator
   */
  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

/**
 * Concrete Components implement various functionality. They don't depend on
 * other components. They also don't depend on any concrete mediator classes.
 *
 * @example
 * const c1 = new Component1();
 * const c2 = new Component2();
 * const mediator = new ConcreteMediator(c1, c2);
 *
 * console.log('Client triggers operation A.');
 * c1.doA();
 *
 * console.log('');
 * console.log('Client triggers operation D.');
 * c2.doD();
 */
class Component1 extends BaseComponent {
  /**
   * @returns {void}
   */
  public doA(): void {
    console.log('Component 1 does A.');
    this.mediator.notify(this, 'A');
  }

  /**
   * @returns {void}
   */
  public doB(): void {
    console.log('Component 1 does B.');
    this.mediator.notify(this, 'B');
  }
}

/**
 * Concrete Components implement various functionality. They don't depend on
 * other components. They also don't depend on any concrete mediator classes.
 *
 * @example
 * const c1 = new Component1();
 * const c2 = new Component2();
 * const mediator = new ConcreteMediator(c1, c2);
 *
 * console.log('Client triggers operation A.');
 * c1.doA();
 *
 * console.log('');
 * console.log('Client triggers operation D.');
 * c2.doD();
 */
class Component2 extends BaseComponent {
  /**
   * @returns {void}
   */
  public doC(): void {
    console.log('Component 2 does C.');
    this.mediator.notify(this, 'C');
  }

  /**
   * @returns {void}
   */
  public doD(): void {
    console.log('Component 2 does D.');
    this.mediator.notify(this, 'D');
  }
}

/**
 * The client code.
 */
const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

console.log('Client triggers operation A.');
c1.doA();

console.log('Client triggers operation D.');
c2.doD();
