type Tail = {};
type Wing = {};

type Dog = {
  tail: Tail;
  bark: () => void;
};

type Bird = {
  tail: Tail;
  wing: Wing;
  fly: () => void;
};

type Kimera = Dog & Bird;

function returnNever(): never {
  throw new Error();
}
let unexistenceType: string & number & boolean = returnNever();
// let problematicNumber: string & number = "0"; // NG

let val: boolean | number | string; // 通常の定義
val = false;
val = 1;
val = "2";

let numberOrStrings: (number | string)[]; // 要素にunion typeを指定した配列の定義
numberOrStrings = [0, "1"];
// numberOrStrings = [0, "1", false]; // NG

let nullableString: string | null;
nullableString = null;
nullableString = "not Null";

let nullableStrings: (string | null)[] = [];
nullableStrings.push("1");
nullableStrings.push(null);
// nullableStrings.push(false); // NG

let myName: "Taro";
myName = "Taro";
// myName = "Jiro"; // NG
myName.toLowerCase();

let users: "Taro" | "Jiro" | "Hanako";
users = "Hanako";

let zero: 0;
zero = 0;
// zero = 1; // NG
zero.toFixed(1);

let bit: 8 | 16 | 32 | 64;
bit = 8;
// bit 12 // NG
