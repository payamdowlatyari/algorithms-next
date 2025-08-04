/**
 * The Abstract Factory interface declares a set of methods that return
 * different abstract products. These products are called a family and are
 * related by a high-level theme or concept. Products of one family are usually
 * able to collaborate among themselves. A family of products may have several
 * variants, but the products of one variant are incompatible with products of
 * another.
 */
interface AbstractFactory {
  /**
   * The factory method.
   */
  createProductA(): AbstractProductA;

  /**
   * The factory method.
   */
  createProductB(): AbstractProductB;
}

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 *
 * @example
 * const factory1 = new ConcreteFactory1();
 * const a1 = factory1.createProductA();
 * const b1 = factory1.createProductB();
 */
class ConcreteFactory1 implements AbstractFactory {
  /**
   * Creates a concrete product A1 and returns it as an abstract product A.
   * This method ensures that the created product is compatible with other
   * products created by the factory.
   *
   * @returns An instance of ConcreteProductA1 as AbstractProductA.
   */
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  /**
   * Creates a concrete product B1 and returns it as an abstract product B.
   * This method ensures that the created product is compatible with other
   * products created by the factory.
   *
   * @returns An instance of ConcreteProductB1 as AbstractProductB.
   */
  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

/**
 * Each Concrete Factory has a corresponding product variant.
 *
 * @example
 * const factory2 = new ConcreteFactory2();
 * const a2 = factory2.createProductA();
 * const b2 = factory2.createProductB();
 */
class ConcreteFactory2 implements AbstractFactory {
  /**
   * Creates a concrete product A2 and returns it as an abstract product A.
   * This method ensures that the created product is compatible with other
   * products created by the factory.
   *
   * @returns An instance of ConcreteProductA2 as AbstractProductA.
   */
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  /**
   * Creates a concrete product B2 and returns it as an abstract product B.
   * This method ensures that the created product is compatible with other
   * products created by the factory.
   *
   * @returns An instance of ConcreteProductB2 as AbstractProductB.
   */
  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

/**
 * Each distinct product of a product family should have a base interface. All
 * variants of the product must implement this interface.
 */
interface AbstractProductA {
  usefulFunctionA(): string;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 *
 * @example
 * const factory1 = new ConcreteFactory1();
 * const a1 = factory1.createProductA();
 * const b1 = factory1.createProductB();
 */
class ConcreteProductA1 implements AbstractProductA {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public usefulFunctionA(): string {
    return 'The result of the product A1.';
  }
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 *
 * @example
 * const factory2 = new ConcreteFactory2();
 * const a2 = factory2.createProductA();
 * const b2 = factory2.createProductB();
 */
class ConcreteProductA2 implements AbstractProductA {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public usefulFunctionA(): string {
    return 'The result of the product A2.';
  }
}

/**
 * Here's the the base interface of another product. All products can interact
 * with each other, but proper interaction is possible only between products of
 * the same concrete variant.
 */
interface AbstractProductB {
  /**
   * Product B is able to do its own thing...
   */
  usefulFunctionB(): string;

  /**
   * ...but it also can collaborate with the ProductA.
   *
   * The Abstract Factory makes sure that all products it creates are of the
   * same variant and thus, compatible.
   */
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 *
 * @example
 * const factory1 = new ConcreteFactory1();
 * const a1 = factory1.createProductA();
 * const b1 = factory1.createProductB();
 */
class ConcreteProductB1 implements AbstractProductB {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public usefulFunctionB(): string {
    return 'The result of the product B1.';
  }

  /**
   * The variant, Product B1, is only able to work correctly with the variant,
   * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 *
 * @example
 * const factory2 = new ConcreteFactory2();
 * const a2 = factory2.createProductA();
 * const b2 = factory2.createProductB();
 */
class ConcreteProductB2 implements AbstractProductB {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public usefulFunctionB(): string {
    return 'The result of the product B2.';
  }

  /**
   * The variant, Product B2, is only able to work correctly with the variant,
   * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}

/**
 * The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 *
 * @param factory AbstractFactory
 */
function clientCodeForAbstractFactory(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

/**
 * The client code can work with any concrete factory class.
 */
console.log('Client: Testing client code with the first factory type...');
clientCodeForAbstractFactory(new ConcreteFactory1());

console.log(
  'Client: Testing the same client code with the second factory type...',
);
clientCodeForAbstractFactory(new ConcreteFactory2());
