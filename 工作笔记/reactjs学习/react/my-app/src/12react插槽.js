import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
class Childcom extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      value:''
    }
  }  
  render(){
    let headerCom,mainCom,footerCom
    this.props.children.forEach(item=>{
      if(item.props['data-position']=='header'){
        headerCom = item
      }else if(item.props['data-position']=='main'){
        mainCom = item
      }else if(item.props['data-position']=='footer'){
        footerCom = item
      }
    })
    return (
      <div>
        <h1>我是子组件</h1>
        <div className='cols'>
        <div className = 'header'>{headerCom}</div>
        <div className = 'main'>{mainCom}</div>
        <div className = 'footer'>{footerCom}</div>
        </div>
      </div>
    )
  }
}

class Parentcom extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      value:3
    }
  }  
  render(){
    return (
      <div>
        <Childcom>
          <h1 data-position='footer'>我是尾部的组件</h1>
          <h1 data-position='main'>我是中间的组件</h1>
          <h1 data-position='header'>我是头部的组件</h1>
        </Childcom>
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

