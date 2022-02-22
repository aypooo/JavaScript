import React, { Component } from 'react';

class Child2 extends Component {
  state = {
    title: "변경전 제목"
  }
  changeTitle = () => {
    this.setstate({title: "제목 업데이트"})
  }
  render(){
    const {title} = this.state
    return (
      <>
        <h1>제목: {title}</h1>
        <button type="button" onClick={this.changeTitle}>change title</button>
      </>
    )
  }
}

export default Child2;