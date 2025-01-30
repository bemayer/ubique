/** @import { array, matrix } from '../types.js' */
import { isarray } from '../datatype/isarray.js';
import { ismatrix } from '../datatype/ismatrix.js';
import { flatten } from './flatten.js';

/**
 * @function find
 * @summary Finds the indices of nonzero (true) elements in an array or matrix.
 * @description Given an input array or matrix, returns the indices of elements that are `true`. For a matrix, the indices are flattened row-wise.
 *
 * @param {array|matrix} x Input array or matrix.
 * @returns {array} An array of indices where the values are `true`.
 * @throws {Error} If no arguments are provided or if the input is not an array or matrix.
 *
 * @example
 * // Example 1: Find indices of true elements in a 1D array
 * find([0.3, -0.4, 0.5, 0.9].map(a => a > 0)); // [0, 2, 3]
 *
 * // Example 2: Find indices of true elements in a 2D matrix
 * find([[true, true], [false, true]]); // [0, 1, 3]
 *
 * // Example 3: Empty input
 * find([]); // []
 *
 * // Example 4: No true elements
 * find([false, false, false]); // []
 *
 * // Example 5: All true elements
 * find([true, true, true]); // [0, 1, 2]
 */
export function find(x) {
  if (arguments.length === 0) {
    throw new Error('Not enough input arguments');
  }
  if (!isarray(x) && !ismatrix(x)) {
    console.log(x);
    console.log(ismatrix(x))
    throw new Error('Input must be an array or matrix');
  }

  const flatX = ismatrix(x) ? flatten(x) : x;
  const indices = [];

  flatX.forEach((el, idx) => {
    if (el === true) {
      indices.push(idx);
    }
  });

  return indices;
}
