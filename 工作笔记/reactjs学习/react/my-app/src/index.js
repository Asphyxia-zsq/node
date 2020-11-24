import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
// hash模式
// import { HashRouter as Router, Link, Route, Redirect} from 'react-router-dom'

//history模式
import { BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'

class New extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1>我是新闻页</h1>
        <div>这是新闻id：{this.props.match.params.id}</div>
      </div>
    )
  }
}

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  toPath = (e) => {
    console.log(this)
   this.props.history.push({
      pathname:'/Me',
      hash:'#456',
      search:'?username=admin',
      state:{
        id:45
      },
    })

    this.props.history.push('Me',{msg:456})
  }
  render(){
    return (
      <div>
        <h1>我是首页</h1>
        <button onClick={this.toPath}>跳转到产品页</button>
      </div>
    )
  }
}
class Me extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props.location,'这里是跳转链接传进来的值')
  }
 
  render(){
    return (
      <div>
        <h1>我是个人页</h1>
        
      </div>
    )
  }
}
class Product extends React.Component{
  render(){
    return (
      <div>
        <h1>我是产品页</h1>
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
    let objMe = {
      pathname:'/me',//跳转路径
      search:'?username=admin',//get请求参数
      hash:'#abc',//设置HASH值
      state:{ msg:'helloworld'},//传入组件的数据
    }
    return (
      <div>
        <h1>路由</h1>
        <Router basename='/'>
          <div>
            <Link to = '/Home'>首页</Link>
            <Link to = { objMe } replace>个人页</Link>
            {/* Link的replace属性 */}
            <Link to = '/Me/Home'>个人页中的首页</Link>
            <Link to = '/Product'>产品页</Link>
            <Link to = '/New/456789'>新闻页</Link>
           


            

            <Route path = '/Home' exact  component = {Home}></Route> 
            {/* 加exact代表路径/Home路径下面的子路径必须严格执行匹配 */}
            <Route path = '/Me' component = {Me}></Route>
            <Route path = '/Product' exact component = {Product}></Route>
            <Redirect from = "/" to = "/Home" />

            <Route path = '/New/:id' component = {New}></Route>

          </div>
        </Router>
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

