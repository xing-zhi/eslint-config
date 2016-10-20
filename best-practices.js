module.exports = {
  // 总是要求访问器属性成对出现
  "accessor-pairs": 2,

  // 在需要返回值的Array的高阶函数的回调中检查是否有`return`
  "array-callback-return": 2,

  // 按块级作用域使用var，同时就近声明变量
  "block-scoped-var": 2,

  // 强制不同分支使用一致的返回值
  "consistent-return": 1,

  // 总是使用代码块，即使只有一条语句。
  "curly": 2,

  // 强制switch语句中始终添加default分支
  "default-case": 2,

  // 统一点操作符和属性名在同一行，点操作符出现在一行的开始
  "dot-location": [2, "property"],

  // 总是优先使用点操作符访问属性，同时允许使用点操作符访问保留字属性
  "dot-notation": [2, {"allowKeywords": true}],

  // 总是使用===
  "eqeqeq": 2,

  // 总是在for...in中使用hasOwnProperty进行检测
  "guard-for-in": 2,

  // 对alert、prompt和confirm进行警告
  "no-alert": 2,

  // 不允许使用arguments.caller/callee
  "no-caller": 2,

  // 不允许在包含return的if块后使用else块
  "no-else-return": 2,

  // 不允许定义空函数
  "no-empty-function": 2,

  // 是否允许和null进行相等判断，及必须使用===或者!==
  "no-eq-null": 2,

  // 不允许使用eval
  "no-eval": 2,

  // 不允许扩充内置对象
  "no-extend-native": 2,

  // 不允许使用bind进行没有必要的this绑定
  "no-extra-bind": 2,

  // 不允许省略浮点数中小数点前后的数字
  "no-floating-decimal": 2,

  // 不允许赋值给native objects或者只读的全局变量
  "no-global-assign": 2,

  // 不允许隐式类型转换或者使用某些操作符，比如+、!!等，进行转换
  // var a = '1';
  // +a => Number(a)
  // !!a => Boolean(a)
  "no-implicit-coercion": 2,

  // 不允许在全局作用域声明变量或函数
  "no-implicit-globals": 2,

  // 不允许给setTimeout和setInterval传递字符串作为第一个参数，它们是另一种形式的eval
  "no-implied-eval": 2,

  // 是否允许不必要的this，即是否只允许在类或者class like的对象中使用
  "no-invalid-this": 2,

  // 不允许使用SpiderMonkey引擎对JavaScript的扩展__iterator__
  "no-iterator": 2,

  // 不允许使用label
  "no-labels": 2,

  // 不允许使用单独的代码块
  "no-lone-blocks": 2,

  // 不允许在循环中定义函数，更具体的说是不允许在循环中定义的函数引用外层作用域的变量
  "no-loop-func": 2,

  // 不允许出现神奇数字，数字要使用有意义的变量
  "no-magic-numbers": 2,

  // 不允许出现多个连续的空格
  "no-multi-spaces": 2,

  // 不允许使用\来拼接字符串
  "no-multi-str": 2,

  // 不允许使用`new Function`
  "no-new-func": 2,

  // 不允许使用`new Number/String/Boolean`
  "no-new-wrappers": 2,

  // 不允许以利用副作用的方式来使用`new`操作符。
  "no-new": 2,

  // 不允许使用new Function，new Function是另一种形式的eval
  "no-new-func": 2,

  // 不允许使用`new`操作符调用直接量包裹构造函数来创建直接量
  "no-new-wrappers": 2,

  // 不允许使用八进制转义序列
  "no-octal-escape": 2,

  // 不允许函数参数进行赋值操作，包括参数的属性
  "no-param-reassign": 2,

  // 不允许使用`__proto__`
  "no-proto": 2,

  // 不允许在`return`语句中使用赋值表达式
  "no-return-assign": 2,

  // 不允许使用脚本URL
  "no-script-url": 2,

  // 不允许一个值和它自身进行比较
  "no-self-compare": 2,

  // 不允许使用逗号操作符`,`在一个语句中包含多个表达式
  "no-sequences": 2,

  // 限制异常抛出的内容：Error对象或者基于Error的对象
  "no-throw-literal": 2,

  // 不允许循环中不改变条件变量
  "no-unmodified-loop-condition": 2,

  // 不允许出现没有被使用的表达式
  "no-unused-expressions": 2,

  // 不允许不必要的`call`和`apply`
  "no-useless-call": 2,

  // 不允许不必要的字符串拼接
  "no-useless-concat": 2,

  // 不允许不必要的转义
  "no-useless-escape": 2,

  // 不允许使用void
  "no-void": 2,

  // 不允许使用提醒注释
  // 默认配置`{"terms": ["todo", "fixme", "xxx"], "location": "start"}`
  "no-warning-comments": 2,

  // 不允许使用with
  "no-with": 2,

  // 总是给parseInt提供第二个参数
  // 前后端区分
  "radix": [2, "as-needed"],

  // 总是使用()包裹IIFE，具体风格不限
  "wrap-iife": [2, "any"],

  // 不运行使用yoda表达式。
  "yoda": 2
};
