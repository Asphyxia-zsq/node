import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
let exampleStyle = {
  background:'yellow',
  borderBottom:'5px solid red'
}
let element = (
  <div>
    {/* 不可以重复写style 只能通过对象来写*/}
    <h2 style={exampleStyle}>hellow word</h2>
  </div>
)
let classa = 'yellow'
let classb = 'orange'
let element1 = (
  <div>
    {/* 这里写注释 */}
    {/* 不可以重复写class 只能通过对象来写重复写只显示第一个*/}
    <h2 className={classb} className={classa}>hellow word</h2>
    <h2 className={'border ' +classa}>hellow word</h2>
  </div>
)
ReactDOM.render(
  element1,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

