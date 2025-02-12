import dayjs from "https://esm.sh/dayjs";
import utc from "https://esm.sh/dayjs/plugin/utc";
import arrayfun from "./arrayfun.ts";
import { numarraymatrix } from "../types.d.ts";

dayjs.extend(utc);

/**
 * @function datestr
 * @summary Convert Unix timestamp to string format
 * @description Converts a Unix timestamp (in seconds) to a formatted date string using `dayjs`.
 * Can handle individual numbers, arrays, and matrices of Unix timestamps.
 *
 * @param d ISO Unix timestamp(s) to convert.
 * @param [fmt='YYYY-MM-DD'] The format string to use for conversion.
 * @returns The formatted date string(s).
 * @throws {Error} If the input is not valid.
 *
 * @example
 * // Example 1: Convert a single Unix timestamp to a date string
 * assert.strictEqual(datestr(1419984000), '2014-12-31');
 *
 * // Example 2: Convert an array of Unix timestamps to date strings with custom format
 * assert.deepStrictEqual(datestr([1419984000, 1422662400], 'DD-MMM-YY'), ['31-Dec-14', '31-Jan-15']);
 *
 * // Example 3: Convert a matrix of Unix timestamps to formatted date strings with time
 * assert.deepStrictEqual(datestr([[1419984000, 1422662400], [1423958400, 1425168000]], 'YY-MM-DD hh:mm:ss'),
 *   [['14-12-31 12:00:00', '15-01-31 12:00:00'], ['15-02-15 12:00:00', '15-03-01 12:00:00']]);
 *
 * // Example 4: Convert a timestamp to date string using default format
 * assert.strictEqual(datestr(1609459200), '2021-01-01');
 *
 * // Example 5: Convert an array with a single Unix timestamp to date string
 * assert.deepStrictEqual(datestr([1609459200]), ['2021-01-01']);
 */
export default function datestr(
  d: numarraymatrix,
  fmt: string = "YYYY-MM-DD",
): numarraymatrix<string> {
  if (!d) {
    throw new Error("Not enough input arguments");
  }

  return arrayfun(d, _datestr, fmt);
}

function _datestr(a: any, format: string): string {
  return dayjs.unix(a).utc().format(format);
}
