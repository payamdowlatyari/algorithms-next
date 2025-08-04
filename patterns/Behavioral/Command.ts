// Also known as: Action, Transaction

// Intent: Encapsulate a request as an object, thereby letting you parameterize
// clients with different requests, queue or log requests, and support
// undoable operations.

// Applicability: When you want to parameterize an action or a set of actions
// to different objects.

// Structure: The Command interface declares an execute method. Concrete
// commands implement this method by executing the command.

// Real world example: A web page with a form that captures a user's input. When
// the form is submitted, you want to store the user's input in the database.

// ### Pros:
// - Single Responsibility Principle. You can decouple classes that invoke operations from classes
// that perform these operations.
// - Open/Closed Principle. You can introduce new commands into the app without breaking existing client code.
// - You can implement undo/redo.
// - You can implement deferred execution of operations.
// - You can assemble a set of simple commands into a complex one.

// ### Cons:
// -  The code may become more complicated since you’re introducing a whole new layer between senders and receivers.

/**
 * The Command interface declares a method for executing a command.
 */
interface Command {
  execute(): void;
}

/**
 * Some commands can implement simple operations on their own.
 *
 * @example
 * const simpleCommand = new SimpleCommand('Hello');
 * simpleCommand.execute();
 * // Output: SimpleCommand: See, I can do simple things like printing (Hello)
 */
class SimpleCommand implements Command {
  private payload: string;

  /**
   * The constructor accepts the payload for the command.
   * @param {string} payload The payload for the command.
   */
  constructor(payload: string) {
    this.payload = payload;
  }

  /**
   * @example
   * simpleCommand.execute();
   * // Output: SimpleCommand: See, I can do simple things like printing (Hello)
   */
  public execute(): void {
    console.log(
      `SimpleCommand: See, I can do simple things like printing (${this.payload})`,
    );
  }
}

/**
 * However, some commands can delegate more complex operations to other objects,
 * called "receivers."
 *
 * @example
 * const receiver = new Receiver();
 * const complexCommand = new ComplexCommand(receiver, 'a', 'b');
 * complexCommand.execute();
 * // Output: ComplexCommand: Complex stuff should be done by a receiver object.
 */
class ComplexCommand implements Command {
  private receiver: Receiver;

  /**
   * Context data, required for launching the receiver's methods.
   */
  private a: string;
  private b: string;

  /**
   * Complex commands can accept one or several receiver objects along with
   * any context data via the constructor.
   */
  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  /**
   * Commands can delegate to any methods of a receiver.
   */
  public execute(): void {
    console.log(
      'ComplexCommand: Complex stuff should be done by a receiver object.',
    );
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

/**
 * The Receiver classes contain some important business logic. They know how to
 * perform all kinds of operations, associated with carrying out a request. In
 * fact, any class may serve as a Receiver.
 *
 * @example
 * const receiver = new Receiver();
 * receiver.doSomething('a');
 * receiver.doSomethingElse('b');
 */
class Receiver {
  /**
   * The Receiver's business logic is called.
   */
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }

  /**
   * The Receiver's business logic is called.
   */
  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

/**
 * The Invoker is associated with one or several commands. It sends a request to
 * the command.
 *
 * @example
 * const invoker = new Invoker();
 * invoker.setOnStart(new SimpleCommand('Say Hi!'));
 * invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));
 * invoker.doSomethingImportant();
 */
class Invoker {
  private onStart!: Command;

  private onFinish!: Command;

  /**
   * Initialize commands.
   */
  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  /**
   * Initialize commands.
   */
  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  /**
   * The Invoker does not depend on concrete command or receiver classes. The
   * Invoker passes a request to a receiver indirectly, by executing a
   * command.
   */
  public doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log('Invoker: ...doing something really important...');

    console.log('Invoker: Does anybody want something done after I finish?');
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  /**
   * Use dynamic dispatch to execute commands.
   */
  private isCommand(object: Command): object is Command {
    return object.execute !== undefined;
  }
}

/**
 * The client code can parameterize an invoker with any commands.
 */
const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi!'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

invoker.doSomethingImportant();
