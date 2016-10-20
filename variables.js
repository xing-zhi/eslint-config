module.exports = {
  // 不允许出现和`catch`的异常变量同名的变量名，主要是考虑到目前还要兼容IE8
  "no-catch-shadow": 2,

  // 不允许使用和限制名相同的变量名
  "no-shadow-restricted-names": 2,

  // 不允许作用域链中出现同名的变量
  "no-shadow": 2,

  // 不允许初始化变量为undefined。因为不进行初始化，会默认初始化为undefined
  "no-undef-init": 2,

  // 不允许使用`undefined`
  // 唯一需要的使用场景是检测是否是`undefined`，使用`typeof`操作符
  // typeof foo === 'undefined'
  "no-undefined": 2,

  // 不允许在声明之前使用变量
  "no-use-before-define": 2
};
