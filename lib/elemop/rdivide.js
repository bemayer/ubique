/** @import { array, matrix } from '../types.js' */

import { isnumber } from '../datatype/isnumber.js';
import { isarray } from '../datatype/isarray.js';
import { ismatrix } from '../datatype/ismatrix.js';
import { nrows } from '../matarrs/nrows.js';
import { ncols } from '../matarrs/ncols.js';
import { getrow } from '../matarrs/getrow.js';
import { arrayfun } from '../datatype/arrayfun.js';

/**
 * @function rdivide
 * @summary Right array division X. / Y
 * @description Divides each element of X by the corresponding element of Y. Inputs X and Y must have the same size.
 *
 * @param {number|array|matrix} x The dividend, which can be a number, array, or matrix.
 * @param {number|array|matrix} y The divisor, which can be a number, array, or matrix.
 * @returns {number|array|matrix} The result of the division.
 * @throws {Error} If insufficient arguments are provided or if the input sizes do not match.
 *
 * @example
 * // Example 1: Divide two numbers
 * assert.strictEqual(rdivide(5, 6), 0.833333);
 *
 * // Example 2: Divide a matrix by a scalar
 * const a = [[5, 6, 5], [7, 8, -1]];
 * assert.deepStrictEqual(rdivide(a, 3), [[1.66667, 2, 1.66667], [2.33333, 2.66667, -0.333333]]);
 *
 * // Example 3: Divide a scalar by a vector
 * assert.deepStrictEqual(rdivide(3, [-1, -2, -3]), [-3, -1.5, -1]);
 *
 * // Example 4: Element-wise division of two vectors
 * assert.deepStrictEqual(rdivide([5, 6, 7], [-1, -2, -3]), [-5, -3, -2.33333]);
 *
 * // Example 5: Element-wise division of two matrices
 * const e = [[9, 5], [6, 1]];
 * const f = [[3, 2], [5, 2]];
 * assert.deepStrictEqual(rdivide(e, f), [[3, 2.5], [1.2, 0.5]]);
 *
 * // Example 6: Divide a matrix by a scalar
 * assert.deepStrictEqual(rdivide(e, 3), [[3, 1.66667], [2, 0.333333]]);
 */
export function rdivide(x, y) {
  if (x === undefined || y === undefined) {
    throw new Error('Not enough input arguments');
  }

  if (isnumber(x)) {
    return divideNumber(x, y);
  }

  if (isnumber(y)) {
    return divideByNumber(x, y);
  }

  if (isarray(x) && isarray(y)) {
    return elementWiseArrayDivision(x, y);
  }

  if (ismatrix(x) && ismatrix(y)) {
    return elementWiseMatrixDivision(x, y);
  }

  throw new Error('Incompatible types for rdivide');
}

/**
 * @function divideNumber
 * @description Divides a number by an array or matrix, or two numbers.
 * @param {number} x The dividend.
 * @param {number|array|matrix} y The divisor.
 * @returns {number|array|matrix} The result of the division.
 */
function divideNumber(x, y) {
  if (isnumber(y)) {
    return x / y;
  }

  if (isarray(y)) {
    return arrayfun(y, (val) => x / val);
  }

  if (ismatrix(y)) {
    return y.map((row) => arrayfun(row, (val) => x / val));
  }

  throw new Error('Incompatible types for divideNumber');
}

/**
 * @function divideByNumber
 * @description Divides an array or matrix by a number.
 * @param {array|matrix} x The dividend.
 * @param {number} y The divisor.
 * @returns {array|matrix} The result of the division.
 */
function divideByNumber(x, y) {
  if (isarray(x)) {
    return arrayfun(x, (val) => val / y);
  }

  if (ismatrix(x)) {
    return x.map((row) => arrayfun(row, (val) => val / y));
  }

  throw new Error('Incompatible types for divideByNumber');
}

/**
 * @function elementWiseArrayDivision
 * @description Performs element-wise division of two arrays.
 * @param {array} x The first array.
 * @param {array} y The second array.
 * @returns {array} The result of element-wise division.
 */
function elementWiseArrayDivision(x, y) {
  if (x.length !== y.length) {
    throw new Error('Array dimensions must agree');
  }
  return x.map((val, i) => val / y[i]);
}

/**
 * @function elementWiseMatrixDivision
 * @description Performs element-wise division of two matrices.
 * @param {matrix} x The first matrix.
 * @param {matrix} y The second matrix.
 * @returns {matrix} The result of element-wise division.
 */
function elementWiseMatrixDivision(x, y) {
  if (nrows(x) !== nrows(y) || ncols(x) !== ncols(y)) {
    throw new Error('Matrix dimensions must agree');
  }
  return x.map((xrow, i) => elementWiseArrayDivision(xrow, getrow(y, i)));
}
