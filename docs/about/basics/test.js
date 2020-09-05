function f() {
    console.log('执行了')
}

Function.prototype.bind1 = function () {
    const self = this; //指向f
    //参数转化为数组
    let args = Array.prototype.slice.call(arguments);
    //把第一项,要执向的对象提取出来
    const start = args.shift();
    console.log(args);

    //bind的执行是返回一个函数
    return function () {
       return  self.apply(start,args)
    }

};
const fn2  = f.bind1({},1,2,4);
//接收返回的函数，并执行
const  res = fn2();
console.log(res);


