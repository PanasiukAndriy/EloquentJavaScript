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
