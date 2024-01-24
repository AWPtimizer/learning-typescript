const superHeros: string[] = [];
// const superPowers: number[] = [];
// another way to do the above ->
const superPowers: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

const AllUsers: User[] = [];

const MLModels: number[][] = [
  [255, 255, 255],
  [0, 1, 1],
];


superHeros.push("Batman");
superPowers.push(3);

AllUsers.push({ name: "Raju", isActive: true });

console.log(AllUsers);
