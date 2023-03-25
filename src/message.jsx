import React from 'react'
import  ReactDOM  from 'react-dom/client'
const message = {
    success(text) {
        const message = ReactDOM.createRoot(document.querySelector('#message'))
        message.render(
            <Message text={text} icon="@"></Message>
        )
    }
}

function Message(props) {
    return (
        <div>{props.icon} { props.text }</div>
    )
}

export default function App() {
    const handleClick = () => {
        message.success('login success')
    }

    return (
        <button onClick={handleClick}>message</button>
    )
}
