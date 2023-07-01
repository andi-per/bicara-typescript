/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x: number, y: number, z?: number): number {
    return x + y;
}
console.log(add(1, 2, 6));

// function expression
const addEx = function (x: number, y: number): number {
    return x + y;
};

// arrow function
const addArrow = (x: number, y: number): number => x + y;

// function with no return value
// const hello = (name) => console.log("hello " + name)

type Greeter = (message: string) => void;
// function with callback
function request(url: string, cb: Greeter) {
    cb(url);
}

let fn = (str: string): void => {
    console.log(str);
};

request('http://typescriptlang.org', fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

type Contact = {
    firstName: string;
    lastName: string;
    gender?: string;
    language?: string;
};

function submitContact(firstName: string, lastName: string, language = 'english', gender?: string): Contact {
    return {
        firstName,
        lastName,
        language,
        ...(gender && { gender }),
    };
}
console.log(submitContact('valen', 'mayer', 'bahasa', 'male'));

/********** 3. Rest Parameter  ***********/

function fruitsCollection(item: string, ...restItems: (string | number)[]) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 1);
console.log(fruits);

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/

// union
function CT(param: string | number): string | number {
    return param;
}
console.log(CT(100));

// generic
// type varibel -> deteks type data dari caller
function CT_generic<T>(param: T): T {
    return param;
}

CT_generic<string>('babe');

// overloading
function CT_Overload(param: string): string;
function CT_Overload(param: number): number;
function CT_Overload(param: any): any {
    return param;
}

CT_Overload('saya');
CT_Overload(1);
// CT_Overload(true)
