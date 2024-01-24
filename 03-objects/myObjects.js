"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Mehul",
    email: "mehul@mehul.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "mehul", isPaid: true, email: "m@m.com" };
createUser(newUser);
// below is returning object ->
function createCourse() {
    return { name: "Raju", price: 1000 };
}
