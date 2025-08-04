// Also known as: Virtual Constructor, Polymorphic Factory

// Intent: Define an interface for creating an object, but let subclasses
// alter the type of objects that will be created. The Factory Method lets a
// class defer instantiation to subclasses.

// Applicability: When a class can't anticipate the class of objects it must
// create or when subclasses want to specify the objects they create.

// Structure: The Creator class declares the factory method that is supposed to
// return an object of a Product class. The Creator's subclasses usually provide
// the implementation of this method. The Product interface declares the
// operations that all concrete products must implement. Concrete Products
// provide various implementations of the Product interface.

// Real-world example: A web page with a form that captures a user's input. When
// the form is submitted, you want to store the user's input in the database.

// ### Pros:
// - You avoid tight coupling between the creator and the concrete products.
// - Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
// - Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.

// ### Cons:
// - The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern.
// The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.

/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 *
 * @example
 * const creator = new ConcreteCreator1();
 * console.log(creator.someOperation());
 */
abstract class Creator {
  /**
   * Note that the Creator may also provide some default implementation of the
   * factory method.
   */
  public abstract factoryMethod(): Product;

  /**
   * Also note that, despite its name, the Creator's primary responsibility is
   * not creating products. Usually, it contains some core business logic that
   * relies on Product objects, returned by the factory method. Subclasses can
   * indirectly change that business logic by overriding the factory method
   * and returning a different type of product from it.
   */
  public someOperation(): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 *
 * @extends Creator
 * @example
 * const creator = new ConcreteCreator1();
 * console.log(creator.someOperation());
 */
class ConcreteCreator1 extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 *
 * @extends Creator
 * @example
 * const creator = new ConcreteCreator2();
 * console.log(creator.someOperation());
 */
class ConcreteCreator2 extends Creator {
  /**
   * The factory method returns a ConcreteProduct2.
   * @returns An instance of ConcreteProduct2.
   */
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
interface Product {
  /**
   * The operation method that all concrete products must implement.
   * @returns A string representing the result of the operation.
   */
  operation(): string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 *
 * @implements Product
 * @example
 * const product = new ConcreteProduct1();
 * console.log(product.operation());
 */
class ConcreteProduct1 implements Product {
  /**
   * Performs an operation specific to ConcreteProduct1.
   * @returns A string representing the result of the operation.
   */
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}

/**
 * Concrete Products provide various implementations of the Product interface.
 *
 * @implements Product
 * @example
 * const product = new ConcreteProduct2();
 * console.log(product.operation());
 */
class ConcreteProduct2 implements Product {
  /**
   * Performs an operation specific to ConcreteProduct2.
   * @returns A string representing the result of the operation.
   */
  public operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCodeForFactoryMethod(creator: Creator) {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works.",
  );
  console.log(creator.someOperation());
  // ...
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log('App: Launched with the ConcreteCreator1.');
clientCodeForFactoryMethod(new ConcreteCreator1());

console.log('App: Launched with the ConcreteCreator2.');
clientCodeForFactoryMethod(new ConcreteCreator2());
