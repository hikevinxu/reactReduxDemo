import { combineReducers } from 'redux'
import { count } from './aaa'
import { pageTitle, movieList } from './bbb'

const rootReducer = combineReducers({
  count,
  pageTitle,
  movieList
})

export default rootReducer