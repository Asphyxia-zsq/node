# 安装

```

$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
```



# 元素渲染

```
import React from 'react';
import ReactDOM from 'react-dom';
let Abc = <div>123</div>
ReactDOM.render(
  Abc,
  document.getElementById('root')
);
//或者
function Abc(props){ //组件一定要大写
  return (
    <div>{props.abc}111</div>
  )
}
ReactDOM.render(
  <Abc abc={'abc'}/>,
  document.getElementById('root')
);
```

组件一定要大写



# React jsx

优点：

1. jsx执行更快编译为javascript代码师进行优化

2. 类型更安全，编译过程出错就不能编译，及时发现错误

   

注意：

1. jsx必须要有根节点

2. 正常的html元素要小写，如果是大写默认为组件

   

## jsx表达式

```
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
let time = new Date().toLocaleTimeString()
let str = '当前时间'
let yellow = 'yellow'
let element = (
  <div>
    <h1>hellow word</h1>
    <h2 className={yellow}>{str+time}</h2>
    <h3>{true?'隔离':"不隔离"}</h3>
    <h3>{true?<button>隔离</button>:'不隔离'}</h3>
  </div>
)
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

# react的样式和注释

```
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
let exampleStyle = {
  background:'yellow',
  borderBottom:'5px solid red'
}
let element = (
  <div>
    {/* 不可以重复写style 只能通过对象来写*/}
    <h2 style={exampleStyle}>hellow word</h2>
  </div>
)
let classa = 'yellow'
let classb = 'orange'
let element1 = (
  <div>
    {/* 这里写注释 */}
    {/* 不可以重复写class 只能通过对象来写重复写只显示第一个*/}
    <h2 className={classb} className={classa}>hellow word</h2>
    <h2 className={'border ' +classa}>hellow word</h2>
  </div>
)
ReactDOM.render(
  element1,
  document.getElementById('root')
);
```

# react组件

1. 函数式组件
2. 类组件