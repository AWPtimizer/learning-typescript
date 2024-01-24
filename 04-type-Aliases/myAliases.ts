// type User = {
//   name: string;
//   age: number;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return {name: "", age: 2, email: "", isActive: true}
// }

// createUser({name: "", age: 2, email: "", isActive: true})

// readonly ->
type User = {
  readonly _id: string; // by putting "readonly"  in front of variable name no one can change that variable value
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number;
};

let myUser: User = {
  _id: "1234",
  name: "m",
  email: "m@m.com",
  isActive: false,
};

myUser.email = "m@gmail.com";
// myUser._id = "14241"; // u cannot change it



type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber & cardDate & {
    cvv: number;
  };

export {};
