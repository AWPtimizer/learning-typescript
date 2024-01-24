function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

function getUpr(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpr("mehul");
signUpUser("Mehul", "mehul@mehul.com", false);
loginUser("mehul", "m@m.com");


function getValue(myVal: number): boolean | string {
  if(myVal > 5) {
    return true;
  }

  return "200 ok";
}

const heros = ["Batman", "Superman", "Joker"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
