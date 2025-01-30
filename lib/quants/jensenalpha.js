/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method jensenalpha
 * @summary Jensen alpha
 * @description  Ex-post alpha calculated with regression line. Free-risk is the avereage free-risk for the timeframe selected.
 *
 * @param  {array|matrix} x asset/portfolio values
 * @param  {array} y benchmark values
 * @param  {number} frisk  free-risk (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|matrix}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
 * var cat = ubique.cat;
 *
 * ubique.jensenalpha(x,y);
 * // 0.017609
 *
 * ubique.jensenalpha(cat(0,x,y),z);
 * // [ [ 0.020772 ], [ 0.006256 ] ]
 */
 $u.jensenalpha = function(x,y,frisk,dim) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  frisk = frisk == null ? 0 : frisk;
  dim = dim == null ? 0 : dim;

  var _ja = function(a,b,frisk) {
    var beta = $u.linearreg(a,b).beta;
    return $u.mean(a) - frisk - beta * ($u.mean(b) - frisk);
  }
  if ($u.isvector(x) && $u.isvector(y)) {
    return  _ja(x,y,frisk);
  } else
  if ($u.ismatrix(x) && $u.isvector(y)) {
    return $u.vectorfun(dim,x,_ja,y,frisk);
  } else {
    throw new Error('first input must be an array/matrix, the second one an array');
  }
}
}
