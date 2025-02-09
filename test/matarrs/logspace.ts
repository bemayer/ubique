import assert from 'assert';
import logspace from '../../lib/matarrs/logspace.js';

// Example 1: Logarithmically spaced points from 10^0 to 10^1 with 5 points
assert.deepStrictEqual(
  logspace(0, 1, 5),
  [1, 1.7782794100389228, 3.1622776601683795, 5.623413251903491, 10]
);

// Example 2: Default 10 points from 10^0 to 10^2
assert.deepStrictEqual(
  logspace(0, 2),
  [
    1, 1.6681005372000588, 2.7825594022071245, 4.641588833612778,
    7.742636826811269, 12.91549665014884, 21.544346900318835, 35.93813663804626,
    59.94842503189409, 100,
  ]
);

// Example 3: Single point (start and end are the same)
assert.deepStrictEqual(logspace(1, 1, 1), [10]);

// Example 4: Logarithmically spaced points from 10^-1 to 10^1
assert.deepStrictEqual(logspace(-1, 1, 3), [0.1, 1, 10]);

// Example 5: Invalid input (fewer than 2 arguments)
assert.throws(() => logspace(0), /Not enough input arguments/);

// Example 6: Logarithmically spaced points from 10^3 to 10^4 with 4 points
assert.deepStrictEqual(
  logspace(3, 4, 4),
  [1000, 2154.4346900318847, 4641.588833612777, 10000]
);
