let classA = {
  fieldA: 1,
  fieldB: 2,
  //fieldC: 4,
};

let classB = {
  fieldA: 1,
  fieldB: 3,

  //fieldD: 3,
};

function IsEqual(obj1, obj2) {
  let globalResult = true;

  if (obj1 === null && obj2 === null) {
    return (globalResult = false);
  }
  console.log("length1 = " + Object.keys(obj1).length);
  console.log("length2 = " + Object.keys(obj2).length);
  if (Object.keys(obj1).length == Object.keys(obj2).length) {
    let obj1Keys = Object.keys(obj1);
    obj1Keys.sort();
    let obj2Keys = Object.keys(obj2);
    obj2Keys.sort();
    console.log(obj1Keys.length);
    console.log(obj2Keys.length);

    for (let index = 0; index < obj1Keys.length; index++) {
      //let result = IsEqual(obj1Keys[index], obj2Keys[index]);
      if (
        obj1Keys[index] !== obj2Keys[index] ||
        obj1[obj1Keys[index]] !== obj2[obj2Keys[index]]
      ) {
        return (globalResult = false);
      }
    }
  } else {
    return (globalResult = false);
  }

  return globalResult;
}

let r = IsEqual(classA, classB);
console.log(r);

//------------------------------
// for (const value of Object.keys(classA)) {
//   console.log(`value = ` + classA[value]);
// }

//console.log("length = " + Object.keys(classA).length);
