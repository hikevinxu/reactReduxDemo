// 默认值
import defaultState from '../state/index'


// 一个reducer就是一个函数
export function pageTitle (state = defaultState.pageTitle, action) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data
    default:
      return state
  }
}

export function movieList (state = defaultState.movieList, action) {
  switch (action.type) {
    case 'GET_MOVIE_LIST':
      return action.data
    default:
      return state
  }
}
