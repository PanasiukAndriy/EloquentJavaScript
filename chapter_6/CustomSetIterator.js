//copy+pasta from CustomSet.js
class Group {
  constructor() {
    this.myElements = new Array();
  }

  insert(item) {
    for (const value of this.myElements) {
      if (value === item) return;
    }
    this.myElements.push(item);
  }

  delete(item) {
    let searchIndex = -1;
    for (let index = 0; index < this.myElements.length; index++) {
      if (this.myElements[index] === item) {
        searchIndex = index;
        break;
      }
    }
    if (searchIndex != -1) {
      this.myElements.splice(searchIndex, 1);
    }
  }

  has(item) {
    //indexOf()
    for (const value of this.myElements) {
      if (value === item) return true;
    }
    return false;
  }

  static from(items) {
    let result = new Group();
    for (const item of items) {
      result.insert(item);
    }
    return result;
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.index == this.group.myElements.length) return { done: true };
    let value = this.group.myElements[this.index];
    this.index++;
    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

//test
let myGroup = new Group();
myGroup.insert(1);
myGroup.insert(2);
myGroup.insert(3);
myGroup.insert(4);

for (let value of myGroup) {
  console.log(value);
}
