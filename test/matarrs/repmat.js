var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/repmat ...');
test('repmat', function (done) {

var l = [[1,1,-1],[1,-2,3],[2,3,1]];

assert.deepEqual(ubique.repmat(10,3),[[10,10,10],[10,10,10],[10,10,10]]);
assert.deepEqual(ubique.repmat(0.5,3,2),[[0.5,0.5],[0.5,0.5],[0.5,0.5]]);
assert.deepEqual(ubique.repmat(0.5,1,4),[[0.5,0.5,0.5,0.5]]);
assert.deepEqual(ubique.repmat(true,4,1),[[true],[true],[true],[true]]);
assert.deepEqual(ubique.repmat([5,6,3],1,2),[[5,5],[6,6],[3,3]]);
assert.deepEqual(ubique.repmat(l,2),[[1,1,-1,1,1,-1],[1,-2,3,1,-2,3],[2,3,1,2,3,1],[1,1,-1,1,1,-1],[1,-2,3,1,-2,3],[2,3,1,2,3,1]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->