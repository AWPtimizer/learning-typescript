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

// class User {
//   constructor(
//     public email: string,
//     public name: string,
//     // private userId: string,
//     ) {
//   }
// }

// const Mehul = new User("m@m.com", "raju");


// getters and setters ->
// class User {

//   private _courseCount = 1;

//   readonly city: string = "Udaipur";

//   constructor(
//     public email: string,
//     public name: string
//   ) // private userId: string,
//   {
//     this.deleteToken()
//   }

//   // private methods ->
//   private deleteToken() {
//     console.log("Token Deleted");
//   }

//   // get and set ->

//   get getAppleEmail(): string {
//     return `apple.${this.email}`;
//   }

//   get courseCount(): number {
//     return this._courseCount;
//   }

//   set courseCount(courseNumber) {
//     if(courseNumber <= 1) {
//       throw new Error("Course count should be more than 1");
//     }
//     this._courseCount = courseNumber
//   }
// }

// const Mehul = new User("m@m.com", "raju");




// Protected class->

class User {

  protected _courseCount = 1;

  readonly city: string = "Udaipur";

  constructor(
    public email: string,
    public name: string
  ) // private userId: string,
  {
    this.deleteToken()
  }

  // private methods ->
  private deleteToken() {
    console.log("Token Deleted");
  }

  // get and set ->

  get getAppleEmail(): string {
    return `apple.${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNumber) {
    if(courseNumber <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNumber
  }
}

// below is inheritance
class SubUser extends User {
  isFamily: boolean = true;

  changeCourseCount() {
    this._courseCount = 4
  }
}

const Mehul = new User("m@m.com", "raju");
