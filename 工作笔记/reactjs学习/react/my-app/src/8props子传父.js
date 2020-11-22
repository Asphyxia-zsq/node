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




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

