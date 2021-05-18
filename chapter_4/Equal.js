let classA = {
  fieldA: 1,
  fieldC: {
    val1: 1,
    val2: 2,
  },
  fieldB: 2,
  //fieldC: 4,
};

let classB = {
  fieldA: 1,
  fieldC: {
    val1: 1,
    val2: 3,
  },
  fieldB: 2,
  //fieldC: 4,
};

function IsEqual(obj1, obj2) {
  let globalResult = true;

  if (obj1 === null && obj2 === null) {
    console.log(`case 1`);
    return (globalResult = true);
  }

  let obj1Keys = Object.keys(obj1);
  obj1Keys.sort();
  let obj2Keys = Object.keys(obj2);
  obj2Keys.sort();

  if (obj1Keys.length != obj2Keys.length) {
    console.log(`case 2`);
    return (globalResult = false);
  }

  for (let index = 0; index < obj1Keys.length; index++) {
    if (obj1Keys[index] !== obj2Keys[index]) {
      console.log(`case 3`);
      return (globalResult = false);
    }

    if (
      (typeof obj1[obj1Keys[index]] === "object" &&
        typeof obj2[obj2Keys[index]] !== "object") ||
      (typeof obj1[obj1Keys[index]] !== "object" &&
        typeof obj2[obj2Keys[index]] === "object")
    ) {
      console.log(`case 4`);
      return (globalResult = false);
    }

    if (typeof obj1[obj1Keys[index]] === "object") {
      if (
        typeof obj1[obj1Keys[index]] === "object" &&
        typeof obj2[obj2Keys[index]] === "object"
      ) {
        let result = IsEqual(obj1[obj1Keys[index]], obj2[obj2Keys[index]]);
        if (result === false) {
          console.log(`case 5`);
          return (globalResult = false);
        }
      }
    } else {
      if (obj1[obj1Keys[index]] !== obj2[obj2Keys[index]]) {
        console.log(`case 6`);
        return (globalResult = false);
      }
    }
  }
  console.log(`done`);
  return globalResult;
}

let r = IsEqual(classA, classB);
console.log(r);

//------------------------------
// for (const value of Object.keys(classA)) {
//   console.log(`value = ` + classA[value]);
// }

//console.log("length = " + Object.keys(classA).length);

//--------------
