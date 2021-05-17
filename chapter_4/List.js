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

let result = ArrayToList([1, 2, 3, 4, 5]);
console.log(JSON.stringify(result));
console.log(result);
console.log("done");
