const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
// identityThree(true);

// better way to define the 3rd function =>
function identityThreeBetter<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  quantity: number;
}
identityThreeBetter<Bottle>({
  brand: "tupper",
  quantity: 2,
});

// Generics in Arrays and Arrow functions =>
function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 7;
  return products[myIndex];
};

// generics classes =>
interface DB {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends DB>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction("3", {
  connection: "saf",
  username: "sad",
  password: "sfdaf",
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = []

  addToCart(product: T) {
    this.cart.push(product)
  }
}