import React,{Component} from "react";
import dummyData from "./dummyDate";

export default class EngCard extends Component{
    state = {
        random: 0
    }
    pickRandomNumber = (min, max) => {
        return Math.floor( Math.random() * (max-min+1) ) + min
      }
    selectCart = ()=>{
        this.setState({random :this.pickRandomNumber(1,dummyData.length-1)})
        }
    componentDidMount(){
        this.timerId = setInterval(this.selectCart,1000)

    }
    componentWillUnmount(){
        clearInterval(this.countID)
      }
        
    render(){
        const {random} = this.state
        const data = dummyData[random]
        return(
            <>          
                <h3>{data.word}</h3> 
                <h3>{data.meaning}</h3>
            </>
        )
    }
}