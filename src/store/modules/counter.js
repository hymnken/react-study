function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'counter/inc':
            const count = state.count + action.payload
            /*  // state.count++  // 不符合纯函数的概念/*  */
            return { count, doubleCount: count * 2 }
        default:
            state.doubleCount = state.count * 2
            return state;
    }
}


export default counterReducer