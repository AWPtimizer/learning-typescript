abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}

  abstract getSepia(): void    // this is a abstract method
  getReelTime(): number {
    //some complex calc.
    return 8;
  }

}

// you cannot create a object of an abstract class but you can make a object of its inheriting class
// which here is Instagram class

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstPhoto: number,
    ) {
    super(cameraMode, filter)
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const ml = new Instagram("test", "test", 3);