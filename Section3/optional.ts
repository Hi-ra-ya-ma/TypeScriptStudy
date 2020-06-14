function greet1(name: string) {
  return `Hello ${name}`;
}
// console.log(greet1()); //NG
console.log(greet1("Taro"));

function greet2(name?: string) {
  return `Hello ${name.toUpperCase()}`;
}
console.log(greet2()); // NG(Runtime Error)
console.log(greet2("Taro"));

function greet3(name?: string) {
  if (name === undefined) return "Hello";
  return `Hello ${name.toUpperCase()}`;
}
console.log(greet3());
console.log(greet3("Taro"));
