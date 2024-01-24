// interface TakePhoto {
//   cameraMode: string;
//   filter: string;
//   burstMode: number;
// }

// class Instagram implements TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burstMode: number
//   ) {}
// }


// // class Youtube implements TakePhoto {
// //   constructor(
// //     public cameraMode: string,
// //     public filter: string,
// //     public burstMode: number,
// //     public short: string,
// //   ) {}
// // }

// // Here if you are implementing a interface in a class then u have to use the properties 
// // of the interface in the class which is bear minimum, you can add more properties 
// // after using the properties of interface (which you can see in the above Instagram class)


// interface Story {
//   createStory(): void
// }

// // how to implement multiple interfaces at a time ->
// class Youtube implements TakePhoto, Story {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burstMode: number,
//     public short: string,
//   ) {}

//   createStory(): void {
//     console.log("Story was Created");
//   }
// }