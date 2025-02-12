/**
 * Risk metrics
 */
// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = function ($u: any) {
  /**
   * @method painindex
   * @summary Pain Index
   * @description Mean value of the drawdowns, similar to Ulcer Index.
   *
   * @param  {array|matrix} x asset/portfolio returns
   * @param  {string} mode drawdown calculation. 'return','geometric' (def: 'return')
   * @param  {number} dim dimension 0: row, 1: column (def: 0)
   * @return {number|array}
   *
   * @example
   * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
   * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
   * var cat = ubique.cat;
   *
   * ubique.painindex(x);
   * // 0.0023
   *
   * ubique.painindex(cat(0,x,y));
   * // [ [ 0.0023 ], [ 0.042955 ] ]
   */
  $u.painindex = function (x: any, mode: any, dim: any) {
    if (arguments.length === 0) {
      throw new Error("not enough input arguments");
    }
    mode = mode == null ? "return" : mode;
    dim = dim == null ? 0 : dim;

    var _painindex = function (a: any, mode: any) {
      // @ts-expect-error TS(2304): Cannot find name 'dd'.
      dd = $u.drawdown(a, mode).dd,
        // @ts-expect-error TS(2304): Cannot find name 'n'.
        n = a.length;
      // @ts-expect-error TS(2304): Cannot find name 'dd'.
      return $u.sum(dd) / n;
    };
    if ($u.isnumber(x)) {
      return NaN;
    }
    return $u.vectorfun(dim, x, _painindex, mode);
  };
};
