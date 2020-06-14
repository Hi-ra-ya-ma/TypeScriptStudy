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
