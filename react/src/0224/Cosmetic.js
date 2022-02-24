import { render } from "@testing-library/react";
import React,{Component} from "react";

class Cosmetic extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading:true,
            cosmetics =[]
    }
}


render(){
    const{loading,cosmetics}=this.state

    return(
        <>
        {cosmetics.map(cosmetic=>{
            <Api
                key={cosmetic.id}
                image={cosmetic.image_link}
                name={cosmetic.name}
                price={cosmetic.price}
                des={cosmetic.decrioption}
            ></Api>

        })}
        </>
    )
}
}