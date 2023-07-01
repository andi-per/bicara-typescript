// type inference(Implicit)
let ti = 'hello';

// type annotation(Explicit)
let ta: string = 'hello ts';

let a; // undefined

let b: boolean; // boolean
b = true;

let c: number; // number
c = 123;

let d: string; // string
d = 'hi';

let e: bigint; // big int (starting ES2020)
e = 100n;

let f: symbol; // symbol  (starting ES2015)
f = Symbol('Sym');

let g: () => void;
g = function () {
    // function
    return null;
};

let h: null; // null ( special primitive )
h = null;

let i: {}; //Record<string, unknown>; // Object Literal
i = {};

let j: []; // array
j = [];

class Product {
    // class
    //...
}
let k = new Product();

let z: any;
z = 1;
z = true;

function sum(a: number, b: number): void {
    // return a + b;
}

let arg1 = 4;
let arg2 = 5;
let result = sum(arg1, arg2);
console.log(result);

// union
let multi: string | number;
multi = 'a';
multi = 1;
// multi = true;

// type aliases
type CustomType = string | number;
let nama: CustomType;
nama = 'andi';
