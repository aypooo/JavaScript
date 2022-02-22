import React, { Component } from 'react'

class Child3 extends Component{
    state = {
        cart: []
    }

    //구현하기
    addProduct = () => {
        const {cart} = this.state
        const product = prompt("원하시는 상품을 추가해주세요 !")
        this.setState({
            cart : cart.concat(product)})
    }
    
    // 구현하기
    render(){
        const { cart } = this.state 
      
        return(
            <>
                <button onClick={this.addProduct}>상품 추가하기</button>
                <h1>상품목록</h1>
                <p/>----------------
                
                {cart.map((product)=>{
                    return <h3>{product}</h3>
                })}
                

                
            </> 
        )
    }
}
export default Child3