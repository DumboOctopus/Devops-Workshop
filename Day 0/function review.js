let x = () => {
  console.log("hi");
  console.log("hello");
}

x();
console.log("done running x");
x();

let welcomeMsg = (name) => {
  console.log("Welcome " + name);
}

welcomeMsg("Richard");
welcomeMsg("Paula");

let areaOfRect = (base, height) => {
   let area = base * height;
   console.log(area);
}

areaOfRect(3, 10);

let trapezoid = (sideA, sideB, height) =>{
  let area = height * (sideA + sideB) / 2.0;
  return area;
}
// lets say we had 3 trapezoids
//all of which have sideA = 12, sideB = 5
// and height = 1.
//we can calculate total area of all of
//them by doing 3 * function call
let totalArea = 3 * trapezoid(12, 5, 1);
console.log(totalArea);


let welcomeThenRun = (name, func) => {
  console.log("Welcome " + name);
  func();
}
let sayHi = () => console.log("hi");
let sayAloha = () => console.log("aloha");
welcomeThenRun("Paula", sayAloha);
