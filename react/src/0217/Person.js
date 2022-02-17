import React from 'react';

class Person extends React.Component {
  state = {
      name: "sunrise",
      age: 23,
      friends: [
          "victoria",
          "daniel",
          "hanna"
      ],
      Co: null
  }
  displayInfo = () =>{
    const{name,age,friends} = this.state
    function getComponent(){
    
    return (
    <>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{friends}</h3>
    </>
    )
  }
  this.setState({Co: getComponent})
}
  
  render() {    
      const Co = this.state.Co
      console.log(Co)
    return (
    	<>
        {
            Co? Co() : ""
        }
            <button onClick={this.displayInfo}>신상정보 확인하기</button>
        </>
    )
  }
}

export default Person;