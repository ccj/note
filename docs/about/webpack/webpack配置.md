# webpack配置

## 简单webpack从0搭建

package.json
```
   {
  "name": "webpackStudy",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --config  config/webpack.dev.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^4.5.0",
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12",
    "webpack-merge": "^4.2.2",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {}
}

  },
```

新建config

webpack是模块化打包工具，通过webpack可以把 .vue .sass .less .jsx .js等编译成 .js .css .png .jpg 


```angular2html
##  全局安装webpack
npm i webpack  webpack-cli -g

## 版本检查
webpack -v
```


### webpack打包后的文件 

- 首先打包后的结果，该函数是自执行函数
```angular2html
(function(){

})('key':function(){})

// key 代表文件路径 value：是一个函数（执行当前文件的代码），通过eval执行字符串代码
webpack把相互依赖的多个文件，  打包成为一个文件。


//多个文件打包成一个文件，通过__webpack_require__ 该函数通过递归自己调用自己，引入依赖的文件。  把所有文件打包形成一个文件。
function __webpack_require__(moduleId){
}

```


```angular2html

 (function(modules) { // webpackBootstrap
 	// The module cache
 	var installedModules = {};

 	// The require function
 	function __webpack_require__(moduleId) {

 		// Check if module is in cache
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}
    (function(module, exports) {
    eval("console.log('hello')\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
    })

 });

```


```angular2html
webpack优化点，使用懒加载 热更新 不用的不引入 大的包放在CDN上
速度优化
体积优化
自带的优化
- treeSharking 不用的代码不打包 （生产环境有效）
- scope-hoisting 作用域提升，用变量来计算一个结果，如果其他地方未使用到该变量，怎只会打印结果
自己实现的优化

比如moment插件，包含我们不需要语言包， 通过 ignorePlugin

一些资源包如 jquery不打包，通过cdn引入。如果打包进来体积爆炸。

```


