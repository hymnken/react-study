import { createStore } from './../../node_modules/redux/src/createStore';
import { composeWithDevTools } from 'redux-devtools-extension'


function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'inc':
            /*  // state.count++  // 不符合纯函数的概念/*  */
            return { count: state.count + 1 }
        default:
            return state;
    }
}

const store = createStore(counterReducer, composeWithDevTools())

export default store