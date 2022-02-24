import { number } from "prop-types";
import React,{Component} from "react";

export default class Lotto extends Component{
    state = {
        number : null,
        lottoArray : []
    }

    pickRandomNumber = (min, max) => {
        return Math.floor( Math.random() * (max-min+1) ) + min
    }
 
    rendomNumber =()=>{
        let array = []
            for(let i=0;i<6;i++){
                array[i] = this.pickRandomNumber(1,45)
                for(let j=0;j<i;j++){
                    if(array[i] === array[j]){
                        i--
                    }
            }
            this.setState({lottoArray :array})
    
    }
}

componentDidMount(){
    this.timerId = setInterval(this.rendomNumber,3000)
    
}
    render(){
        const {lottoArray}= this.state
        return (
            <>
                <h2>로또번호 자동 생성기</h2>
                {lottoArray.join(" ")}
            </>
        )
    }
}

