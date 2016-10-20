module.exports = {
  // 统一箭头函数中函数体对`{}`的使用。只在需要的时候添加（默认行为）
  "arrow-body-style": 2,

  // 统一箭头函数中函数参数对`()`的使用
  "arrow-parens": [2, "as-needed"],

  // 强制在箭头函数的箭头前面和后面添加一个空格（默认行为）
  // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
  "arrow-spacing": 2,

  // 统一generator中`*`前后空格的使用
  "generator-star-spacing": [2, {"before": false, "after": true}],

  // 不允许对同一个模块进行多次引入；同时export某个引入的模块时，要引入和导出分开
  "no-duplicate-imports": [2, { "includeExports": true }],

  // 不允许不必要的计算属性名
  "no-useless-computed-key": 2,

  // 不允许类定义中不必要的constructor定义
  "no-useless-constructor": 2,

  // 不允许在模块引入时使用不必要的重命名
  "no-useless-rename": 2,

  // 强制使用`const`和`let`，不允许使用`var`
  "no-var": 2,

  // 强制使用简洁的对象字面值语法（默认行为）
  // https://github.com/eslint/eslint/blob/master/docs/rules/object-shorthand.md
  "object-shorthand": 2,

  // 优先使用箭头函数而不是函数表达式声明回调函数
  "prefer-arrow-callback": 2,

  // 优先使用`const`
  "prefer-const": 2,

  // 2/8/16进制优先使用字面值
  "prefer-numeric-literals": 2,

  // 「待商议」在可用的情况先优先使用Reflect方法
  "prefer-reflect": 0,

  // 优先使用rest参数，而不是arguments对象
  "prefer-rest-params": 2,

  // 优先使用spread操作符而不是`apply`方法
  "prefer-spread": 2,

  // 优先使用模板字符串，而不是字符串拼接
  "prefer-template": 2,

  // 不允许rest和spread操作符和标识符之间有空格
  "rest-spread-spacing": 2,

  // 定义`symbol`时总是添加描述
  "symbol-description": 2,

  // 统一模板字符串中表达式和括号之间是否使用空格：不使用（默认）
  "template-curly-spacing": 2,

  // 统一yield中*前后的空格
  // 默认是`{"before": false, "after": true}`
  "yield-star-spacing": 2
};
