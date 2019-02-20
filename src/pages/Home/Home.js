import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  decrease(num) {
    console.log(num--)
    this.setState({
      count: num--
    })
  }

  increase(num) {
    console.log(num++);
    this.setState({
      count: num++
    })
  }


  render() {
    return (
      <div className="Home">
        <h1>Home页面</h1>
        <h1>{ this.state.count }</h1>
        <button onClick={() => this.increase(this.state.count)}>+1</button>
        <button onClick={() => this.decrease(this.state.count)}>-1</button>
        <Link to="/helloworld">go helloworld</Link>
        <Link to="/">◀︎ back</Link> 
      </div>
    );
  }
}

export default Home;