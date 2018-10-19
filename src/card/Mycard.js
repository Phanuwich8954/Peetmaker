import React from 'react'
class Mycard extends React.Component {
    render(){
        return(
        <div style = {{border :'8px solid blue'}}>
            <b>{this.props.kuy}</b>   {/* ส่งค่าจาก app ผ่าน props โดยมีชื่อว่า kuy */}
        </div>
        )
    }
}
export default Mycard;