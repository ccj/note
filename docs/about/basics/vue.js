
//重新定义数组原型
const oldArrayProperty = Array.prototype;
//创建新对象 原型指向oldArrayProperty 扩展的新方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
// pop push shift unshift splice
['pop','push','shift','unshift','splice'].forEach(name=>{
    arrProto[name] = function () {
        //更新视图
        updateView();
        //调用原生数组更新方法
        oldArrayProperty[name].call(this,...arguments)
    }
});

function observer(target){
    if(typeof target !== 'object' || target === null){
        return;
    }

    if(Array.isArray(target)){
        target .__proto__ =  arrProto
    }
    for(key in target){
        defineReactive(target,key,target[key])
        console.log(key)
    }
}

function updateView() {
    console.log('更新视图')
}
function defineReactive (target,key,val){
    //递归调用
    observer(target[key]);
    Object.defineProperty(target,key,{
        get() {
            console.log('get');
            return val;
        },
        set:function (newValue) {
            console.log('set');
            if(newValue !== val){
                target[key] = newValue;
            }
        }
    })
}
let json = {
    name:'kira',
    age:30,
    address:{
        text1:{
            des1:1,
            des2:3
        },
        text2:2
    }
};
console.log('json.name',json.name);
observer(json);
