var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/eye ...');
test('eye', function (done) {



assert.deepEqual(ubique.eye(),0);
assert.deepEqual(ubique.eye(0),[]);
assert.deepEqual(ubique.eye(1),[[1]]);
assert.deepEqual(ubique.eye(2),[[1,0],[0,1]]);
assert.deepEqual(ubique.eye([2,1]),[[1],[0]]);
assert.deepEqual(ubique.eye(1,2),[[1,0]]);
assert.deepEqual(ubique.eye(2,3),[[1,0,0],[0,1,0]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->