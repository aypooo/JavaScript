import React from 'react';

export default class Person extends React.Component {
  state = {
      name: "sunrise",
      age: 23,
      friends: [
          "victoria",
          "daniel",
          "hanna"
      ]
  }
  displayInfo = () =>{
    const{name,age,friends} =this.state
    alert(`
      * 신상정보 *
    ---------------
    이름 : ${name}
    나이 : ${age}
    친구 : ${friends.join(" ")}
    `)
  }
  
  render() {    
      
    return (
    	  <>
          <button onClick={this.displayInfo}>신상정보 확인하기</button>
        </>
    )
  
  }
}