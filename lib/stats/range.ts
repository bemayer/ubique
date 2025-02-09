/**
 * Descriptive Statistic
 */
// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = function ($u: any) {
  /**
   * @method range
   * @summary Range of values
   * @description Range of values
   *
   * @param  {array|matrix} x array of values
   * @param  {number} dim dimension 0: row, 1: column (def: 0)
   * @return {number|array}
   *
   * @example
   * var a = [[5,6,5],[7,8,-1]];
   * var c = [5,6,3];
   *
   * ubique.range([5,6,3]);
   * // 3
   *
   * ubique.range([[5,6,5],[7,8,-1]]);
   * // [ [ 1 ], [ 9 ] ]
   *
   * ubique.range([[5,6,5],[7,8,-1]],1);
   * // [ [ 2, 2, 6 ] ]
   */
  $u.range = function (x: any, dim: any) {
    if (arguments.length === 0) {
      throw new Error("not enough input arguments");
    }
    dim = dim == null ? 0 : dim;

    // @ts-expect-error TS(7006): Parameter 'a' implicitly has an 'any' type.
    var _range = function (a) {
      return $u.max(a) - $u.min(a);
    };
    if ($u.isnumber(x)) {
      return 0;
    }
    return $u.vectorfun(dim, x, _range);
  };
};
