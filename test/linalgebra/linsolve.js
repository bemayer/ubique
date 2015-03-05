var assert = require('assert');
var ubique = require('../../index.js');

suite('linalgebra',function () {
console.log('Testing linalgebra/linsolve ...');
test('linsolve', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];
var g = [[5,6,5],[7,8,-1],[5,6,3]];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];
var m = [4,-6,7];

assert.deepEqual(ubique.linsolve(l,m),[1,2,-0.9999999999999999]);
assert.deepEqual(ubique.linsolve(g,m),[-68.50000000000001,59.000000000000014,-1.5]);
assert.deepEqual(ubique.linsolve(l,ubique.eye(3)),[[0.846153846153846,0.3076923076923077,-0.07692307692307707],[-0.3846153846153846,-0.23076923076923078,0.30769230769230776],[-0.5384615384615384,0.07692307692307691,0.23076923076923078]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->