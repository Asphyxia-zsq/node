

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

# props父穿子，子传父

```
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class Parentcom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isShow:true
    }
    this.onclick = this.onclick.bind(this)
  }
  onclick(e,a){
    console.log(this)
    console.log(e,a)
    this.setState({isShow:!this.state.isShow})
  }
    
  render(){
    return (
      <div>
        <h1>我是父元素</h1>
        <button onClick={this.onclick}>控制子元素的显示</button>
        <Childcom onclick={this.onclick} isShow={this.state.isShow} />
        
      </div>
    )
  }
}

class Childcom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:'我是数据'
    }
    this.onclick = this.onclick.bind(this)
  }

  onclick(){
    this.props.onclick(this.state.data)
  }
    
  render(){
    console.log(this.props.isShow)
    if(this.props.isShow){
      return (
        <div>
          <h1>我是子元素</h1>
          <button onClick={()=>{this.props.onclick('我时直接调用props的方法')}}>子元素也可以控制显示111</button>
          <button onClick={this.onclick}>子元素也可以控制显示111</button>

        </div>
      )
    }else{
      return (
        <div>
          <button onClick={this.onclick}>子元素也可以控制显示22</button>
        </div>
        

      )
    }
  }
}

ReactDOM.render(
  <Parentcom content='我是类组件传进来的props' />,
  document.getElementById('root')
);


```

# react事件

特点：

1. react事件绑定事件驼峰命名法

2. {}传入函数

3. 事件对象的属性必须直接输出才能查看

4. react阻止默认行为不用return false 必须调用e.preventDefault()

5. react 事件传递参数

   ```
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './App.css'
   
   class Parentcom extends React.Component{
     constructor(props){
       super(props)
     }
     onclick=(e,data)=>{
       console.log(e,data)
     }
       
     render(){
       return (
         <div>
           <h1>我是父元素</h1>
           <button onClick={(e)=>{this.onclick(e,123)}}>事件</button>
           
         </div>
       )
     }
   }
   
   
   ReactDOM.render(
     <Parentcom />,
     document.getElementById('root')
   );
   ```

   

# react条件渲染

```
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

function A(){
  return (
    <div>欢迎光临</div>
  )
}
function B(){
  return (
    <div>请登录</div>
  )
}
class Parentcom extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      islogin:true
    }
  }
  onclick=(e,data)=>{
    console.log(e,data)
  }
    
  render(){
    let element = this.state.islogin?(<A></A>):(<B></B>)
    return (
      <div>
        <h2>12345</h2>
        {element}
      </div>
    )
  }
}


ReactDOM.render(
  <Parentcom />,
  document.getElementById('root')
);
```

# react 列表渲染

将列表内容拼装成数组放置模板中

```
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class List extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let list = []
    
    this.props.list.map((item,index)=>{
      let list_item = (
      <li onClick={(e)=>{this.props.click(e,index)}}>{item.title}{item.content}</li>
      )
      list.push(list_item)
    })
    return (
      <ul>
       {list}
      </ul>
    ) 
  }
}
class Parentcom extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      list:[
        {title:'我是标题',content:'我是内容'},
        {title:'我是标题1',content:'我是内容1'},
        {title:'我是标题2',content:'我是内容2'},
      ]
    }
  }
  onclick=(e,index)=>{
    console.log(e,index)
  }
    
  render(){
    return (
      <div>
        <h2>12345</h2>
        <List click={this.onclick} list={this.state.list}/>
      </div>
    )
  }
}


ReactDOM.render(
  <Parentcom />,
  document.getElementById('root')
);
```

# react的生命周期

1. constructor() 

   组件挂载之前会调用它的构造函数

2. componentDidMount()

   会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。

3. componentDidUpdate()

   首次渲染不会执行此方法。

   当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。

4. componentWillUnmount()

   会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等

### 不常用的生命周期方法

1. shouldComponentUpdate()

   判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染

2. tatic getDerivedStateFromProps()

   会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 `null` 则不更新任何内容。

3. getSnapshotBeforeUpdate()

   在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`。

4. static getDerivedStateFromError(error)

   此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state

5. componentDidCatch()

   此生命周期在后代组件抛出错误后被调用。 它接收两个参数：

   1. `error` —— 抛出的错误。
   2. `info` —— 带有 `componentStack` key 的对象，其中包含[有关组件引发错误的栈信息](https://zh-hans.reactjs.org/docs/error-boundaries.html#component-stack-traces)。

### 过时的生命周期方法

1. UNSAFE_componentWillMount()

   此生命周期之前名为 `componentWillMount`。该名称将继续使用至 React 17。可以使用 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) 自动更新你的组件。

   在挂载之前被调用。它在 `render()` 之前调用，因此在此方法中同步调用 `setState()` 不会触发额外渲染。通常，我们建议使用 `constructor()` 来初始化 state。

   避免在此方法中引入任何副作用或订阅。如遇此种情况，请改用 `componentDidMount()`。

   此方法是服务端渲染唯一会调用的生命周期函数。

2. UNSAFE_componentWillReceiveProps(nextProps)

   会在已挂载的组件接收新的 props 之前被调用。如果你需要更新状态以响应 prop 更改（例如，重置它），你可以比较 `this.props` 和 `nextProps` 并在此方法中使用 `this.setState()` 执行 state 转换。

3. UNSAFE_componentWillUpdate(nextProps, nextState)

   生命周期之前名为 `componentWillUpdate`。该名称将继续使用至 React 17。可以使用 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) 自动更新你的组件。

   当组件收到新的 props 或 state 时，会在渲染之前调用 `UNSAFE_componentWillUpdate()`。使用此作为在更新发生之前执行准备更新的机会。初始渲染不会调用此方法。

   

   

### 简写

1. componentWillMount()  

   组件将要挂载

2. componentDidMount()

   组件挂载完成

3. componentWillReceiveProps()

   会在已挂载的组件接收新的 props 之前被调用

4. shouldComponentUpdate()

   组件接收到新的props或者state，判断是否更新返回布尔值

5. componentWillUpdate()

   组件将要更新

6. componentDidUpdate()

   组件更新完成

7. componentWillUnmount

   组件将要卸载

