/**
 * Tests whether the kth bit of a given number is set.
 *
 * @param {number} num The number to test.
 * @param {number} k The bit to test (0-indexed).
 * @return {boolean} True if the kth bit is set, false otherwise.
 * @example
 * const isSet = testKthBit(5, 1); // true
 * console.log(isSet); // Output: true
 * // This tests the 1st bit of 5 (binary 101), which is set.
 *
 * const isSet = testKthBit(5, 2); // false
 * console.log(isSet); // Output: false
 * // This tests the 2nd bit of 5 (binary 101), which is not set.
 */
const testKthBit = (num: number, k: number): boolean => {
  return (num & (1 << k)) !== 0;
};

/**
 * Sets the kth bit of a given number.
 *
 * @param {number} num The number to modify.
 * @param {number} k The bit to set (0-indexed).
 * @return {number} The modified number.
 * @example
 * const modifiedNum = setKthBit(5, 1); // 7
 * console.log(modifiedNum); // Output: 7
 * // This sets the 1st bit of 5 (binary 101), resulting in 7 (binary 111).
 */
const setKthBit = (num: number, k: number): number => {
  return num | (1 << k);
};

/**
 * Clears the kth bit of a given number, setting it to 0.
 *
 * @param {number} num The number to modify.
 * @param {number} k The bit to clear (0-indexed).
 * @return {number} The modified number with the kth bit cleared.
 * @example
 * const clearedNum = clearKthBit(5, 1); // 5
 * console.log(clearedNum); // Output: 5
 * // This clears the 1st bit of 5 (binary 101), resulting in 5 (binary 101).
 */
const clearKthBit = (num: number, k: number): number => {
  return num & ~(1 << k);
};

/**
 * Toggles the kth bit of a given number.
 *
 * @param {number} num The number to modify.
 * @param {number} k The bit to toggle (0-indexed).
 * @return {number} The modified number with the kth bit toggled.
 * @example
 * const toggledNum = toggleKthBit(5, 1); // 7
 * console.log(toggledNum); // Output: 7
 * // This toggles the 1st bit of 5 (binary 101), resulting in 7 (binary 111).
 */
const toggleKthBit = (num: number, k: number): number => {
  return num ^ (1 << k);
};

/**
 * Updates the kth bit of a given number with a new value.
 *
 * @param {number} num The number to modify.
 * @param {number} k The bit to update (0-indexed).
 * @param {number} value The new value for the kth bit (0 or 1).
 * @return {number} The modified number with the kth bit updated.
 * @example
 * const updatedNum = updateKthBit(5, 1, 1); // 7
 * console.log(updatedNum); // Output: 7
 * // This updates the 1st bit of 5 (binary 101) to 1, resulting in 7 (binary 111).
 */
const updateKthBit = (num: number, k: number, value: number): number => {
  return (num & ~(1 << k)) | (value << k);
};

/**
 * Returns the number of set bits in a given number.
 *
 * @param {number} num The number to count set bits in.
 * @return {number} The number of set bits in the given number.
 * @example
 * const count = countSetBits(5); // 2
 * console.log(count); // Output: 2
 * // This counts the set bits in 5 (binary 101), which are two: the 0th and 2nd bits.
 */
const countSetBits = (num: number): number => {
  return num.toString(2).split('1').length - 1;
};

/**
 * Checks whether a given number is a power of two.
 *
 * @param {number} num The number to check.
 * @return {boolean} True if the number is a power of two, false otherwise.
 * @example
 * const isPower = isPowerOfTwo(4); // true
 * console.log(isPower); // Output: true
 * // This checks if 4 (binary 100) is a power of two, which it is.
 */
const isPowerOfTwo = (num: number): boolean => {
  return num > 0 && (num & (num - 1)) === 0;
};

/**
 * Returns the value of the kth bit of a given number.
 *
 * @param {number} num The number to retrieve the kth bit from.
 * @param {number} k The bit to retrieve (0-indexed).
 * @return {number} The value of the kth bit (0 or 1).
 * @example
 * const kthBit = findKthBit(5, 1); // 0
 * console.log(kthBit); // Output: 0
 * // This finds the value of the 1st bit of 5 (binary 101), which is 0.
 */
const findKthBit = (num: number, k: number): number => {
  return (num >> k) & 1;
};

/**
 * Finds the last set bit in a given number.
 *
 * @param {number} num The number to find the last set bit in.
 * @return {number} The last set bit in the given number.
 * @example
 * const lastSetBit = findLastSetBit(18); // 2
 * console.log(lastSetBit); // Output: 2
 * // This finds the last set bit in 18 (binary 10010), which is the 2nd bit.
 */
const findLastSetBit = (num: number): number => {
  return num & -num;
};

/**
 * Finds the first set bit in a given number.
 *
 * @param {number} num The number to find the first set bit in.
 * @return {number} The first set bit in the given number.
 * @example
 * const firstSetBit = findFirstSetBit(18); // 2
 * console.log(firstSetBit); // Output: 2
 * // This finds the first set bit in 18 (binary 10010), which is the 2nd bit.
 */
const findFirstSetBit = (num: number): number => {
  return num & -num;
};

/**
 * Finds the lowest set bit in a given number.
 *
 * @param {number} num The number to find the lowest set bit in.
 * @return {number} A number representing the lowest set bit in the given number.
 * @example
 * const lowestSetBit = findLowestSetBit(18); // 2
 * console.log(lowestSetBit); // Output: 2
 * // This finds the lowest set bit in 18 (binary 10010), which is the 2nd bit.
 */
const findLowestSetBit = (num: number): number => {
  return num & -num;
};

/**
 * Multiplies a given number by a power of two.
 *
 * @param {number} num The number to multiply.
 * @param {number} k The power of two to multiply by.
 * @return {number} The result of the multiplication.
 * @example
 * const result = multiplyByPowerOfTwo(5, 2);
 * console.log(result); // Output: 20
 * // This multiplies 5 by 2^2 (4), resulting in 20.
 */
const multiplyByPowerOfTwo = (num: number, k: number): number => {
  return num << k;
};

/**
 * Divides a given number by a power of two.
 *
 * @param {number} num The number to divide.
 * @param {number} k The power of two to divide by.
 * @return {number} The result of the division.
 * @example
 * const result = divideByPowerOfTwo(8, 2);
 * console.log(result); // Output: 2
 * // This divides 8 by 2^2 (4), resulting in 2.
 */
const divideByPowerOfTwo = (num: number, k: number): number => {
  return num >> k;
};

/**
 * Swaps two variables without using a temporary variable.
 *
 * @param {number} num1 The first number to swap.
 * @param {number} num2 The second number to swap.
 * @return {number[]} An array containing the swapped numbers.
 * * @example
 * const [a, b] = swapVariables(5, 10);
 * console.log(a, b); // Output: 10, 5
 * // This swaps the values of num1 and num2 without using a temporary variable.
 */
const swapVariables = (num1: number, num2: number): number[] => {
  num1 ^= num2;
  num2 ^= num1;
  num1 ^= num2;
  return [num1, num2];
};

export {
  testKthBit,
  setKthBit,
  clearKthBit,
  toggleKthBit,
  updateKthBit,
  countSetBits,
  isPowerOfTwo,
  findKthBit,
  findLastSetBit,
  findFirstSetBit,
  findLowestSetBit,
  multiplyByPowerOfTwo,
  divideByPowerOfTwo,
  swapVariables,
};
