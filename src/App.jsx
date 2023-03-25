import React, { useState } from "react";
import 'antd/dist/reset.css';
// import { Button, Space, Switch, Rate, Checkbox, Form, Input } from 'antd';
import { Outlet , Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>APPAPOAPAPAPA</div>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Outlet />
    </div>
  );
}

export default App;
