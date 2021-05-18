arrayA = [
  [1, 2, 3],
  [`a`, `b`, `c`],
  [2, `d`, `c`],
];

const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

console.log(arrayA.reduce(reducer));
