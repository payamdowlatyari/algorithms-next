// Matrix operations and manipulations

// This file contains functions to perform various operations on matrices, such as transposing, creating new matrices,
// finding diagonals, and rotating matrices. These functions are useful for a wide range of applications in computer science,
// including image processing, data analysis, and mathematical computations.

// The functions provided in this file are:
// - createMatrix: Creates a new matrix with the same dimensions as the given matrix, filled with zeros, and also returns a copy of the original matrix.
// - findDiagonals: Finds the elements of the main and anti-diagonals in a given matrix.
// - rotateMatrix: Rotates a given matrix in multiple ways (transpose, rotate left, rotate right) and returns the results.
// - transposeMatrix: Returns the transpose of a given matrix.

// Each function includes an example usage and an explanation of its purpose and behavior.
// The functions are designed to be efficient and easy to use for common matrix operations in programming.

/**
 * Creates two matrices: a copy of the given matrix and a new matrix with the same dimensions but all elements set to 0
 * @param {number[][]} matrix - the given matrix
 * @returns {Object} - an object with two properties: newMatrix and copyMatrix
 * @example
 * const matrix = [[1, 2], [3, 4]];
 * const { newMatrix, copyMatrix } = createMatrix(matrix);
 * // newMatrix will be [[0, 0], [0, 0]]
 * // copyMatrix will be [[1, 2], [3, 4]]
 */
const createMatrix = (matrix: number[][]): object => {
  const r = matrix.length;
  const c = matrix[0].length;

  const newMatrix = Array.from({ length: r }, () => Array(c).fill(0));
  const copyMatrix = matrix.map((row) => [...row]);
  return { newMatrix, copyMatrix };
};

/**
 * Finds the elements of the main and anti diagonals in a given matrix.
 * @param {number[][]} matrix - the given matrix
 * @returns {Object} - an object with two properties: mainDiagonal and antiDiagonal, each containing an array of elements
 * @example
 * const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * const { mainDiagonal, antiDiagonal } = findDiagonals(matrix)
 * // mainDiagonal will be [1, 5, 9]
 * // antiDiagonal will be [3, 5, 7]
 */
const findDiagonals = (matrix: number[][]): object => {
  const r = matrix.length;
  const c = matrix[0].length;

  const mainDiagonal = Array.from(
    { length: Math.min(r, c) },
    (_, i) => matrix[i][i],
  );
  const antiDiagonal = Array.from(
    { length: Math.min(r, c) },
    (_, i) => matrix[i][~i],
  );
  return { mainDiagonal, antiDiagonal };
};

/**
 * Rotates a given matrix in multiple ways and returns the results.
 * This function performs a transpose on the matrix, then generates
 * two rotations: one where the transposed matrix is reversed to
 * rotate left, and one where each row of the transposed matrix is
 * reversed to rotate right.
 *
 * @param {number[][]} matrix - The input 2D matrix to rotate.
 * @returns {Object} - An object containing:
 *   - transpose: the transposed version of the input matrix
 *   - transposeTuple: an intermediary transposed matrix
 *   - rotateLeft: the matrix rotated 90 degrees counterclockwise
 *   - rotateRight: the matrix rotated 90 degrees clockwise
 * @example
 * const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 * const { transpose, rotateLeft, rotateRight } = rotateMatrix(matrix);
 * // transpose will be [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
 * // rotateLeft will be [[3, 6, 9], [2, 5, 8], [1, 4, 7]]
 * // rotateRight will be [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
 */
const rotateMatrix = (matrix: number[][]): object => {
  const transposeTuple = matrix[0].map((_, i) => matrix.map((row) => row[i]));
  const transpose = transposeTuple.map((row) => [...row]);
  const rotateLeft = transpose.reverse();
  const rotateRight = transpose.map((row) => row.reverse());
  return { transpose, transposeTuple, rotateLeft, rotateRight };
};

/**
 * Returns the transpose of a given matrix.
 * @param {number[][]} matrix - the given matrix
 * @returns {number[][]} - the transpose of the given matrix
 * @example
 * const matrix = [[1, 2], [3, 4]];
 * const transpose = transposeMatrix(matrix);
 * // transpose will be [[1, 3], [2, 4]]
 */
const transposeMatrix = (matrix: number[][]): number[][] =>
  matrix[0].map((_, i) => matrix.map((row) => row[i]));
