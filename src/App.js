import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mycard from './card/Mycard';

class App extends Component {
  constructor(props){
    super (props)
    this.state ={"showhee":"" }
  }
  onChange(P){
    this.setState({"showhee":P.target.value})
    console.log(P.target.value)
  }
  render() {
    let test = "hello Peet" //  let อยู่ในจาวาสคริป
    return ( 
       <div>
         <Mycard kuy={this.state.showhee}/>  {/* html แท็ค ค่าที่user พิมพ์ จะไปโผล่ใน kuy ซึ่งเป็นหัวข้อ */}
         <input onChange={(P)=>this.onChange(P)}
         type="text"
         value={this.state.showhee}
         />    
         {/* input ทำให้ user พิมค่าใส่ได้ onChange หมายถึงเมื่อมีการเปลี่ยนแปลงหรือไปเรียกใช้ จะทำการนำ string จาก value ไปเก็บค่าที่ setstate*/}
       </div>
    );
  }
}

export default App;
