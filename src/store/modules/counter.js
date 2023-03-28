//  function counterReducer(state = { count: 0 }, action) {
//     switch (action.type) {
//         case 'counter/inc':
//             const count = state.count + action.payload
//             /*  // state.count++  // 不符合纯函数的概念/*  */
//             return { count, doubleCount: count * 2 }
//         default:
//             state.doubleCount = state.count * 2
//             return state;
//     }
// }

// export function counterTestAction() {
//     return (dispatch) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 /* dispatch({type:'counter/inc',payload:5}) */
//                 resolve('response data')
//             },2000)
//         })
//     }
// }

// export default counterReducer


/* RTK */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const counterSlice = createSlice({
    // dispatch('counter/inc')
    name: 'counter',
    initialState: {
        ...initialState,
        doubleCount:initialState.count * 2
    },
    reducers: {
        inc(state, action) {
            state.count += action.payload
            state.doubleCount = state.count * 2
        }
    }
})

export default counterSlice.reducer