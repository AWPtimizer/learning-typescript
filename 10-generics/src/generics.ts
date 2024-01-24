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
