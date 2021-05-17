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

let resultList = ArrayToList([1, 2, 3, 4, 5]);
// console.log(JSON.stringify(result));
// console.log(result);

let resultArray = ListToArray(resultList);
console.log("resultArray: " + resultArray);

console.log("done");
