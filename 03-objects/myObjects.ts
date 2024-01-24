const User = {
  name: "Mehul",
  email: "mehul@mehul.com",
  isActive: true,
};


function createUser({name: string, isPaid: boolean}) {}

let newUser = {name: "mehul", isPaid: true, email: "m@m.com"}

createUser(newUser)

// below is returning object ->
function createCourse (): {name: string, price: number} {
  return {name: "Raju", price: 1000}
}

export {}