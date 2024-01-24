var score = 33;
score = 44;
score = "50";
var mehul = {
    name: "Mehul",
    id: 123,
};
mehul = {
    username: "Raju",
    id: 123,
};
// function getDbID(id: number | string) {
//   console.log(`Db id is ${id}`);
// }
getDbID(3);
getDbID("3");
function getDbID(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
// usage in arrays ->
var data = [1, 2, 3, "4", true];
var seatAllotment;
seatAllotment = 'aisle';
// seatAllotment = 'crew'; // here it will not allow
