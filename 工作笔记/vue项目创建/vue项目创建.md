# 1.安装nodejs

[nodejs](https://nodejs.org/en/)

# 2.nodejs安装后

a.如果之前安装过vue的2.0版本，你需要把2.0相关的删除

```
npm uni -g vue-cli或者cnpm uni -g vue-cli
```

b.如果没有安装或vue的2.0版本的话，直接在全局的命令窗口，输入

```
npm i -g @vue/cli
```

c.检查版本号

```
vue -V
```

# 3创建项目

```
winpty vue.cmd create probject
```

可以用箭头加回车选择

![34ae6cdc47c790fe0135179b3d17492](\34ae6cdc47c790fe0135179b3d17492.png)

这里用空格选择

![ed519fa51a2a42a4add790e752e9293](\ed519fa51a2a42a4add790e752e9293.png)

这里选择最后一个prettier

![7d1c57a4ba02003eb6df35925c0eef8](\7d1c57a4ba02003eb6df35925c0eef8.png)

这里选择第一个

![微信截图_20201103180549](.\微信截图_20201103180549.png)

这里提示是否保存为模板

![微信截图_20201103180705](\微信截图_20201103180705.png)

# 4.添加eslintcr.js

```
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'plugin:vue/base'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'indent': [2, 2], // 两个空格的缩进
    'quotes': [2, 'single'], // js必须使用单引号
    'linebreak-style': [2, 'unix'], // 换行风格 unix/windows
    'semi': [2, 'always'], // 语句强制分号结尾
    'no-console': [1], // 不允许console语句
    'no-unused-vars': [1], // 声明了变量但是没有使用检测
    'space-unary-ops': [1, { 'words': true, 'nonwords': false }], // 一元运算符的前/后要不要加空格
    'brace-style': [2, '1tbs', { 'allowSingleLine': false }], // 大括号风格
    'comma-spacing': [2, { 'before': false, 'after': true }],   // 逗号后有空格，前没有空格
    'comma-style': [2, 'last'],  // 逗号跟在结尾
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }], // 对象字面量中冒号的前后空格
    'lines-around-comment': [ // 行前/行后备注
      2, {
        'beforeBlockComment': false, // 段注释的前后
        'beforeLineComment': false, // 行注释的前面
        'afterBlockComment': false, // 块注释的后面
        'afterLineComment': false, // 行注释的后面
        'allowBlockStart': true,
        'allowObjectStart': true,
        'allowArrayStart': true
      }],
    'max-depth': [2, 4], // 代码最多允许4层嵌套
    'max-len': [1, 160, 2],
    'max-nested-callbacks': [2, 3], // 回调嵌套深度
    'max-params': [2, 5], // 函数最多只能有5个参数
    'max-statements': [1, 80],  // 单个函数最多80条语句
    'no-array-constructor': [2], // 禁止使用数组构造器
    'no-lonely-if': 2, // // 禁止else语句内只有if语句
    'no-multiple-empty-lines': [2, { 'max': 3, 'maxEOF': 1 }], // 空行最多不能超过2行
    'no-nested-ternary': 2,  // 不使用嵌套的三元表达式
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'no-unneeded-ternary': 2, // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;简单的判断用三元表达式代替
    'object-curly-spacing': [2, 'always', { // 大括号内是否允许不必要的空格 always始终允许；never始终不允许
      'objectsInObjects': false,
      'arraysInObjects': false
    }],
    'arrow-spacing': 2, // =>的前/后括号
    'block-scoped-var': 2, // 块语句中使用var
    'no-dupe-class-members': 2,
    // 'no-var': 1, // 禁用var，用let和const代替
    'object-shorthand': [1, 'always'], // 强制对象字面量缩写语法
    'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
    'operator-linebreak': [2, 'after'], // 换行时运算符在行尾还是行首
    'semi-spacing': [2, { 'before': false, 'after': true }], // 分号前后空格
    'keyword-spacing': ['error'],
    'space-before-blocks': 2, // 不以新行开始的块{前面要不要有空格
    'block-spacing': [2, 'always'],
    'space-before-function-paren': [2, 'never'], // 函数定义时括号前面要不要有空格
    'space-in-parens': [2, 'never'], // 小括号里面要不要有空格
    'spaced-comment': [1, 'always',
      { 'exceptions': ['-', '*', '+']
      }], // 注释风格要不要有空格什么的
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {
    '$': false,
    'jquery': false,
    'ActiveXObject': false,
    'arbor': true,
    'layer': false
  }
};
```

# 4添加vue.config.js

## 完整版

```
const path = require("path");
const UglifyPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  // 基本路径
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  //   compiler: false,
  runtimeCompiler: true, //关键点在这
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
      // 将每个依赖包打包成单独的js文件
      var optimization = {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace("@", "")}`;
              }
            }
          }
        },
        minimizer: [
          new UglifyPlugin({
            uglifyOptions: {
              compress: {
                warnings: false,
                drop_console: true, // console
                drop_debugger: false,
                pure_funcs: ["console.log"] // 移除console
              }
            }
          })
        ]
      };
      Object.assign(config, {
        optimization
      });
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
      var optimization2 = {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace("@", "")}`;
              }
            }
          }
        }
      };
    }
    Object.assign(config, {
      // 开发生产共同配置
 
      // externals: {
      //   'vue': 'Vue',
      //   'element-ui': 'ELEMENT',
      //   'vue-router': 'VueRouter',
      //   'vuex': 'Vuex'
      // } // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(用于csdn引入)
      resolve: {
        extensions: [".js", ".vue", ".json"], //文件优先解析后缀名顺序
        alias: {
          "@": path.resolve(__dirname, "./src"),
          "@c": path.resolve(__dirname, "./src/components"),
          "@v": path.resolve(__dirname, "./src/views"),
          "@u": path.resolve(__dirname, "./src/utils"),
          "@s": path.resolve(__dirname, "./src/service")
        }, // 别名配置
        plugins: []
      },
      optimization: optimization2
    });
  },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // extract: true, //注释css热更新生效
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    /* 自动打开浏览器 */
    open: false,
    // host: "192.168.0.137",
    host: "0.0.0.0", //局域网和本地访问
    //host: "192.168.1.137",
    port: 8080,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      "/api": {
        /* 目标代理服务器地址 */
        // target: "http://192.168.0.106:8080/",
        target: "http://192.168.1.126:8080/", //阳洋
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    before: () => {}
  },
  // 第三方插件配置
  pluginOptions: {}
};
```

## 简易版

```
const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@v", resolve("src/views"))
      .set("@c", resolve("src/components"))
      .set("@u", resolve("src/utils"))
      .set("@s", resolve("src/service")); /* 别名配置 */
    config.optimization.runtimeChunk("single");
  },
  devServer: {
    // host: "localhost",
    /* 本地ip地址 */
    //host: "192.168.1.107",
    host: "0.0.0.0", //局域网和本地访问
    port: "8080",
    hot: true,
    /* 自动打开浏览器 */
    open: false,
    overlay: {
      warning: false,
      error: true
    },
    /* 跨域代理 */
    proxy: {
      "/api": {
        /* 目标代理服务器地址 */
        target: "http://m260048y71.zicp.vip", //
        // target: "http://192.168.1.102:8888", //
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
```

