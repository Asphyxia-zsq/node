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




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

