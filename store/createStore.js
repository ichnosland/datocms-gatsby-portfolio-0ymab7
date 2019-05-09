import { createStore as reduxCreateStore } from "redux"
import configureStore from '../configureStore';

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore