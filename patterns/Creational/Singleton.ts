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
