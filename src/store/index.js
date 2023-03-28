/* import { createStore , combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from './modules/counter';
import messageReducer from './modules/message';
import thunk from 'redux-thunk';



const store = createStore(combineReducers({
    counter: counterReducer,
    message: messageReducer
}), composeWithDevTools(applyMiddleware(thunk)))

export default store */

/* RTK写法 */

import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './modules/counter'


const store = configureStore({
    reducer: {
        // state.counter.count
        counter:counterReducer
    }
})

export default store