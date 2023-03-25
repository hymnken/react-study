import React from 'react'
import { MyButton, MyRate } from './MyAntd'
import { PlayCircleFilled } from '@ant-design/icons'
export default function App() {
    return (
        <div>
            <h2>hello antd</h2>
            <MyButton>按钮1</MyButton>
            <MyButton type="primary">按钮2</MyButton>
            <MyButton danger>按钮3</MyButton>
            <MyButton type="primary" danger>按钮4</MyButton>
            <MyButton type="primary" size="large">按钮5</MyButton>
            <MyButton type="primary" size="small">按钮6</MyButton>
            <MyButton type="primary" icon={<PlayCircleFilled />}>按钮7</MyButton>
            <MyRate></MyRate>
        </div>
    )
}
