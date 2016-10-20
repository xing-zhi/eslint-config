module.exports = {
  // 数组[]内侧不允许添加空格
  "array-bracket-spacing": [2, "never"],

  // {}内侧要有空格
  "block-spacing": 2,

  // 始终使用代码块，且代码块的{不出现在行首
  "brace-style": [2, "1tbs", {"allowSingleLine": false}],

  // 使用驼峰命名法，无论是变量名还是属性名
  "camelcase": [2, {"properties": "always"}],

  // 不允许表达式末尾的逗号
  "comma-dangle": 2,

  // 在,后面添加空格
  "comma-spacing": [2, {"before": false, "after": true}],

  // 在,之后换行（默认）
  "comma-style": 2,

  // 不允许计算属性中添加空格
  "computed-property-spacing": 2,

  // 统一使用词法this，并且使用context作为变量名。
  // 保证this正确有两种方法：词法this，包括使用变量存储和箭头函数；使用bind
  // 优先使用箭头函数
  "consistent-this": [2, "context"],

  // 非空文件以换行符结尾
  "eol-last": 2,

  // 不允许函数调用时在函数表达式和`(`之间有空格
  "func-call-spacing": 2,

  // 标识符采用驼峰命名，包括属性名
  "id-match": [2, "^[a-z]+([A-Z][a-z]+)*$", { properties: true }],

  // 缩进使用两个空格
  "indent": [2, 2, {SwitchCase: 2, VariableDeclarator: {"var": 2, "let": 2, "const": 4}}],

  // jsx中的引号，默认使用`"`
  "jsx-quotes": 2,

  // 对象字面值，统一在冒号后面添加一个空格，冒号前面不允许有空格
  "key-spacing": [2, {"beforeColon": false, "afterColon": true}],

  // 在关键字前后都要有一个空格
  // 可能没有办法一刀切，后续调整
  "keyword-spacing": 2,

  // 统一把注释放在注释行的上一行，而不是后面
  "line-comment-position": 2,

  // 统一使用Unix换行符，及`\n`
  "linebreak-style": 2,

  // 指定一行的最大字符数
  // 常用的是80， 100和120，暂定100
  // https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
  "max-len": [2, 100, 2, {
    "ignoreUrls"    : true,
    "ignoreComments": false
  }],

  // 每行最多一条语句
  "max-statements-per-line": 2,

  // 强制构造函数首字母大写
  "new-cap": [2, { "newIsCap": true }],

  // 不允许当构造函数没有参数时省略()进行调用
  "new-parens": 2,

  // 在使用var/let/const声明之后添加一个空行
  "newline-after-var": 2,

  // 总是在`return`语句前添加空行
  "newline-before-return": 2,

  // 在链式调用中，每个方法单独一行
  "newline-per-chained-call": 2,

  // 不允许使用Array来创建数组
  // 唯一的例外是可以使用new Array创建一定长度的由某些字符重复构成的字符串，可以使用ES6字符串的repeate的方法
  "no-array-constructor": 2,

  // 不允许使用位操作符
  "no-bitwise": 2,

  // 不允许使用continue
  "no-continue": 2,

  // 不允许在一行的末尾添加注释，总是在注释行的上一行添加注释，后续可能调整
  "no-inline-comments": 2,

  // 不允许else块只有一个单独的if块
  "no-lonely-if": 2,

  // 在复杂表达式中，不同类型的表达式需要使用括号组合，增强可读性，后续可能调整
  "no-mixed-operators": 2,

  // 不允许多个连续空行，最多连续的空行数为2，文档末尾最多1个空行
  "no-multiple-empty-lines": [2, {"max": 2, "maxEOF": 1}],

  // 不允许在布尔上下文中使用取反操作符`!`，可以通过调整语句块或者表达式的顺序完全避免`！`
  // 后续可能调整
  "no-negated-condition": 2,

  // 不允许使用嵌套的三元操作符
  "no-nested-ternary": 2,

  // 不允许使用Object构造函数创建对象
  "no-new-object": 2,

  // 不允许使用制表符
  "no-tabs": 2,

  // 不允许在行尾出现空白字符
  "no-trailing-spaces": 2,

  // 不允许变量名使用下划线，总是使用驼峰
  "no-underscore-dangle": 2,

  // 不允许使用可以被简化的三元操作符
  "no-unneeded-ternary": 2,

  // 在属性名和对象之间不允许空格
  "no-whitespace-before-property": 2,

  // 统一在对象字面值中紧贴{}是否添加一个空格
  "object-curly-spacing": [2, "always"],

  // 一个var/let/const声明一行
  "one-var-declaration-per-line": [2, 'always'],

  // 一个变量对应一个var
  "one-var": [2, "never"],

  // 在可以使用复合赋值操作符时总是使用
  "operator-assignment": 2,

  // 统一拆分过长表达式时操作符的位置
  "operator-linebreak": [2, "before"],

  // 不允许在代码块的开始和结尾添加空行
  "padded-blocks": [2, "never"],

  // 对象属性名引号的添加情况，只在需要的时候添加
  "quote-props": [2, "as-needed", {"keywords": false, "unnecessary": true, "numbers": false}],

  // 字符串统一使用单引号包裹，当为了避免转义时可以使用双引号
  "quotes": [2, "single", "avoid-escape"],

  // 当`;`出现在表达式中间时，统一在它的后面添加一个空格，前面不允许有空格
  "semi-spacing": [2, {"before": false, "after": true}],

  // 总是使用`;`
  "semi": [2, "always"],

  // 强制在`{`前添加一个空格
  "space-before-blocks": 2,

  // 强制在特定关键字后添加一个空格
  "space-after-keywords": [2, "always"],

  // 命名函数表达式()前面不允许有空格，匿名函数表达式()前面要添加一个空格
  // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
  "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],

  // 不允许在()内侧添加空格
  "space-in-parens": 0,

  // 强制在中缀操作符两侧添加一个空格
  "space-infix-ops": 2,

  // 统一一元操作符中空格的使用
  "space-unary-ops": [2, {"words": true, "nonwords": false}],

  // 编码总是使用UTF-8,UTF-8不需要BOM
  "unicode-bom": 2,

  // 强制在注释前添加一个空格，除了一些标志注释之外
  "spaced-comment": [2, "always", {
    "exceptions": ["-", "+"],
    "markers": ["=", "!"]
  }]
};
