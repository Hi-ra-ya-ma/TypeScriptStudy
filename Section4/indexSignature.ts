type User = {
  name: string;
  [k: string]: any;
};

const UserA: User = {
  name: "taro",
  age: 26,
};

const x = UserA.name;
const y = UserA.age;

const UserB: User = {
  name: "taro",
  hobby: "game",
};
