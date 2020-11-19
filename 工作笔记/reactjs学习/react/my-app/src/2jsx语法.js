import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
let time = new Date().toLocaleTimeString()
let str = '当前时间'
let yellow = 'yellow'
let element = (
  <div>
    <h1>hellow word</h1>
    <h2 className={yellow}>{str+time}</h2>
    <h3>{true?'隔离':"不隔离"}</h3>
    <h3>{true?<button>隔离</button>:'不隔离'}</h3>
  </div>
)
ReactDOM.render(
  element,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

