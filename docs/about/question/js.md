# js 问题

## underfind 和 null 的区别?

JavaScript 语言居然有两个表示"无"的值：undefined 和 null。
最初设计

- null 是一个表示"无"的对象，转为数值时为 0；
  // Number(null) 0
- undefined 是一个表示"无"的原始值，转为数值时为 NaN。
  // Number(undefined)

### null 和 underfind 目前的用法

null 表示"没有对象"，即该处不应该有值。
undefined 表示"缺少值"，就是此处应该有一个值，但是还没有定义。

- 1 变量被声明了，但没有赋值时，就等于 undefined。
- 2 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
- 3 对象没有赋值的属性，该属性的值为 undefined。
- 4 函数没有返回值时，默认返回 undefined。

这样判断一个值是否存在，就可以用
objA.valueA === undefined // 不应使用 null 因为 undefined == null，而 null 表示该值定义为空值。

```
underfind === null // false
typeof underfind //underdind
typeof null //object
```

### JavaScript 中包含 6 种数据类型？

5 种基本数据类型 1 个复杂数据类型

- underfind
- null
- string
- number
- boolean
- object

### 清除浮动的写法

- 1 overfow:hidden
- 2 元素末尾追加 div.style="clear:both"
- 3 通过伪类

```
.clearfix::after{
    content:'' //伪元素内容 为''让伪元素不显示
    //clear属性只能在块级元素上其作用，这就是清除浮动样式中display:block的作用。
    display:'block',
    height:0让元素高度为0并且不显示
    clear:both;//清除浮动
    visiblity:hidden;//让元素渲染但是不显示
    clear:both;//清除浮动
}
```

```
清除浮动作用

1:解决子元素浮动父元素高度塌陷的问题
```

## Oject.assign 的浅拷贝问题？

Object.assign 只能拷贝第一层。

```
let a = {a:1,b:2}
let b= {c:3,d:{name:'kira'}};

let obj = Object.assign({},a,b);
console.log(obj);
//{ a: 1, b: 2, c: 3, d: { name: 'kira' } }

a.a = 66;
console.log(obj); //修改a发现obj并没有被改变。
// { a: 1, b: 2, c: 3, d: { name: 'kira' } }
b.d.name = 'test';
console.log(obj);//修改name时候，发现obj被改变了。
//{ a: 1, b: 2, c: 3, d: { name: 'test' } }
c
```

## js 实现一个单例模式

思路：保证一个类只有一个对象，一般先判断对象是否存在，如果存在直接返回该对象。如果不存在，创建对象并返回。
比如后台的 jdbc 连接就是典型的单例，防止每次使用 sql 都要创建 sql 连接对象。

## requestAnimationFrame 对比 setTimeOut

- 没有办法保证，回调函数一定会在 setTimeout()指定的时间执行。
- 把浏览器切换到后台，setTimeOut 还会一直执行。
- 在页面渲染结束后才会开始执行。
- requestAnimationFrame 执行时机早，在重绘阶段 就开始执行了。
- 动画更加流畅 60 帧/s，既 16.67ms 更新一次视图。这个时机是符合人眼的。频率是自己定的
- setTimeOut 手动设置多少毫秒增加多少像素，requestAnimationFrame 自动控制.
  setTimeOut 手动设置时间来执行，如果手动设置 setTimeOut(fn,0)执行代码前等待的毫秒数为 0，但并不是立即执行的，这是因为 setTimeout 有一个最小执行时间。

HTML5 标准规定了 setTimeout()的第二个参数的最小值（最短间隔）不得低于 4 毫秒。实际上可能为 4 毫秒后才事件推入任务队列。如果此时主线程不为空，也不会读取推出异步队列的 setTimeOut.

执行效率问题

```
虽然两段代码执行效果一样，但是第二段代码(16.7ms/3)就要执行一次函数，很浪费性能。
如果每次增加10或者更大，使用setTimeOut会有明显卡顿卡。
let currentWidth = 100
const maxWidth = 640
function animate()
    currentWidth + = 3;
    if(currentWidth<maxWidth){
        $div.css('left',currentWidth)
        setTimeOut(animate,16.7)
    }
}
animate();

//假设我们让每次增加1px
let currentWidth = 100
const maxWidth = 640
function animate()
    currentWidth + = 1;//每次增加1px
    if(currentWidth<maxWidth){
        $div.css('left',currentWidth)
        setTimeOut(animate,16.7/3) //增加setTimeOut的执行频率
    }
}
animate();
```

## DocumentFragement VS Document

- 区别:DocumentFragment 不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会导致性能等问题。

DocumentFragment 节点代表一个文档的片段，本身是一个完整的 DOM 树结构。它没有父节点，不属于 Document。但是可以插入任意数量的子节点。但是它不属于当前文档。比直接操作 DOM 树快。

```
//简单使用
var carInfoEl = document.querySelector('.car-info')
const fragment = document.createDocumentFragment() //创建fragement
carDetail.carInfo.map(item => {
      var li = document.createElement('li')
      li.innerHTML = '<span class="key">' + item.split(':')[0] + '</span > <span span class="value" >' + item.split(':')[1] + '</span>'
      fragment.appendChild(li)//把真实DOM append到 fragement上
})
carInfoEl.appendChild(fragment) //把fragement添加到真实DOM上。
```

## 在前端如何处理几万条数据的情况？

通过使用 DocumentFragement。存储每次要插入的文档。
使用 requestAnimationFragement 动态 在真实 DOM 上添加 fragement。

```
    setTimeout(() => {
    // 插入十万条数据
    const total = 100000;
    // 一次插入的数据
    const once = 20;
    // 插入数据需要的次数
    const loopCount = Math.ceil(total / once);
    let countOfRender = 0;
    const ul = document.querySelector('ul');
    // 添加数据的方法
    function add() {
        const fragment = document.createDocumentFragment();
        for(let i = 0; i < once; i++) {
        const li = document.createElement('li');
        li.innerText = Math.floor(Math.random() * total);
        fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        countOfRender += 1;
        loop();
    }
    function loop() {
        if(countOfRender < loopCount) {
        window.requestAnimationFrame(add);
        }
    }
    loop();
    }, 0)

```

## Promise 状态不能被二次改变问题

```
new Promise(function(resolve,reject){
    resoleve()
    throw Error('error')
}).then(function(){
    console.log('resolve')
}).catch(function(){
    console.log('err')
})
//打印结果 resolve
throw Error 并不会触发 catch 的执行
```

## 原型链问题

此题考察的是对原型链继承关系的理解，和对 new 的认识。

```
Object.prototype.a = function(){
    console.log('object')
}
Function.prototype.a = function(){
    consoloe.log('function')
}
function A(){

}

let a = new A();
a.a(); // 打印结果是 object，找的是Object上的a
因为 我们new A();首先a会在 构造函数上找，构造函数上找不到。
new的过程
1创建空对象{}
2把a的原型链指向Object
```

## for in 对比 for of

### for-in 是为普通对象设计的

### for-of 遍历数组更加方便
