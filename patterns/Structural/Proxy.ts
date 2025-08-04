// Intent: Provides a surrogate or placeholder for another object to control access to it.

// Applicability: Use the Proxy pattern when you want to provide a placeholder
// for another object to control access to it.

// Structure: The Proxy class implements the same interface as the RealSubject.
// It can be either lazy-loaded or passed to the Proxy by the client. The Proxy
// can perform one of these things and then, depending on the result, pass the
// request to the RealSubject or return a default value.

// Real-world example: You want to provide a placeholder for another object to
// control access to it.

// ### Pros:
// - You can control the service object without clients knowing about it.
// - You can manage the lifecycle of the service object when clients don’t care about it.
// - The proxy works even if the service object isn’t ready or is not available.
// - Open/Closed Principle. You can introduce new proxies without changing the service or clients.

// ### Cons:
// - The code may become more complicated since you need to introduce a lot of new classes.
// - The response from the service might get delayed.

/**
 * The Subject interface declares common operations for both RealSubject and the
 * Proxy. As long as the client works with RealSubject using this interface,
 * you'll be able to pass it a proxy instead of a real subject.
 */
interface Subject {
  request(): void;
}

/**
 * The RealSubject contains some core business logic. Usually, RealSubjects are
 * capable of doing some useful work which may also be very slow or sensitive -
 * e.g. correcting input data. A Proxy can solve these issues without any
 * changes to the RealSubject's code.
 *
 * @example
 * const realSubject = new RealSubject();
 * realSubject.request();
 * // Output: RealSubject: Handling request.
 */
class RealSubject implements Subject {
  /**
   * Handle a request. This is potentially a slow or sensitive operation.
   */
  public request(): void {
    console.log('RealSubject: Handling request.');
  }
}

/**
 * The Proxy has an interface identical to the RealSubject.
 *
 * @example
 * const realSubject = new RealSubject();
 * const proxy = new Proxy2(realSubject);
 * proxy.request();
 * // Output:
 * // Proxy: Checking access prior to firing a real request.
 * // RealSubject: Handling request.
 * // Proxy: Logging the time of request.
 */
class Proxy2 implements Subject {
  private realSubject: RealSubject;

  /**
   * The Proxy maintains a reference to an object of the RealSubject class. It
   * can be either lazy-loaded or passed to the Proxy by the client.
   */
  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  /**
   * The most common applications of the Proxy pattern are lazy loading,
   * caching, controlling the access, logging, etc. A Proxy can perform one of
   * these things and then, depending on the result, pass the execution to the
   * same method in a linked RealSubject object.
   */
  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  /**
   * Checks if the real subject's request can be executed. This can include
   * authentication, authorization, resource availability, or other checks.
   * @returns {boolean} true if the request can be executed, false otherwise
   */
  private checkAccess(): boolean {
    // Some real checks should go here.
    console.log('Proxy: Checking access prior to firing a real request.');
    return true;
  }

  /**
   * Logs the time of request.
   */
  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}

/**
 * The client code is supposed to work with all objects (both subjects and
 * proxies) via the Subject interface in order to support both real subjects and
 * proxies. In real life, however, clients mostly work with their real subjects
 * directly. In this case, to implement the pattern more easily, you can extend
 * your proxy from the real subject's class.
 */
function clientCodeForProxy(subject: Subject) {
  // ...

  subject.request();

  // ...
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCodeForProxy(realSubject);

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy2(realSubject);
clientCodeForProxy(proxy);
