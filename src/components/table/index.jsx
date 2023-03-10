import React from "react";
import "./EventsTable.scss";
import { Table } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import eventData from "../../model/eventData";
import EventDropdownMenu from "../eventDropdownMenu";

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return (
      <a>
        <LeftOutlined style={{ marginRight: "5px" }} />
        Previous
      </a>
    );
  }
  if (type === "next") {
    return (
      <a>
        Next
        <RightOutlined style={{ marginLeft: "5px" }} />
      </a>
    );
  }
  return originalElement;
};

const columns = [
  {
    title: "Event Title",
    dataIndex: "eventName",
    key: "eventName",
    render: (text, record) => (
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img src={record.avatar} alt="avatar" style={{ borderRadius: "5px" }} />
        {text}
      </div>
    ),
  },
  {
    title: "Date Created",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Client Name",
    dataIndex: "clientName",
    key: "clientName",
  },
  {
    title: "No. of Guests",
    dataIndex: "guessCount",
    key: "guessCount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "",
    key: "action",
    render: () => <EventDropdownMenu />,
  },
];

console.log(eventData);

const EventsTable = (props) => {
  return (
    <Table
      columns={columns}
      dataSource={props.events}
      pagination={{
        position: ["bottomCenter"],
        style: { margin: 0 },
        itemRender: itemRender,
      }}
    />
  );
};

export default EventsTable;
