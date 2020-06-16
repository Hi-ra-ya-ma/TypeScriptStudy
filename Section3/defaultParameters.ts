function getFormattedValue(value: number, unit = "pt") {
  return `${value.toFixed(1)} ${unit.toUpperCase()}`;
}
console.log(getFormattedValue(100));
console.log(getFormattedValue(100, "kg"));
// console.log(getFormattedValue(100, 0)); // NG

function getFormattedValue2(value: number, unit: string | null = "pt") {
  const _value = value.toFixed(1);
  if (unit === null) return `${_value}`;
  return `${value.toFixed(1)} ${unit.toUpperCase()}`;
}
