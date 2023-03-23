import React, { useState } from "react";
import 'antd/dist/reset.css';
import { PlayCircleOutlined } from '@ant-design/icons'
import { Button, Space, Switch, Rate } from 'antd';
function App() {
  const [checked, setChecked] = useState(true)
  const [value, setValue] = useState(3)
  return (
    <>
      <div className="App">
        <h2>hello react</h2>
      </div>
      <h3>12312311111</h3>

      <PlayCircleOutlined />
      <Space>
        <Button type="primary">Primary Button</Button>
        <Button danger icon={<PlayCircleOutlined />}>
          Primary
        </Button>
      </Space>
      <br />
      <Switch checked={checked} onChange={setChecked} />
      {checked ? 'on' : 'off'}
      <br />
      <Rate value={value} onChange={setValue} />
      pingfen{ value }
    </>

  );
}

export default App;
