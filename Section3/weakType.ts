type User = {
  age?: number;
  name?: string;
};
function registerUser(user: User) {}

// 型にはないプロパティを持つオブジェクト
const maybeUser = {
  age: 26,
  name: "Taro",
  gender: "male",
};

// 型と一致するプロパティを1つも持たないオブジェクト
const notUser = {
  gender: "male",
  graduate: "Tokyo",
};

registerUser(maybeUser);
// registerUser(notUser); // NG

registerUser({});
// registerUser(); // NG

registerUser({
  age: 26,
  name: "Taro",
  // gender: "male", // NG
});

registerUser({
  ...{
    age: 26,
    name: "Taro",
    gender: "male", // OK
  },
});
