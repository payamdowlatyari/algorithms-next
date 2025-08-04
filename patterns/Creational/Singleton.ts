// Intent: Let you ensure that a class has only one instance, while providing a
// global point of access to it.

// Applicability: Use the Singleton pattern when you need to ensure that a class
// has only one instance, and when this instance needs to be accessed from
// different parts of your code.

// Structure: The Singleton class defines an `instance` getter, that lets
// clients access the unique singleton instance. The Singleton's constructor is
// private to prevent direct construction calls with the `new` operator.

// Real-world example: A configuration manager that reads settings from a file
// and provides access to these settings throughout the application. You want
// to ensure that only one instance of the configuration manager exists, so that
// all parts of the application use the same configuration settings.

// ### Pros:
// - You can be sure that a class has only a single instance.
// - You gain a global access point to that instance.
// - The singleton object is initialized only when it’s requested for the first time.

// ### Cons:
// - Violates the Single Responsibility Principle. The pattern solves two problems at the time.
// - The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.
// - The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.
// - It may be difficult to unit test the client code of the Singleton because many test frameworks
// rely on inheritance when producing mock objects. Since the constructor of the singleton class is
// private and overriding static methods is impossible in most languages, you will need to think of
// a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.

/**
 * The Singleton class defines an `instance` getter, that lets clients access
 * the unique singleton instance.
 *
 * @example
 * const s1 = Singleton.instance;
 * const s2 = Singleton.instance;
 *
 * if (s1 === s2) {
 *   console.log('Singleton works, both variables contain the same instance.');
 * } else {
 *   console.log('Singleton failed, variables contain different instances.');
 * }
 */
class Singleton {
  private static instance_: Singleton;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static getter that controls access to the singleton instance.
   *
   * This implementation allows you to extend the Singleton class while
   * keeping just one instance of each subclass around.
   */
  public static get instance(): Singleton {
    if (!Singleton.instance_) {
      Singleton.instance_ = new Singleton();
    }

    return Singleton.instance_;
  }

  /**
   * Finally, any singleton can define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
    // ...
  }
}

/**
 * The client code.
 */
function clientCodeForSingleton() {
  const s1 = Singleton.instance;
  const s2 = Singleton.instance;

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

clientCodeForSingleton();
