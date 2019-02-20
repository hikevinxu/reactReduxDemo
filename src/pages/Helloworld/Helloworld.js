import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../api/index'
import './helloworld.scss'

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
// 引入action
import { getMovieList } from '../../store/actions/index'

class Helloworld extends Component {
  constructor(props){
    super(props);
    this.state = {
      male: []
    }
  }

  componentDidMount(){
    console.log(123);
    let { getMovieList, movieList } = this.props;
    if(movieList.length <= 0){
      getMovieList();
    }
    // api.movieList().then((res)=>{
    //   console.log(res);
    //   this.setState({
    //     movieList: res.subjects
    //   })
    // })
    api.bookCategoryList().then((res) => {
      console.log(res)
      this.setState({
        male: res.male
      })
    })
  }

  render() {

    // 从props中解构store
    let { movieList } = this.props

    return (
      <div className="Helloworld">
        <h1>Helloworld页面</h1>    
        <Link to="/">◀︎ Back</Link>
        <Link to="/home">◀︎ Back Home</Link>
        { movieList.length > 0 ? 
          (<div className="movie">
            { movieList.map((item,index) => 
              <div className="movieItem" key={index}>
                {item.title}
              </div>
            )}
          </div>)
          :
          (<div className="warning">
            暂无更多
          </div>)
        }
        { this.state.male.length > 0 ? 
          (
            <div className="book">
              { this.state.male.map((item,index) => 
                <div className="bookItem" key={index}>
                  {item.name}
                </div>
              )}
            </div>
          )
          :
          (
            <div>暂无更多内容</div>
          )
        }
        
      </div>
    );
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  console.log(state)
  return {
    movieList: state.movieList
  }
}


// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMovieList (data) {
        // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
        dispatch(getMovieList(data))
        // 执行setPageTitle会返回一个函数
        // 这正是redux-thunk的所用之处:异步action
        // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Helloworld);
