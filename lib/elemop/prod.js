/** @import { array, matrix } from '../types' */

import isarray from '../datatype/isarray.js';
import ismatrix from '../datatype/ismatrix.js';

/**
 * @function prod
 * @summary Product of array elements
 * @description Computes the product of elements in an array or matrix. Optionally, computes the product along a specified dimension.
 *
 * @param {array|matrix} x The input array or matrix of values.
 * @param {number} [dim=1] The dimension to operate along, 1 for columns, 0 for rows (default is 1).
 * @returns {number|array} The product of the array elements, or an array of products if a matrix is provided.
 * @throws {Error} If no input arguments are provided.
 *
 * @example
 * // Example 1: Product of a vector
 * assert.strictEqual(prod([5, 6, 3]), 90);
 *
 * // Example 2: Product of matrix elements along rows
 * assert.deepStrictEqual(prod([[5, 6, 5], [7, 8, -1]], 0), [150, -56]);
 *
 * // Example 3: Product of matrix elements along columns
 * assert.deepStrictEqual(prod([[5, 6, 5], [7, 8, -1]], 1), [35, 48, -5]);
 */
export default function prod(x, dim = 1) {
  if (!x) {throw new Error('Not enough input arguments');}

  const multiply = (arr) => arr.reduce((acc, val) => acc * val, 1);

  if (isarray(x)) {
    return multiply(x);
  }

  if (ismatrix(x)) {
    return dim === 0
      ? x.map((row) => multiply(row))
      : x[0].map((_, colIndex) => multiply(x.map((row) => row[colIndex])));
  }

  throw new Error('Invalid input type');
}
