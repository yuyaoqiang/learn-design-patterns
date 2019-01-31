/**
 * 单例模式
 */
class SingleObject {
    log(){
        console.log("hello world");
    }
}
SingleObject.getInstance = (function(){
    let  instance;
    return function(){
        if(!instance){
            instance = new SingleObject();
        }
    return instance;
    }
})();

let a = SingleObject.getInstance();
let b = SingleObject.getInstance();
console.log(a === b);