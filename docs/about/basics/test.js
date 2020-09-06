// function f() {
//     console.log('执行了',arguments)
// }
//
// f(1,2,3);
// let a  = {"0":0,"1":1,"length":1}
//
//
// console.log(Array.slice);
// Function.prototype.bind1 = function () {
//     const self = this; //指向f
//     //参数转化为数组
//     let args = Array.prototype.slice.call(arguments);
//     //把第一项,要执向的对象提取出来
//     const start = args.shift();
//     console.log(args);
//
//     //bind的执行是返回一个函数
//     return function () {
//        return  self.apply(start,args)
//     }
//
// };
// const fn2  = f.bind1({},1,2,4);
// //接收返回的函数，并执行
// const  res = fn2();
// console.log(res);
function imgLoad(url) {
    return new Promise(((resolve, reject) => {
        const  img = document.createElement('img');
        img.src = url;
        img.onload =function () {
           resolve(img)
        };
        img.onerror =function () {
            const err = new Error(`发生错误${url}`);
            reject(err)
        }
    }))
}
const  url = 'https://doc.yixiang.co/img/pc1.png';

imgLoad(url).then(function (res) {
    console.log('res',res)
}).catch(function (err) {
    console.log('发生错误',err)
});

