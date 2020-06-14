function getFormattedValue1(value) {
  return `${value.toFixed(1)} pt`;
}
console.log(getFormattedValue1(0.1));
console.log(getFormattedValue1(0));
console.log(getFormattedValue1(null)); // NG(Runtime Error)

function getFormattedValue2(value: number | null) {
  return `${value.toFixed(1)} pt`;
}
console.log(getFormattedValue2(0.1));
console.log(getFormattedValue2(0));
console.log(getFormattedValue2(null)); // NG(Compile Error)

function getFormattedValue3(value: number | null) {
  if (value === null) return "--pt";
  return `${value.toFixed(1)} pt`;
}
console.log(getFormattedValue2(0.1));
console.log(getFormattedValue2(0));
console.log(getFormattedValue2(null));
