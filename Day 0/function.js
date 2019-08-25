let ourFunc = () => {
  console.log("You are in");
  console.log("ourFunc! xD");
}

ourFunc();
ourFunc();
//printWelcomeMsg("asdf"); must declare func before using them
let printWelcomeMsg = (name) => {
  console.log("Welcome " + name);
}
let firstName = "Neil";
printWelcomeMsg(firstName);

let volumeOfCube = (sideLength) => {
  let volume = sideLength*sideLength*sideLength;
  return volume; //tells js this is the output of the function
}

let volume = volumeOfCube(3);
console.log(volume);
console.log(volumeOfCube(3));
let volumePlus10 = volumeOfCube(3) + 10;
console.log(volumePlus10);

let areaOfRect = (sideA, sideB) => {
  return sideA*sideB;
}
let aor = areaOfRect;
console.log(aor(2,7));

console.log(areaOfRect(2, 7));

let printWelcomeThenRunFunc = (name, func) => {
  console.log("Welcome " + name);
  func();
}

//let arg = () => console.log("Arg was called");
let arg2 = () => console.log("Activate Toaster");;
//printWelcomeThenRunFunc("Neil", arg);
printWelcomeThenRunFunc("Richard", arg2);
console.log("Got here");

//just create a function to calculate the
//volume of your favorite shape (trapzoid)
//create a function which gives you a welcome message
//in a foriegn language. (console.log)
