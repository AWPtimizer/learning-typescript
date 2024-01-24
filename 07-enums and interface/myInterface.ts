interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleID?: string;
  // startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

const mehul: User = {
  dbId: 2212,
  email: "m@m.com",
  userId: 2211,
  startTrial: () => {
    return "rajuDon";
  },
  getCoupon: (name: "raju", off: 10) => {
    return 10;
  },
};

mehul.email = "raju.com";
