// //重新定义数组原型
// const oldArrayProperty = Array.prototype;
// //创建新对象 原型指向oldArrayProperty 扩展的新方法不会影响原型
// const arrProto = Object.create(oldArrayProperty);
// // pop push shift unshift splice
//
// ['pop','push','shift','unshift','splice'].forEach(name=>{
//     arrProto[name] = function () {
//         updateView()
//         oldArrayProperty[name].call(this,...arguments)
//     }
// });
// arrProto.push = function () {
//
// };
//
// arrProto.pop = function () {
//
// };
//
// function updateView() {
//     console.log('更新视图')
// }

//
// const arr = [1, 20, 10, 30, 22, 11, 55, 24, 31, 88, 12, 100, 50];
// function bubbleSort(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = 0; j < arr.length - i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 swap(arr, j, j+1);
//             }
//         }
//     }
//     return arr;
// }
//
// function swap(arr, i, j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
// console.log(arr);

//
// const arr = [30, 32, 6, 24, 37, 32, 45, 21, 38, 23, 47];
//
// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     let temp = arr[0];
//     const left = [];
//     const right = [];
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] > temp){
//             right.push(arr[i]);
//             console.log('--right',right)
//         }else{
//             left.push(arr[i]);
//             console.log('--left',left)
//         }
//     }
//     return quickSort(left).concat([temp], quickSort(right));
// }
//
// console.log(quickSort(arr));


// function Insertion(arr) {
//     let len = arr.length;
//     let preIndex, current;
//     for (let i = 1; i < len; i++) {
//         console.log('----i',i)
//         preIndex = i - 1;
//         current = arr[i];
//         while (preIndex >= 0 && current < arr[preIndex]) {
//             console.log('---arr[preIndex',arr[preIndex])
//             arr[preIndex + 1] = arr[preIndex];
//             preIndex--;
//         }
//         arr[preIndex + 1] = current;
//     }
//     return arr;
// }
//
//
// var arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
// console.log(Insertion(arr));

// new Promise(function (resolve,reject) {
//  resolve('111')
//
// }).then(function (res) {
//          setTimeout(function () {
//          })
// }).catch(function () {
//             console.log('11111111')
// });
//
//
// let has = {};
// let queue = [];
// let waiting = false;
//
// function Weather(ids) {
// }
//
// let weather1 = new Weather(1)
// weather1.id = 1;
// let weather2 = new Weather(1)
// weather2.id = 2;
// let weather3 = new Weather(1)
// weather3.id = 1;
//
//
// function queueWatcher (watcher) {
//     const id = watcher.id
//     console.log('currentId',id)
//     console.log('has[id]',has[id] == null)
//     if (has[id] == null) {
//         has[id] = true
//         console.log('-----has',has)
//         queue.push(watcher)
//         console.log('====queue',queue)
//         // ...
//         if (!waiting) {
//             waiting = true
//             // ...
//             console.log('----异步更新')
//         }
//     }
// }
//
// queueWatcher(weather1)
// queueWatcher(weather2)
// queueWatcher(weather3)

//
// function Cat (name) {
//     this.name = name;
// }
//
// Cat.prototype.color = 'white';
//
// var cat1 = new Cat('Tom');     //{name:'tom',color:'red'}
// console.log(cat1)
// var cat2 = new Cat('Mark');
// console.log(cat2)
// cat1.color = 'black';
// console.log(cat1,cat2)
//
// console.log(cat1.name)
// console.log(cat2.color)
// console.log(Cat.color)
// function cat() {
//
// }
// console.log( cat);
// console.log(cat.prototype === cat.__proto__)

// Function.prototype.bind1 = function () {
//         const self = this;
//         let args = Array.prototype.slice.call(arguments);
//         let start = args.shift();
//         return function () {
//             self.apply(start,args)
//         }
// };
//
// function f() {
//     console.log('-----',this.name)
//     console.log()
// }
//
// Function.prototype.call1 = function () {
//     const self = this;
//     let args = Array.prototype.slice.call(arguments);
//     let obj = args.shift();  //obj
//     obj.this = self;
//      console.log('=======obj',obj)
//      obj.this(args)
// };
//
// f.call1({name:'kira'})
//
// Function.prototype.apply1 = function(){
//     let self = this;
//     let args = Array.prototype.slice.call(arguments);
//     let start = args.shift();
//     start.fn = self;
//     const result = start.fn(...args)
//     delete start.fn;
//     return result;
// };
// function fn(content){
//     console.log('---this.content',content)
//     console.log('---this.nname',this.name)
// }
// fn.apply1({name:'kira'},[1,2,3]);


// function say() {
//     console.log('say')
// }
// Function.prototype.before = function (cb) {
//     //剩余运算符 将所有的参数组合成一个数组
//     return (...args)=>{
//         cb(...args);
//         this();
//     }
// };
//
// const newFn = say.before(function () {
//     console.log('说话前')
// })
//
// newFn('我',1)


// class Promise {
//     callbacks = [];
//     constructor(fn) {
//         fn(this._resolve.bind(this));
//     }
//     then(onFulfilled) {
//         console.log('---onFulfilled',onFulfilled)
//         this.callbacks.push(onFulfilled);
//     }
//     _resolve(value) {
//         console.log('--value',value)
//         console.log('--fn',fn)
//         this.callbacks.forEach(fn => fn(value));
//     }
// }

// //Promise应用
// let p = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('done');
//         resolve('5秒');
//     }, 2000);
// }).then((tip) => {
//     console.log(tip);
// })
//
// function f(fn) {
//     return () => {
//         fn();
//         console.log('111')
//     }
// }
// const res = f(function () {
//     console.log('before')
//  })()

// let myPromise = require('./myPromise')
// let promise = new myPromise(function (resolve,reject) {
//     setTimeout(function () {
//         reject('success')
//     },1)
// })
//
// promise.then(function (res) {
//     console.log('res1',res)
// })
//
// promise.then(function (res) {
//     console.log('res2',res)
// })



// const PADDING = 'PADDING';
// const RESOLVE = 'RESOLVE';
// const REJECT = 'REJECT';

// class promise{
//     constructor(executor){
//         this.status = PADDING;
//         this.val  = '';
//         this.reason = '';
//
//         let resolve = (val)=>{
//             if(this.status === PADDING){
//                 this.status = RESOLVE;
//                 this.val = val
//             }
//         };
//
//         let reject = (reason)=>{
//             if(this.status === PADDING){
//                 this.status = REJECT;
//                 this.reason = reason
//             }
//         };
//         try {
//             executor(resolve,reject)// new时调
//         }catch (e) {
//             reject(e)
//         }
//     }
//     then(onFulfilled,onRejected){
//         //同步
//         if(this.status === RESOLVE){
//             onFulfilled(this.val)
//         }
//         if(this.status === REJECT){
//             onRejected(this.reason)
//         }
//     }
// }



//let Promise = require('./myPromise');
//
//
// let p = new Promise(function (resolve,reject) {
//     resolve()
// });
//
// p.then(function () {
//     console.log('111');
//     return 1000;
// }).then(function (data) {
//     console.log('222',data)
// });
//
//
// let p = new Promise(function (resolve,reject) {
//     resolve()
// });
//
// p.then(function () {
//     console.log('111');
//     return 1000;
// }).then(function (data) {
//     console.log('222',data)
// });


// async function async1(){
//     console.log('fn start')
//     await async2()
//     //await后面当作异步代码来执行
//     console.log('fn end')
// }
//
// console.log('script start');
// async1();
// console.log('script end');
//
// async function async2(){
//     console.log('async2')
// }



const a = f();
console.log(a)

