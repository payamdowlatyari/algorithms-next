/**
 * The Handler interface declares a method for building the chain of handlers.
 * It also declares a method for executing a request.
 */
interface Handler<Request = string, Result = string> {
  setNext(handler: Handler<Request, Result>): Handler<Request, Result>;
  handle(request: Request): Result;
}

/**
 * The default chaining behavior can be implemented inside a base handler class.
 * All concrete handlers either handle a request or pass it to the next handler
 * in the chain.
 *
 * @example
 * const monkey = new MonkeyHandler();
 * const squirrel = new SquirrelHandler();
 * const dog = new DogHandler();
 *
 * monkey.setNext(squirrel).setNext(dog);
 *
 * console.log(monkey.handle('Banana'));
 * console.log(monkey.handle('Nut'));
 */
abstract class AbstractHandler implements Handler {
  private nextHandler!: Handler;

  /**
   * Set the next handler in the chain.
   * @param {Handler} handler The next handler to be set.
   * @returns {Handler} The next handler in the chain after setting.
   */
  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    // Returning a handler from here will let us link handlers in a
    // convenient way like this:
    // monkey.setNext(squirrel).setNext(dog);
    return handler;
  }

  /**
   * The default chaining behavior can be implemented inside a base handler
   * class. All concrete handlers either handle a request or pass it to the
   * next handler in the chain.
   *
   * @param {string} request The request to be processed.
   * @returns {string} The result of the request after processing by the current
   * handler and all subsequent handlers in the chain.
   */
  public handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return '';
  }
}

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 *
 * @class MonkeyHandler
 * @extends {AbstractHandler}
 *
 * @example
 * const monkey = new MonkeyHandler();
 * const squirrel = new SquirrelHandler();
 * const dog = new DogHandler();
 *
 * monkey.setNext(squirrel).setNext(dog);
 *
 * console.log(monkey.handle('Banana'));
 * console.log(monkey.handle('Nut'));
 */
class MonkeyHandler extends AbstractHandler {
  /**
   * @param {string} request The request to be processed.
   * @returns {string} The result of the request after processing by the current
   * handler and all subsequent handlers in the chain.
   */
  public handle(request: string): string {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

/**
 * The SquirrelHandler class handles requests for nuts.
 *
 * @example
 * const monkey = new MonkeyHandler();
 * const squirrel = new SquirrelHandler();
 * const dog = new DogHandler();
 *
 * monkey.setNext(squirrel).setNext(dog);
 *
 * console.log(monkey.handle('Banana'));
 * console.log(monkey.handle('Nut'));
 */
class SquirrelHandler extends AbstractHandler {
  /**
   * @param {string} request The request to be processed.
   * @returns {string} The result of the request after processing by the current
   * handler and all subsequent handlers in the chain.
   */
  public handle(request: string): string {
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

/**
 * The DogHandler class handles requests for meatballs.
 *
 * @example
 * const monkey = new MonkeyHandler();
 * const squirrel = new SquirrelHandler();
 * const dog = new DogHandler();
 *
 * monkey.setNext(squirrel).setNext(dog);
 *
 * console.log(monkey.handle('Banana'));
 * console.log(monkey.handle('Nut'));
 */
class DogHandler extends AbstractHandler {
  /**
   * @param {string} request The request to be processed.
   * @returns {string} The result of the request after processing by the current
   * handler and all subsequent handlers in the chain.
   */
  public handle(request: string): string {
    if (request === 'MeatBall') {
      return `Dog: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

/**
 * The client code is usually suited to work with a single handler. In most
 * cases, it is not even aware that the handler is part of a chain.
 */
function clientCodeForChainOfResponsibility(handler: Handler) {
  const foods = ['Nut', 'Banana', 'Cup of coffee'];

  for (const food of foods) {
    console.log(`Client: Who wants a ${food}?`);

    const result = handler.handle(food);
    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  ${food} was left untouched.`);
    }
  }
}

/**
 * The other part of the client code constructs the actual chain.
 */
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

/**
 * The client should be able to send a request to any handler, not just the
 * first one in the chain.
 */
console.log('Chain: Monkey > Squirrel > Dog\n');
clientCodeForChainOfResponsibility(monkey);

console.log('Subchain: Squirrel > Dog\n');
clientCodeForChainOfResponsibility(squirrel);
