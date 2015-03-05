var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/log ...');
test('log', function (done) {

var a = [[5,6,5],[7,8,2]];
var c = [5,6,3];

assert.deepEqual(ubique.log(6),1.791759469228055);
assert.deepEqual(ubique.log(c),[1.6094379124341003,1.791759469228055,1.0986122886681098]);
assert.deepEqual(ubique.log([[5,6,5],[7,8,2]]),[[1.6094379124341003,1.791759469228055,1.6094379124341003],[1.9459101490553132,2.0794415416798357,0.6931471805599453]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->