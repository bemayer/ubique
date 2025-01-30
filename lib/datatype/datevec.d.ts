import { array, matrix } from '../types.ts';

/**
 * @function datevec
 * @summary Convert date and time to a array of components
 * @description Converts a given date and time to an array of components such as year, month, day, hour, minute, second, and millisecond.
 * The function supports both date strings and Unix timestamps as input. Input is restricted to either a single value or a array (1D array).
 *
 * @param d The date input, which can be a string, Unix timestamp, or a array of such values.
 * @param fmt The format string to parse the date if the input is a date string.
 * @returns {array | matrix} An array or a array of arrays containing the date components.
 *
 * @example
 * // Example 1: Convert a date string to an array
 * assert.deepStrictEqual(datevec('2015-01-01 03:34:05', 'YYYY-MM-DD HH:mm:ss'), [2015, 1, 1, 3, 34, 5, 0]);
 *
 * // Example 2: Convert an array of date strings to an array of arrays
 * assert.deepStrictEqual(datevec(['31-12-2014', '31-01-2015'], 'DD-MM-YYYY'), [[2014, 12, 31, 0, 0, 0, 0], [2015, 1, 31, 0, 0, 0, 0]]);
 *
 * // Example 3: Convert a Unix timestamp to an array
 * assert.deepStrictEqual(datevec(1428236430), [2015, 4, 5, 12, 20, 30, 0]);
 *
 * // Example 4: Convert an array of Unix timestamps to an array of arrays
 * assert.deepStrictEqual(datevec([1609459200, 1612137600]), [[2021, 1, 1, 0, 0, 0, 0], [2021, 2, 1, 0, 0, 0, 0]]);
 *
 * // Example 5: Convert a Unix timestamp with milliseconds to an array
 * assert.deepStrictEqual(datevec(1428236430579), [2015, 4, 5, 12, 20, 30, 579]);
 *
 * // Example 6: Convert a date string with time zone to an array
 * assert.deepStrictEqual(datevec('2023-08-25T14:45:00+02:00', 'YYYY-MM-DDTHH:mm:ssZ'), [2023, 8, 25, 12, 45, 0, 0]);
 *
 * // Example 7: Convert a Unix timestamp to an array with milliseconds
 * assert.deepStrictEqual(datevec(1428236430579), [2015, 4, 5, 12, 20, 30, 579]);
 *
 * // Example 8: Convert a date string in UTC format to an array
 * assert.deepStrictEqual(datevec('2023-08-25T14:45:00Z', 'YYYY-MM-DDTHH:mm:ssZ'), [2023, 8, 25, 14, 45, 0, 0]);
 *
 * // Example 9: Convert an array of mixed Unix timestamps and date strings to an array of arrays
 * assert.deepStrictEqual(datevec([1428236430, '2015-01-01 03:34:05'], 'YYYY-MM-DD HH:mm:ss'), [[2015, 4, 5, 12, 20, 30, 0], [2015, 1, 1, 3, 34, 5, 0]]);
 */
export function datevec(d: string | number | array<string | number>, fmt?: string): array | matrix;
