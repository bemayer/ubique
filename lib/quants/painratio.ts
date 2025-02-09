/**
 * Risk metrics
 */
// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = function ($u: any) {
  /**
   * @method painratio
   * @summary Pain Ratio
   * @description A risk-adjusted measure with free risk and Pain index.
   *
   * Pain Ratio = (Portfolio Return - RiskFree) / Pain Index
   *
   * @param  {array|matrix} x asset/portfolio returns
   * @param  {number} frisk annual free-risk rate (def: 0)
   * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
   * @param  {string} mode drawdown calculation. 'return','geometric' (def: 'return')
   * @param  {number} dim dimension 0: row, 1: column (def: 0)
   * @return {number|arrray}
   *
   * @example
   * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
   * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
   * var cat = ubique.cat;
   *
   * ubique.painratio(x,0,12);
   * // 101.044955
   *
   * ubique.painratio(cat(0,x,y),0,12);
   * // [ [ 101.044955 ], [ 3.235687 ] ]
   */
  $u.painratio = function (x: any, frisk: any, t: any, mode: any, dim: any) {
    if (arguments.length === 0) {
      throw new Error("not enough input arguments");
    }
    frisk = frisk == null ? 0 : frisk;
    t = t == null ? 252 : t;
    mode = mode == null ? "geometric" : mode;
    dim = dim == null ? 0 : dim;

    var _painratio = function (a: any, frisk: any, t: any, mode: any) {
      var annret = $u.annreturn(a, t);
      var dd = $u.sqrt($u.sum($u.power($u.cdrawdown(a), 2)));
      return (annret - frisk) / $u.painindex(a, mode);
    };
    if ($u.isnumber(x)) {
      throw new Error("input arguments must be an array or matrix");
    }
    return $u.vectorfun(dim, x, _painratio, frisk, t, mode);
  };
};
