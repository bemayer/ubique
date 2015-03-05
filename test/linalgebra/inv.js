var assert = require('assert');
var ubique = require('../../index.js');

suite('linalgebra',function () {
console.log('Testing linalgebra/inv ...');
test('inv', function (done) {

var f = [[3, 2], [5, 2]]; // [[-0.5, 0.5], [1.25, -0.75]]
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

assert.deepEqual(ubique.inv(f),[[-0.5,0.5],[1.25,-0.7499999999999999]]);
assert.deepEqual(ubique.inv(l),[[0.846153846153846,0.3076923076923077,-0.07692307692307707],[-0.3846153846153846,-0.23076923076923078,0.30769230769230776],[-0.5384615384615384,0.07692307692307691,0.23076923076923078]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->