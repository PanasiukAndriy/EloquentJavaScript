const myArray = [1, 2, 3, 7, 4, 5, 6];

function customEvery(arrayIn, condition) {
  let result = true;
  for (const item of arrayIn) {
    if (!condition(item)) {
      return false;
    }
  }
  return result;
}

// //  to do check codestyle
// const myCondition = (a) => a < 7;
// console.log(customEvery(myArray, myCondition));

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
//2nd variant skip
