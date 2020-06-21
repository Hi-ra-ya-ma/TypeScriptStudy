type State = {
  readonly id: number;
  name: string;
};

const state: State = {
  id: 1,
  name: "Taro",
};

state.name = "Hanako";
// state.id = 2; // NG

type State2 = {
  id: number;
  name: string;
};

const state2: Readonly<State2> = {
  id: 1,
  name: "Taro",
};

// state2.name = "Hanako"; // NG
// state2.id = 2; // NG
