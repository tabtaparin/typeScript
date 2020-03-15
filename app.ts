import * as gen from "./generate_number";

const nLength = 1000000; // set length number

console.time("Generate"); // Start Timer
var a: string = gen.generate(nLength); // Number A
var b: string = gen.generate(nLength); // Number B
//console.log(a);
//console.log(b);
console.timeEnd("Generate");
console.time("Multiply");
var c = gen.addStr(a, b);
//console.log("C : " + c);
console.timeEnd("Multiply");