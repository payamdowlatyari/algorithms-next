// Intent: Define a family of algorithms, encapsulate each one, and make them
// interchangeable. Strategy lets the algorithm vary independently from clients
// that use it.

// Applicability: When you have many similar classes, but need to vary their
// behavior at runtime.

// Structure: The Strategy interface declares operations common to all supported
// algorithms. The Context uses this interface to call the algorithm defined by
// a Concrete Strategy. Concrete Strategies implement the algorithm while
// following the base Strategy interface. The Context doesn't know the concrete
// class of a strategy. It should work with all strategies via the Strategy
// interface.

// Real-world example: A web page with a form that captures a user's input. When
// the form is submitted, you want to store the user's input in the database.

// ### Pros:
// - You can swap algorithms used inside an object at runtime.
// - You can isolate the implementation details of an algorithm from the code that uses it.
// - You can replace inheritance with composition.
// - Open/Closed Principle. You can introduce new strategies without having to change the context.

// ### Cons:
// - If you only have a couple of algorithms and they rarely change, there’s no real reason to
// overcomplicate the program with new classes and interfaces that come along with the pattern.
// - Clients must be aware of the differences between strategies to be able to select a proper one.
// - A lot of modern programming languages have functional type support that lets you implement
// different versions of an algorithm inside a set of anonymous functions. Then you could use these
// functions exactly as you’d have used the strategy objects, but without bloating your code with extra
// classes and interfaces.

/**
 * The Context defines the interface of interest to clients.
 * It also maintains a reference to one of the Strategy objects, which
 * represents a particular strategy.
 *
 * @example
 * const context = new StrategyContext(new ConcreteStrategyA());
 * context.doSomeBusinessLogic();
 * // Output:
 * // Context: Sorting data using the strategy (not sure how it'll do it)
 * // a,b,c,d,e
 */
class StrategyContext {
  /**
   * @type {Strategy} The Context maintains a reference to one of the Strategy
   * objects. The Context does not know the concrete class of a strategy. It
   * should work with all strategies via the Strategy interface.
   */
  private strategy: Strategy;

  /**
   * Usually, the Context accepts a strategy through the constructor, but also
   * provides a setter to change it at runtime.
   */
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Usually, the Context allows replacing a Strategy object at runtime.
   */
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * The Context delegates some work to the Strategy object instead of
   * implementing multiple versions of the algorithm on its own.
   */
  public doSomeBusinessLogic(): void {
    // ...

    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it)",
    );
    const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
    console.log(result.join(','));

    // ...
  }
}

/**
 * The Strategy interface declares operations common to all supported versions
 * of some algorithm.
 *
 * The Context uses this interface to call the algorithm defined by Concrete
 * Strategies.
 */
interface Strategy {
  doAlgorithm(data: string[]): string[];
}

/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 *
 * @example
 * const context = new StrategyContext(new ConcreteStrategyA());
 * context.doSomeBusinessLogic();
 * // Output:
 * // Context: Sorting data using the strategy (not sure how it'll do it)
 * // a,b,c,d,e
 */
class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 *
 * @example
 * const context = new StrategyContext(new ConcreteStrategyB());
 * context.doSomeBusinessLogic();
 * // Output:
 * // Context: Sorting data using the strategy (not sure how it'll do it)
 * // e,d,c,b,a
 */
class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

/**
 * The client code picks a concrete strategy and passes it to the context. The
 * client should be aware of the differences between strategies in order to make
 * the right choice.
 */
const context2 = new StrategyContext(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context2.doSomeBusinessLogic();

console.log('Client: Strategy is set to reverse sorting.');
context2.setStrategy(new ConcreteStrategyB());
context2.doSomeBusinessLogic();
