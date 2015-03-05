var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/ceil ...');
test('ceil', function (done) {



assert.deepEqual(ubique.ceil(Math.PI,12),3.14159265359);
assert.deepEqual(ubique.ceil(3.78),4);
assert.deepEqual(ubique.ceil([4.51,-1.4]),[5,-1]);
assert.deepEqual(ubique.ceil([[4.5134,-1.4345],[3.7809,0.0134]],2),[[4.52,-1.43],[3.79,0.02]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->