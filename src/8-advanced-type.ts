/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 */

// use case : transform existing interface to new interface without modify existing interface

interface User {
    id: number;
    name: string;
    age?: number;
    createdAt: Date;
}

// function CreateUser(data: User) {}
function CreateUser(data: Omit<User, 'id' | 'name'>) {}

CreateUser({
    // id: 1,
    // name: 'doe',
    age: 20,
    createdAt: new Date(),
});

/**
 * Record  => Record<K,T>
 */
type Response = Record<string, string | number>;
let message: Response;
message = {
    id: 1,
    name: 'abu',
    addres: '',
    age: 10,
};

/*
usecase : object of object
  {
    propA: {id,name,age},
    propB: {id,name,age}
  }
*/

type Users = Record<string, User>;
const allUsers: Users = {
    propA: { id: 1, name: 'john', age: 5, createdAt: new Date('11-11-2011') },
    propB: { id: 2, name: 'siti', age: 5, createdAt: new Date('11-11-2011') },
};

/**
 * Extract => Extract<T, U>
 * Exclude => Exclude<T, U>
 */

interface Post {
    id: string;
    title: string;
    createdAt: Date;
}

type ExtType = Extract<keyof User, keyof Post>;
type ExctType = Exclude<keyof User, keyof Post>;
type MyNewType = Record<string, ExtType>;
