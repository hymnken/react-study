import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    msg: 'hello'
}

const messageSlice = createSlice({
    // dispatch('message/change')
    name: 'message',
    initialState: {
        ...initialState,
        upperMsg: initialState.msg.toUpperCase()
    },
    reducers: {
        change(state, action) {
            state.msg = action.payload
            state.upperMsg = state.msg.toUpperCase()
        }
    }
})

export default messageSlice.reducer