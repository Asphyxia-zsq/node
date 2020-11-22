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




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

