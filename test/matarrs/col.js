var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/col ...');
test('col', function (done) {



assert.deepEqual(ubique.col([[5,6,5],[7,8,-1]],0),[5,7]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->