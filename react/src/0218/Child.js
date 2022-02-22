import React,{Component} from 'react';

export default class Child extends Component {
    state = {
      cnt: 0
    }
    countNumber = () => {
      this.setState({cnt: this.state.cnt + 1})
    }
    render(){
      const {cnt} = this.state
      return (
        <div className="App">
          <h1>카운트: {cnt}</h1>
          <button type="button" onClick={this.countNumber}>change name</button>
        </div>
      )
    }
  }