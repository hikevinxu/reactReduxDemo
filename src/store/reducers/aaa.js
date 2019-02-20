  // 默认值
  import defaultState from '../state/index'
  
  export function count(state = defaultState.count, action) {
    switch (action.type) {
      case "INCREASE_TODO":
        return state + 1
    
      case "DECREASE_TODO":
        return state - 1

      default:
        return state
    }
  }