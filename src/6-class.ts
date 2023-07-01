/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance
// Object literal vs Object Instance

abstract class Root {
    abstract done: boolean;
}

class User extends Root {
    // properties
    id: number;
    firstName: string;
    lastName: string;
    protected save: boolean;
    private token: string;
    static MAX_LOGIN_ATTEMPT = 2;
    private retryLogin = 0;
    done: boolean;

    // method
    login(username: string, password: string) {
        this.retryLogin += 1;
        if (username == 'admin' && password == 'admin') return true;

        if (this.retryLogin >= User.MAX_LOGIN_ATTEMPT) return 'max login attempted';
        return false;
    }
    register() {}

    constructor(id: number, firstName: string, lastName: string) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.save = false;
        this.token = '';
        this.done = false;
    }
}

const myUser = new User(1, 'Andi', 'Bangetzz');
User.MAX_LOGIN_ATTEMPT = 3;
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('admin', 'admin'));

class Enhanceduser extends User {
    location: string;

    constructor(location: string, id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}

let myNewUser = new Enhanceduser('medan', 2, 'ucok', 'cool');
