interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleID?: string;
  // startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string,
}

const mehul: Admin = {
  dbId: 2212,
  role: "admin",
  email: "m@m.com",
  userId: 2211,
  githubToken: "github",
  startTrial: () => {
    return "rajuDon";
  },
  getCoupon: (name: "raju", off: 10) => {
    return 10;
  },
};

interface Admin extends User {
  role: "admin" | "tl" | "intern"
}