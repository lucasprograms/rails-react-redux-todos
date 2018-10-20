import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from '../middleware/thunk'
import rootReducer from '../reducers/root_reducer'

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configureStore