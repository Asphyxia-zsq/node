import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import {createStore} from 'redux'

// 定义reducer函数
function reducer(state={num:0},action){
  switch(action.type){
    case 'add':
      state.num++
      break;
    case 'decrement':
      state.num--
      break;
    default:
      break;
  }
  return {...state}
}
// 创建一个store
const store = createStore(reducer)



class Parentcom extends React.Component{
  constructor(props){
    super(props)
    
  }  
  add(){
    // console.log(store)
    // 调用store.dispatch(action)传入action
    store.dispatch({type:'add',content:{abc:1}})
  }
  decrement(){
    store.dispatch({type:'decrement',content:{abc:1}})
  }

  render(){
    let state = store.getState()
    return (
      <div>
        <h1>计数 : {state.num}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Parentcom />,
  document.getElementById('root')
);

// 调用subscribe监听数据变化修改视图
store.subscribe(res=>{
  ReactDOM.render(
    <Parentcom />,
    document.getElementById('root')
  );
})





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

