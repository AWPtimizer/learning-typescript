// class User {
//   email: string;
//   name: string;
//   city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const Mehul = new User("m@m.com", "raju");
// Mehul.city = "Udaipur";


// private and public class -> 
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city = name
//   }
// }

// const Mehul = new User("m@m.com", "raju");

// how we use these classes in production ->

class User {
  constructor(
    public email: string, 
    public name: string,
    // private userId: string,
    ) {
  }
}

const Mehul = new User("m@m.com", "raju");
