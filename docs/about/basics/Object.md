# Object

## Object.assign 的用法

Object.assign 可以实现对象的合并。Object.assign(target, ...sources)

### 同名属性 source 替换 targe 属性

Object.assign()方法只会合并替换对象的第一层 key，对于多层的，会当做值处理。(即 Object.assign 是浅拷贝的合并)

Object.assign 会将 source 里面的可枚举属性复制到 target。如果和 target 的已有属性重名，则会覆盖。同时后续的 source 会覆盖前面的 source 的同名属性。

```
let obj1 = {
  a: {
    b: {
      c: "111"
    }
  }
};

let obj2 = {
  a: {
    b: {
      d: "222"
    }
  }
};
Object.assign(obj1, obj2);
//输出结果
a: {
    b: {
      d: "222"
    }
}
```

### object.assign 浅拷贝问题

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

### 深拷贝实现 merge

```

let a = { a: {age:25}, b: 2, c: {}}
let b = { c: 3, a: { name: 'kira' },f: {} };


function mergeDeep(a,b) {
    for (key in b) {
        if (a[key] && a[key].toString() === '[object Object]' ) {
            mergeDeep(a[key],b[key])
        } else {
            a[key] = b[key];
        }
    }
}

mergeDeep(a, b)
console.log('----a',a)

```
