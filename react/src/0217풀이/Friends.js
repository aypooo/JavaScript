import React,{Component} from "react"
export default class Friends extends Component{
    render(){
        const {name,age,city} = this.props
        return (
            <>
            {friends.map((friend)=>{
                return (
                    <>
                        <h2>{name}</h2>
                        <h4>{age}</h4>
                        <h4>{city}</h4>
                    </>
                )

            }) }
            </>       
        )
    }
}