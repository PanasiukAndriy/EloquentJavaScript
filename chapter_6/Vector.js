class Vector {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }
  plus(vector) {
    return new Vector(this.x + vector.x, this.y + vector.x);
  }
  minus(vector) {
    return new Vector(this.x - vector.x, this.y - vector.x);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

// TO DO: check the condition of adding method to proto.

let a = new Vector(1, 2);

console.log(a);
console.log(a.length);
