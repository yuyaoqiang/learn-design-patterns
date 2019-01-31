/**
 * 适配器模式
 * name: adaptee
 * 介绍: 旧接口格式与使用者不兼容 中间需要加一个适配器转换接口
 *应用场景: 
 */
class Target{
  adapteeRequest(){
    console.log("美国插头")
  }
}
class Adaptee{
  constructor(){
    this.target = new Target();
  }
  request(){
    let info = this.target.adapteeRequest();
    return `${info} - 转换器 ---中国插头`
  }
}
let adaptee = new Adaptee();
adaptee.request();