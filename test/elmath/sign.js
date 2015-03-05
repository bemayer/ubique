var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/sign ...');
test('sign', function (done) {



assert.deepEqual(ubique.sign(-0.5),-1);
assert.deepEqual(ubique.sign([0.1,-0.5]),[1,-1]);
assert.deepEqual(ubique.sign([[5,-2],[-3,4]]),[[1,-1],[-1,1]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->