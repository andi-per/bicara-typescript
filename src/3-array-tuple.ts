/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

// type inference
let arr1 = [1, 2, 3, 4];

// square brackets
let arr1_1: number[];
arr1_1 = [1, 2, 3, 4];

// generic array
let arr1_2: Array<number>;
arr1_2 = [1, 2, 3, 4];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

// generic
let arr2: Array<string>;
arr2 = ['a', 'b', 'c'];

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

let arr3: (string | number)[];
arr3 = ['hello', 1, 2, 3];

// generic
let arr3_2: Array<string | number>;
arr3_2 = ['hello', 1, 2, 3];

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */
let tuple4: [string, number, number, number];
tuple4 = ['cordinat', 2, 4, 7];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

// inline interface, square bracket
let list5: { color: string; index: number }[];
list5 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

// inline interface, generic array
let list5_2: Array<{ color: string; index: number }>;
list5_2 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];
/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */
// square bracket
let list6: number[][];
list6 = [
    [1, 2],
    [3, 5],
];

// generic array
let list6_2: Array<Array<number>>;
list6_2 = [
    [1, 2],
    [3, 5],
];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */

let [a, b, c, d]: [string, number, number, string] = ['ahay', 2, 3, 'four'];
