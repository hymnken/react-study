function messageReducer(state = { msg: 'hello' }, action) {
    switch (action.type) {
        case 'message/change':
            /*  // state.count++  // 不符合纯函数的概念/*  */
            const msg = action.payload
            return { msg,upperMsg:msg.toUpperCase() }
        default:
            state.upperMsg = state.msg.toUpperCase()
            return state;
    }
}


export default messageReducer