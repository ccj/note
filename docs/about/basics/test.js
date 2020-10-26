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
