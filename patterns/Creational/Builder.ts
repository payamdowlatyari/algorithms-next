/**
 * The Builder interface specifies methods for creating the different parts of
 * the Product objects.
 */
interface Builder {
  /**
   * Produces part A of the product.
   */
  producePartA(): void;

  /**
   * Produces part B of the product.
   */
  producePartB(): void;

  /**
   * Produces part C of the product.
   */
  producePartC(): void;
}

/**
 * The Concrete Builder classes follow the Builder interface and provide
 * specific implementations of the building steps. Your program may have several
 * variations of Builders, implemented differently.
 *
 * @example
 * const builder1 = new ConcreteBuilder1();
 * builder1.producePartA();
 * builder1.producePartB();
 * builder1.producePartC();
 * const product1 = builder1.getProduct();
 */
class ConcreteBuilder1 implements Builder {
  private product!: Product1;

  /**
   * A fresh builder instance should contain a blank product object, which is
   * used in further assembly.
   */
  constructor() {
    this.reset();
  }

  /**
   * Reset the Builder to a blank Product object.
   */
  public reset(): void {
    this.product = new Product1();
  }

  /**
   * All production steps work with the same product instance.
   */
  public producePartA(): void {
    this.product.parts.push('PartA1');
  }

  /**
   * Concrete Builders are supposed to provide their own methods for
   * building steps. In this example, the method is named in a way that
   * follows the BEM (Block Element Modifier) convention of naming methods
   * with the same name as the class, but with the first letter of each word
   * capitalized.
   */
  public producePartB(): void {
    this.product.parts.push('PartB1');
  }

  /**
   * Adds PartC1 to the product's parts list. This method is part of the
   * building process for creating a product and is called to assemble
   * the specific part C1.
   */
  public producePartC(): void {
    this.product.parts.push('PartC1');
  }

  /**
   * Concrete Builders are supposed to provide their own methods for
   * retrieving results. That's because various types of builders may create
   * entirely different products that don't follow the same interface.
   * Therefore, such methods cannot be declared in the base Builder interface
   * (at least in a statically typed programming language).
   *
   * Usually, after returning the end result to the client, a builder instance
   * is expected to be ready to start producing another product. That's why
   * it's a usual practice to call the reset method at the end of the
   * `getProduct` method body. However, this behavior is not mandatory, and
   * you can make your builders wait for an explicit reset call from the
   * client code before disposing of the previous result.
   */
  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

/**
 * It makes sense to use the Builder pattern only when your products are quite
 * complex and require extensive configuration.
 *
 * Unlike in other creational patterns, different concrete builders can produce
 * unrelated products. In other words, results of various builders may not
 * always follow the same interface.
 *
 * @example
 * const builder1 = new ConcreteBuilder1();
 * builder1.producePartA();
 * builder1.producePartB();
 * builder1.producePartC();
 * const product1 = builder1.getProduct();
 * product1.listParts();
 */
class Product1 {
  public parts: string[] = [];

  /**
   * Prints out the list of parts that make up this product.
   */
  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}

/**
 * The Director is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration. Strictly speaking, the Director class is
 * optional, since the client can control builders directly.
 * @example
 * const director = new Director();
 * director.setBuilder(new ConcreteBuilder1());
 * director.buildMinimalViableProduct();
 * const product1 = director.getBuilder().getProduct();
 * product1.listParts();
 */
class Director {
  private builder!: Builder;

  /**
   * The Director works with any builder instance that the client code passes
   * to it. This way, the client code may alter the final type of the newly
   * assembled product.
   */
  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  /**
   * The Director can construct several product variations using the same
   * building steps.
   */
  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  /**
   * Construct a full-featured product with all features enabled.
   */
  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

/**
 * The client code creates a builder object, passes it to the director and then
 * initiates the construction process. The end result is retrieved from the
 * builder object.
 */
function clientCodeForBuilder(director: Director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  console.log('Standard basic product:');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('Standard full featured product:');
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  // Remember, the Builder pattern can be used without a Director class.
  console.log('Custom product:');
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCodeForBuilder(director);
