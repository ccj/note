# nextTick 实现

## 为什么会使用 nextTick?

vue 中我们修改 data 中的 key，并不可能每一次修改 data 中的 key 都要渲染一下页面。在 vue 中会把多次对 data 中 key 的修改合并，放在一个事件循环中，然后利用事件循环机制，当前这个事件循环对 key 的所有修改都结束会调用一个 nextTick 函数，标志此时渲染结束。

事件循环的事件执行完，先通过 Promise 实现 nextTick 如果 nextTick 不支持使用 MucationObserver 如果 MucationObserver 不支持使用 setTimeOut。

修改数据时，视图并不会即时的更新，而是等在同一事件循环的所有数据变化完成后，再进行视图更新。类似于 Event Loop 事件循环机制。

Vue 实现响应式并不是在数据改变后就立即更新 DOM，而是在一次事件循环的所有数据变化后再异步执行 DOM 更新.

nextTick

## 为什么我们频繁修改 data 属性，不会多次更新 view？

当我们同时修改多次 data 属性时候，该判断 if (has[id] == null) 防止重复添加更新任务，并且利用了 event loop 机制在合适的时机去更新视图。

在 update 方法中，实际调用 nextTick 更新视图。
在事件循环中，当前宏任务调用栈清空才会去执行微任务。
