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




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

