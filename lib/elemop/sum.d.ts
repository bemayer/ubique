import { array, matrix } from '../types';

/**
 * @function sum
 * @summary Sum of array elements
 * @description Computes the sum of array or matrix elements. If a matrix is provided, the sum can be calculated across rows or columns based on the specified dimension.
 *
 * @param x The array or matrix of values.
 * @param dim The dimension to sum across. Use `0` for rows and `1` for columns. Defaults to `0`.
 * @returns The sum of the elements.
 * @throws {Error} If no arguments are provided.
 *
 * @example
 * // Example 1: Sum of elements in a 1D array
 * assert.strictEqual(sum([5, 6, 3]), 14);
 *
 * // Example 2: Sum of elements across rows in a 2D array
 * assert.deepStrictEqual(sum([[5, 6, 5], [7, 8, -1]], 0), [[16], [14]]);
 *
 * // Example 3: Sum of elements across columns in a 2D array
 * assert.deepStrictEqual(sum([[5, 6, 5], [7, 8, -1]], 1), [[12, 14, 4]]);
 */
export function sum(x: array | matrix, dim?: number): number | array;
