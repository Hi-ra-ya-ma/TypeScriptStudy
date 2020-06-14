let flag: boolean = false; // boolean型、true, false

let decimal: number = 256; // 10進数
let hex: number = 0xfff; // 16進数
let binary: number = 0b0000; // 2進数（ES6で導入）
let octal: number = 0o123; // 8進数（ES6で導入）

let color: string = "white";
color = "black";
let myColor: string = `my color is ${color}`; // テンプレート構文（ES6で導入）

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // NG

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // NG

// x[3] = "world"; // NG
// console.log(x[5].toString()); // NG
// x[0] = true; // NG
