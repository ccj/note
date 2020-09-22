# vue相关

## v-show && v-if区别？

- v-show通过css的display判断是否显示，不管是否显示DOM已经存在。
- v-if 是判断节点是否渲染，如果频繁切换不适合使用。


## 为什么v-for中用key？

必须有key 不能用index和random，应该用后台返回的id
diff算法通过tag和key来判断 是否sameNode 优化渲染次数，提升渲染性能。

## 描述vue父子组件生命周期？

- 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
- 子组件更新过程
- 父beforeUpdate->子beforeUpdate->子updated->父updated
- 父组件更新过程
- 父beforeUpdate->父updated
- 销毁过程
- 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

## 描述组件间如何通讯？
    父子组件传值
    兄弟组件传值
    祖孙组件传值
    emitBus 和vuex的使用