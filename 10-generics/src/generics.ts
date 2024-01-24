const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type,>(val: Type): Type {
  return val;
}
// identityThree(true);

// better way to define the 3rd function =>
function identityThreeBetter<T,>(val: T): T {
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

function getSearchProducts<T,>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T,>(products: T[]): T=> {
  const myIndex = 7;
  return products[myIndex];
}