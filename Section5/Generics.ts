interface Box<T> {
  value: T;
}
// const box0: Box = { value: "test" }; // NG
const box1: Box<string> = { value: "test" };
// const box2: Box<number> = { value: "test" }; // NG

interface Box2<T = string> {
  value: T;
}
const box3: Box2 = { value: "test" };
const box4: Box2<string> = { value: "test" };
// const box5: Box2<number> = { value: "test" }; // NG
