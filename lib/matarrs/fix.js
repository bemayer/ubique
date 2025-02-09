/** @import { array, matrix } from '../types.js' */

import arrayfun from '../datatype/arrayfun.js';

/**
 * @function fix
 * @summary Rounds numbers toward zero.
 * @description Rounds numbers toward zero. This operation is element-wise for arrays and matrices.
 *
 * @param {number|array|matrix} x The input number, array, or matrix.
 * @returns {number|array|matrix} The rounded value(s).
 * @throws {Error} If no input argument is provided.
 *
 * @example
 * // Example 1: Round a single number toward zero
 * assert.strictEqual(fix(3.78), 3);
 *
 * // Example 2: Round an array of numbers toward zero
 * assert.deepStrictEqual(fix([4.51, -1.4]), [4, -1]);
 *
 * // Example 3: Round a matrix of numbers toward zero
 * assert.deepStrictEqual(fix([[4.51, -1.4], [3.78, 0.01]]), [[4, -1], [3, 0]]);
 */
export default function fix(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }

  const _fix = (a) => {
    const rounded = a < 0 ? Math.ceil(a) : Math.floor(a);
    return rounded === 0 ? 0 : rounded;
  };


  return arrayfun(x, _fix);
}
