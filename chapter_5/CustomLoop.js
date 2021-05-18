let i = 0;
const condition = (a) => {
  return a < 5;
};
const step = (a) => {
  return ++a;
};
const doSome = (a) => {
  console.log(`doing ` + a);
};

function loop(defaultValue, conditionFunc, stepFunc, doFunc) {
  while (conditionFunc(defaultValue)) {
    doFunc(defaultValue);
    defaultValue = stepFunc(defaultValue);
    console.log(defaultValue);
  }
}

loop(i, condition, step, doSome);
