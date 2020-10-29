// import using require
var Shape = require("./Shape");
// declare class
class Circle extends Shape {
  constructor() {
    super();
    this.color = "blue";
  }
  calculateArea() {}
}
module.exports = Circle;
// export class using module.exports
