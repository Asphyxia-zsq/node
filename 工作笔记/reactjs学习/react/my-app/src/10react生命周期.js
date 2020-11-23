import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      a:123
    }
  }
  componentWillMount(){
    console.log('组件将要渲染')

  }
  componentDidMount(){
    console.log('组件挂载后执行')
  }
  componentWillReceiveProps(e){
    console.log('会在已挂载的组件接收新的 props 之前被调用',e)
  }
  shouldComponentUpdate(e){
    console.log('组件接收到新的props或者state，判断是否更新返回布尔值',e)
    return true
  }
  componentWillUpdate(){
    console.log('组件将要更新')
  }
  componentDidUpdate(){
    console.log('组件更新后执行')
  }
  componentWillUnmount(){
    console.log('组件卸载后执行')
  }
  
  render(){
    let list = []
    
    this.props.list.map((item,index)=>{
      let list_item = (
      <li key={index} onClick={(e)=>{this.props.click(e,index);this.setState({a:456})}}>{item.title}{item.content} {this.state.a}</li>
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
      ],
      isShow:true
    }
  }
  onclick=(e,index)=>{
    console.log(e,index)
    
  }
  show=()=>{
    // this.setState({isShow:!this.state.isShow})
    this.setState({list:[
      {title:'我是标题',content:'我是内容'},
      {title:'我是标题1',content:'我是内容1'},
      {title:'我是标题2',content:'我是内容2'},
      {title:'我是标题3',content:'我是内容3'},
    ],})
  }
    
  render(){
    return (
      <div>
        <h2 onClick={this.show}>12345</h2>
        {
          this.state.isShow?<List click={this.onclick} list={this.state.list}/>:''
        }
        
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

