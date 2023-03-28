import "./App.scss";
import { ConfigProvider } from "antd";
import React from "react";
import Routers from "./routers";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f4b205",
          fontFamily: "'Manrope', sans-serif",
        },
      }}
    >
      <Routers />
    </ConfigProvider>
  );
}

export default App;
