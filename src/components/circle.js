// import using require
var Shape = require("./Shape");
// declare class
class Circle extends Shape {
  constructor(color) {
    super(color);
    this.color = "blue";
  }
  calculateArea() {}
}
module.exports = Circle;
// export class using module.exports
