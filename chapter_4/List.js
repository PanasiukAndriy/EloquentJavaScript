class Element {
  constructor(value, ref) {
    this.value = value;
    this.ref = ref;
  }
}

function ArrayToList(arrayParam) {
  let headOfList = null;
  let count = arrayParam.length;
  for (let i = 0; i < count; i++) {
    let currentItem = new Element(arrayParam.pop(), headOfList);
    headOfList = currentItem;
  }
  return headOfList;
}

function ListToArray(listParam) {
  let resultArray = Array();

  while (listParam != null) {
    resultArray.push(listParam.value);
    listParam = listParam.ref;
  }

  return resultArray;
}

function Prepend(value, list) {
  return new Element(value, list);
}

function GetValueByIndex(getIndex, list) {
  let result;
  let currentIndex = 0;
  let found = false;
  let endOfList = false;

  do {
    if (currentIndex == getIndex) {
      result = list.value;
      found = true;
    }

    if (list.ref == null) {
      endOfList = true;
    } else {
      list = list.ref;
      currentIndex++;
    }
  } while (!found && !endOfList);

  return result;
}

let resultList = ArrayToList([1, 2, 3, 4, 5]);
// console.log(JSON.stringify(result));
// console.log(result);

let resultArray = ListToArray(resultList);
console.log("resultArray: " + resultArray);

//--------------------------
// let testValue = 7;
// resultList = Prepend(testValue, resultList);
// console.log(`after prepend ${testValue}`);
// console.log(resultList);

//-------------------
console.log(resultList);

let testIndex = 0;
console.log(`index ${testIndex}: ` + GetValueByIndex(testIndex, resultList));

testIndex = 2;
console.log(`index ${testIndex}: ` + GetValueByIndex(testIndex, resultList));

testIndex = 3;
console.log(`index ${testIndex}: ` + GetValueByIndex(testIndex, resultList));

console.log("done");
