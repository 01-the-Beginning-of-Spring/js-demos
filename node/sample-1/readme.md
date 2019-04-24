## 对程序的说明
- sum.js是模块
- main.js是调用模块sum的地方，注意相对路径
- require函数是Node提供的函数，用来引入模块
## CommonJS规范简介
- 这种结构称为CommonJS规范：
  - 每个.js文件称为模块，各自使用的变量名和函数名不冲突
  - 一个模块想要对外暴露变量（函数也是变量），可以用
```javascript
  module.exports = variable;
  ```
  - 一个模块要引用其他模块暴露的变量，用`var ref = require('module_name');` 就拿到了引用模块的变量。
  - 输出的变量可以是任意对象、函数、数组等等。引入的对象具体是什么，取决于引入模块输出的对象。
## CommonJS规范之模块输出
- 可以
  ```javascript
  function foo(){}
  function bar(){}
  module.exports = {
      foo:foo,
      bar:bar
  }
  ```
  或者
  ```javascript
  module.exports = {
      foo:function(){},
      bar:function(){}
  }
  ```
  或者
  ```javascript
  module.exports.foo = function () { return 'foo'; };
  module.exports.bar = function () { return 'bar'; };
  ```
- 也可以
  ```javascript
  function foo(){}
  function bar(){}
  exports.foo = foo;
  exports.bar = bar;
  ```
  或者
  ```javascript
  exports.foo = function(){};
  exports.bar = function(){};
  ```
- 不可以
  ```javascript
  function foo(){}
  function bar(){}
  // 代码可以执行，但是模块并没有输出任何变量:
  exports = {
      foo:foo,
      bar:bar
  };
  ```
- 默认情况下，Node准备的`exports`变量和`module.exports`变量实际上是同一个变量，并且初始化为空对象`{}`。
  - 如果我们要输出的是一个函数或数组，那么只能给`module.exports`赋值
  - 强烈建议使用`module.exports = xxx`的方式来输出模块变量
- 参考[廖雪峰NodeJS教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434502419592fd80bbb0613a42118ccab9435af408fd000)