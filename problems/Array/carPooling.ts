// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

// You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi]
// indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop
// them off are fromi and toi respectively. The locations are given as the number of kilometers due east
// from the car's initial location.

// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

// Constraints:

// 1 <= trips.length <= 1000
// trips[i].length == 3
// 1 <= numPassengersi <= 100
// 0 <= fromi < toi <= 1000
// 1 <= capacity <= 105

/**
 * Determines if it is possible to carpool with the given trips and capacity.
 * This function checks if the total number of passengers at any point in time
 * exceeds the car's capacity.
 * The algorithm uses a difference array to track the number of passengers
 * at each stop, allowing for efficient updates and checks.
 *
 * @param {number[][]} trips - An array of trips where each trip is represented as [numPassengers, from, to].
 * @param {number} capacity
 * @return {boolean}
 *
 * @example
 * // Example 1:
 * const trips = [[2, 1, 5], [3, 3, 7]];
 * const capacity = 4;
 * console.log(carPooling(trips, capacity)); // Output: false
 *
 * Example 2:
 * const trips = [[2, 1, 5], [3, 3, 7]];
 * const capacity = 5;
 * console.log(carPooling(trips, capacity)); // Output: true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function carPooling(trips: number[][], capacity: number): boolean {
  const stops = new Array(1001).fill(0);

  for (const [numPassengers, from, to] of trips) {
    stops[from] += numPassengers;
    stops[to] -= numPassengers;
  }

  let currentPassengers = 0;

  for (const stop of stops) {
    currentPassengers += stop;
    if (currentPassengers > capacity) {
      return false;
    }
  }

  return true;
}
