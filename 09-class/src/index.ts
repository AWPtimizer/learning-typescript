class User {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const Mehul = new User("m@m.com", "raju");
Mehul.city = "Udaipur";
