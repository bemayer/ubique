var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/find ...');
test('find', function (done) {



assert.deepEqual(ubique.find([0.3,-0.4,0.5,0.9].map(function(a){return a > 0})),[0,2,3]);
assert.deepEqual(ubique.find([[true,true],[false,true]]),[0,2,3]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->