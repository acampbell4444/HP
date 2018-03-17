//import axios from 'axios'

const initState = {
  currentRoute: 'home',
}

const reducer = (state=initState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case UPDATE_CURRENT_ROUTE:
    newState.currentRoute = action.route
    break

  default:
    return state
  }
  return newState
}

const UPDATE_CURRENT_ROUTE = 'UPDATE_CURRENT_ROUTE'

export const updateCurrentRoute = route => ({type: UPDATE_CURRENT_ROUTE, route})

export default reducer