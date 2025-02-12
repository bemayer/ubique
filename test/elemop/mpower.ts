// @ts-expect-error TS(2307): Cannot find module 'assert' or its corresponding t... Remove this comment to see the full error message
import assert from "assert";
import mpower from "../../lib/elemop/mpower.js";

// Example 1: Raise a matrix to the power of 3
assert.deepStrictEqual(mpower([[1, 1, -1], [1, -2, 3], [2, 3, 1]], 3), [
  [-2, 11, -11],
  [11, -35, 33],
  [22, 33, -2],
]);
