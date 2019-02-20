// 请求数据
import api from '../../api/index'

// action也是函数
export function setPageTitle (data) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_PAGE_TITLE', data: data })
  }
}

export function increaseTodo (data) {
  return (dispatch, getState) => {
    dispatch({ type: 'INCREASE_TODO', data: data })
  }
}

export function decreaseTodo (data) {
  return (dispatch, getState) => {
    dispatch({ type: 'DECREASE_TODO', data: data })
  }
}

export function getMovieList(data) {
  return (dispatch, getState) => {
    api.movieList().then((res) => {
      console.log(res);
      dispatch({type: 'GET_MOVIE_LIST', data: res.subjects })
    })
  }
}