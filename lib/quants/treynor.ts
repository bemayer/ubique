/**
 * Risk metrics
 */
module.exports = function($u) {
/**
 * @method treynor
 * @summary Treynor Ratio
 * @description Compute the Treynor ratio for an array X of values (daily, weekly, etc) and
 * a free-risk rate. Annual free-risk must be divided to match the right timeframe.
 * 
 * @param  {array} x array of X values
 * @param  {array} y array of Y values
 * @param  {number} frisk  free-risk rate (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
 * var cat = ubique.cat;
 * 
 * ubique.treynor(x,z,0.01/12);
 * // -0.095687
 *
 * ubique.treynor(cat(0,x,y),z,0.01/12);
 * // [ [ -0.095687 ], [ 0.029863 ] ]
 */
  $u.treynor = function(x,y,frisk,dim) {
    if (arguments.length < 2) {
      throw new Error('not enough input arguments');
    }
    frisk = frisk == null ? 0 : frisk;
    dim = dim == null ? 0 : dim;
    var _treynor = function(a,b,frisk) {
      var beta = $u.linearreg(a,b).beta;
      return ($u.mean(a) - frisk) / beta;
    };
    if ($u.isnumber(x)) {
      return NaN;
    }
    return $u.vectorfun(dim,x,_treynor,y,frisk);

  };
};