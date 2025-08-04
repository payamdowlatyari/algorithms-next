/**
 * The Context defines the interface of interest to clients. It also maintains a
 * reference to an instance of a State subclass, which represents the current
 * state of the Context.
 *
 * @example
 * const context = new Context(new ConcreteStateA());
 * context.request1();
 * context.request2();
 */
class Context {
  /**
   * @type {State} A reference to the current state of the Context.
   */
  private state!: State;

  /**
   * @param {State} state A reference to the current state of the Context.
   */
  constructor(state: State) {
    this.transitionTo(state);
  }

  /**
   * The Context allows changing the State object at runtime.
   */
  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  /**
   * The Context delegates part of its behavior to the current State object.
   */
  public request1(): void {
    this.state.handle1();
  }

  /**
   * The Context delegates part of its behavior to the current State object.
   */
  public request2(): void {
    this.state.handle2();
  }
}

/**
 * The base State class declares methods that all Concrete State should
 * implement and also provides a backreference to the Context object, associated
 * with the State. This backreference can be used by States to transition the
 * Context to another State.
 *
 * @example
 * const context = new Context(new ConcreteStateA());
 * context.request1();
 * context.request2();
 */
abstract class State {
  protected context!: Context;

  /**
   * A reference back to the Context.
   */
  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handle1(): void;

  public abstract handle2(): void;
}

/**
 * Concrete States implement various behaviors, associated with a state of the
 * Context.
 *
 * @example
 * const context = new Context(new ConcreteStateA());
 * context.request1();
 * context.request2();
 * context.transitionTo(new ConcreteStateB());
 * context.request1();
 * context.request2();
 * context.transitionTo(new ConcreteStateA());
 */
class ConcreteStateA extends State {
  /**
   * The Context delegates part of its behavior to the current State object.
   */
  public handle1(): void {
    console.log('ConcreteStateA handles request1.');
    console.log('ConcreteStateA wants to change the state of the context.');
    this.context.transitionTo(new ConcreteStateB());
  }

  /**
   * The Context delegates part of its behavior to the current State object.
   */
  public handle2(): void {
    console.log('ConcreteStateA handles request2.');
  }
}

/**
 * Concrete States implement various behaviors, associated with a state of the
 * Context.
 *
 * @example
 * const context = new Context(new ConcreteStateA());
 * context.request1();
 * context.request2();
 * context.transitionTo(new ConcreteStateB());
 * context.request1();
 * context.request2();
 * context.transitionTo(new ConcreteStateA());
 */
class ConcreteStateB extends State {
  /**
   * The Context delegates part of its behavior to the current State object.
   */
  public handle1(): void {
    console.log('ConcreteStateB handles request1.');
  }

  /**
   * The Context delegates part of its behavior to the current State object.
   */
  public handle2(): void {
    console.log('ConcreteStateB handles request2.');
    console.log('ConcreteStateB wants to change the state of the context.');
    this.context.transitionTo(new ConcreteStateA());
  }
}

/**
 * The client code.
 */
const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
