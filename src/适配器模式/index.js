/**
 * 装饰器模式
 * name: decorator
 * 介绍: 为对象添加新功能,不改变其原有的结构与功能
 *应用场景: 
 */
class Circle{
  draw(){
    console.log("画圆");
  }
}
class Decroator{
  constructor(){
    this.circle = new Circle();
  }
  draw(){
    this.circle.draw();
    this.setRedBorder();
  }
  setRedBorder(circle){
    console.log("花一个边框")
  }
}
// test
let circle = new Circle();
let decorator = new Decroator(circle);

decorator.draw();