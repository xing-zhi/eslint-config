// 在recommended的基础上修改
module.exports = {
  // 不允许在布尔上下文中使用赋值表达式
  "no-cond-assign": [2, "except-parens"],

  // 对使用console进行警告
  "no-console": 1,

  // 在布尔上下文中使用字面值时警告
  "no-constant-condition": 1,

  // 不允许使用多余的()
  "no-extra-parens": 2,

  // 不允许直接在对象上调用`Object.prototype`的方法
  // var foo = Object.create(null);
  // var hasOwnproperty = foo.hasOwnproperty; // undefined, wrong
  // var hasOwnproperty = {}.hasOwnproperty; // function, correct
  "no-prototype-builtins": 2,

  // 不允许在不同字符串中使用模板字符串语法
  // var foo = 'foo';
  // '${foo}'; // wrong
  // "${foo}"; // wrong
  // `${foo}`; // correct
  "no-template-curly-in-string": 2,

  // 不允许对`in`和`instanceof`的左操作数使用取反操作符（!）
  "no-unsafe-negation": 2
};
