/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/
// inline interface
let obj1: {
    id: string;
    productName: string;
    price: number;
    note: string;
};

obj1 = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

interface Product {
    id: string;
    productName: string;
    price: number;
    note: string;
}
let obj1_2: Product;
obj1_2 = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

/**
 * 2. Nested Object
 */
/*
  

/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/
interface Nested {
    id: string;
    name: string;
    address: Address[];
}
interface Address {
    street: string;
    city: string;
}

let nestedProduct: Nested;
nestedProduct = {
    id: 'U-1',
    name: 'Adi dodi',
    address: [
        {
            street: 'Jln. Setapak No.2',
            city: 'Jakarta',
        },
        {
            street: 'Jln. Lebar sekali no 10',
            city: 'Medan',
        },
    ],
};

/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/
interface CartItem {
    id: string;
    name: string;
    qty: number;
}

interface Keyboard {
    idCart: string;
    dateOrdered: Date;
    items: {
        [key: string]: CartItem;
    };
}

let keyboard: Keyboard;
keyboard = {
    idCart: 'C1',
    dateOrdered: new Date('2020-05-20'),
    items: {
        p1: {
            id: 'P-1',
            name: 'Mechanical Keyboard',
            qty: 2,
        },
        p2: {
            id: 'P-2',
            name: 'USB Hub',
            qty: 1,
        },
    },
};

/**
 * 5. Object Destructuring
 */

let fullName = {
    firstName: 'Sastra',
    lastName: 'Nababan',
};
interface Name {
    firstName: string;
    lastName: string;
}

let { firstName, lastName }: Name = fullName;
