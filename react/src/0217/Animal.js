import React from "react";

export default class Animal extends React.Component{
    state = {
        type:"cat",
        name:"meyow",
        size:"small",
        sound:"low",
        appearence:"cute"

    }
    render(){
        const{type,name,size,sound,appearence} = this.state
        return(
            <>
                <h1>동물 정보</h1>
                <h3>종류 - {type}</h3>
                <h3>이름 - {name}</h3>
                <h3>크기 - {size}</h3>
                <h3>소리 - {sound}</h3>
                <h3>외모 - {appearence}</h3>
            </>
        )
    }
}