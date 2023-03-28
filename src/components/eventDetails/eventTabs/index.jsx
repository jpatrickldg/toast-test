import { Tabs } from "antd";
import React from "react";
import "./EventTabs.scss";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Overview`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "2",
    label: `Guests`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Notifications`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: "4",
    label: `App Setup`,
    children: `Content of Tab Pane 4`,
  },
];

const EventTabs = () => {
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default EventTabs;
