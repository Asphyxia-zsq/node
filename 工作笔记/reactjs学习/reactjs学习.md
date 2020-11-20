

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
    <h2 className={yellow}> {str+time} </h2>
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

3. 复合组件

   ```
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './App.css'
   // 函数式组件 首字母大写
   function Childcom(props){
     let title = <h2>我是副标题</h2>
     let isGo = false
     return (
       <div>
         <h1>hellow word</h1>
         {title}
         <div>{isGo?'出门':'不出门'}</div>
         <h3>{props.content}</h3>
         <HelloWorld />
       </div>
     )
   }
   
   // 类组件的定义 
   class HelloWorld extends React.Component{
     render(props){
       return (
         <div>
           <h1>我是类组件</h1>
           <h3>{this.props.content}</h3>
           {/* <Childcom /> */}
         </div>
       )
     }
   }
   
   ReactDOM.render(
     // 写标签形式
     // <Childcom content='我是函数式传进来的props' />,
     <HelloWorld content='我是类组件传进来的props' />,
     document.getElementById('root')
   );
   ```

   # react State

   相当于vue的Data但是使用方式跟vue不一样

   ```
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './App.css'
   
   // 类组件的定义 
   class Clock extends React.Component{
     constructor(props){
       super(props)
       // 状态（数据）
       this.state = {
         time:new Date().toLocaleTimeString()
       }
       
     }
     render(){
       this.state.time = new Date().toLocaleTimeString()
       return (
         <div>
           <h1>当前时间：{this.state.time}</h1>
           <h2>{this.props.content}</h2>
         </div>
       )
     }
     // 生命周期函数,组件渲染完成时的函数
     componentDidMount(){
       setInterval(() => {
         // 更新数据和视图
         this.setState({
           time:new Date().toLocaleTimeString()
         })
       }, 1000);
     }
   }
   
   ReactDOM.render(
     <Clock content='我是类组件传进来的props' />,
     document.getElementById('root')
   );
   ```

# react click

```
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

// 类组件的定义 
class Clock extends React.Component{
  constructor(props){
    super(props)
    // 状态（数据）
    this.state = {
      time:new Date().toLocaleTimeString(),
      a1:'block',
      a2:'none'
    }
    // this.onclick.bind(this)
  }
    onclick = (e)=>{
      console.log(e.target)
      console.dir(e.target.dataset.index)
      if(e.target.dataset.index == 0){
        this.setState({
          a1:'block',
          a2:'none'
        })
      }else{
        this.setState({
          a2:'block',
          a1:'none'
        })
      }
  }
  render(){
    return (
      <div>
        <button data-index='0' onClick={this.onclick}>按钮1</button>
        <button data-index='1' onClick={this.onclick}>按钮2</button>
        <div className={this.state.a1}>内容1</div>
        <div className={this.state.a2}>内容2</div>
      </div>
    )
  }
  // 生命周期函数,组件渲染完成时的函数
  componentDidMount(){
    setInterval(() => {
      // 更新数据和视图
      this.setState({
        time:new Date().toLocaleTimeString()
      })
    }, 1000);
  }
}

ReactDOM.render(
  <Clock content='我是类组件传进来的props' />,
  document.getElementById('root')
);
```

