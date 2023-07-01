/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Object
 */

interface User {
    name: string;
    age: number;
}

type nextUser = {
    name: string;
    age: number;
};

let aUser: User;
aUser = { name: 'budi', age: 34 };

/**
 * Merge
 */

// type tidak bisa Merge
interface Album {
    song: string;
}
interface Album {
    albumID: number;
}

let lisa: Album;
lisa = {
    song: 'Money',
    albumID: 12,
};

/**
 * Intersection & Union
 */

type A = {
    id: number;
    propA: string;
};
type B = {
    id: number;
    propB: string;
};
// Intersection
type IntersectionAB = A & B;
let inter: IntersectionAB;
inter = {
    id: 1,
    propA: 'a',
    propB: 'b',
};
// Union
type UnionAB = A | B;
let uni: UnionAB;
uni = {
    id: 1,
    // propA:'',
    propB: '',
};

/**
 * Implements (bisa pakai type juga interface)
 */
interface Person extends Address {
    name: string;
    age: number;
    getName(id: number): string;
}
class People implements Person {
    name: string;
    age: number;
    street: string;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.street = '';
    }

    getName(id: number): string {
        return this.name;
    }
}
let andi = new People('andi', 20);
let tes = andi.getName(1);
console.log(tes);

/**
 * Extend (untuk interface)
 */

interface Address {
    street: string;
}
