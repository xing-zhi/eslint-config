module.exports = {
  // 强制把回调放在`return`语句中
  "callback-return": 2,

  // 强制在模块的顶层使用`require`加载所有模块
  "global-require": 2,

  // 强制在回调中处理错误
  "handle-callback-err": 2,

  // 强制所有模块加载放在一起，同时按类型分块
  "no-mixed-requires": [2, true],

  // 不允许使用`new`调用`require`的模块
  "no-new-require": 2,

  // 禁止在使用`__dirname`和`__filename`时使用字符串拼接来创建路径
  // 应该使用path.join或者path.resolve
  "no-path-concat": 2,

  // 不允许使用process.exit
  "no-process-exit": 2,

  // 对使用同步模块警告
  // 初始化时使用同步模块是没有问题的，而且简洁
  "no-sync": 1
};
