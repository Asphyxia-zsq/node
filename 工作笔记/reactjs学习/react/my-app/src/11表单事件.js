import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'


class Parentcom extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      value:''
    }
  }
  onChange=(e)=>{
    // console.log(e,'onChange')
    this.setState({
      value:e.target.value
    })
  }
  onKeyDown=(e)=>{
    if(e.keyCode === 13){
      console.log(e.target.value)
    }
    
  }
  
    
  render(){
    return (
      <div>
        <input placeholder='请输入内容' onKeyDown={this.onKeyDown} value={this.state.value} onChange={this.onChange}></input>
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

