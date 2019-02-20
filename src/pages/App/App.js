import React, { Component } from 'react';
// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// 引入action
import { setPageTitle, increaseTodo, decreaseTodo } from '../../store/actions/index'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 0
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

  componentDidMount() {
    console.log(this.state.date);
    console.log(this.props);
    let { setPageTitle } = this.props
    // 触发setPageTitle action
    setPageTitle('新的标题')
  }

  increase(){
    let { setPageTitle, increaseTodo } = this.props
    console.log("+1");
    setPageTitle('新的标题+1+1+1+1+1+1+1+1+1+1+1+1+1')
    increaseTodo()
  }

  decrease(){
    let { setPageTitle, decreaseTodo } = this.props
    console.log("-1");
    setPageTitle('新的标题-1-1-1-1-1-1-1-1-1-1-1-1-1')
    decreaseTodo()
  }

  render() {
    // 从props中解构store
    let { pageTitle, count } = this.props

    return (
      <div className="App">
        <h1>App页面</h1>
        <h1>{pageTitle}</h1>
        <h1> { count } </h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
        <Link to="/helloworld">go helloworld</Link> 
        <Link to="/home">go home</Link>
      </div>
    );
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  console.log(state)
  return {
    pageTitle: state.pageTitle,
    count: state.count
  }
}


// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitle (data) {
        // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
        dispatch(setPageTitle(data))
        // 执行setPageTitle会返回一个函数
        // 这正是redux-thunk的所用之处:异步action
        // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    },
    increaseTodo (data) {
      dispatch(increaseTodo(data))
    },
    decreaseTodo (data) {
      dispatch(decreaseTodo(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);