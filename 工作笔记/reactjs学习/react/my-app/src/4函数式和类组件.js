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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

