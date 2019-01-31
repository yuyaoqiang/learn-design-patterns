/**
 * 工厂模式
 *应用场景: new 对象很多的地方,例如jQuery中
 */

class Product {
  constructor(name) {
    this.name = name;
  }
  fn() {
    console.log("function" + this.name);
  }
  fn1() {
    console.log("function1" + this.name);
  }
}
class Creator {
  creator(name) {
    return new Product(name);
  }
}
let creator = new Creator();
let c = creator.creator("aaaa");
c.fn();
c.fn1();
