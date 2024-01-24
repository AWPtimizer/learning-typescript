let score: number | string = 33;

score = 44;
score = "50";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let mehul: User | Admin = {
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

function getDbID(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
}

// usage in arrays ->
const data: (string | number | boolean)[] = [1, 2, 3, "4", true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = 'aisle';
// seatAllotment = 'crew'; // here it will not allow