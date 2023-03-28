import React from "react";
import "./EventsTable.scss";
import { Table } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import EventDropdownMenu from "../eventDropdownMenu";
import { Link } from "react-router-dom";

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

// const columns = [
//   {
//     title: "Event Title",
//     dataIndex: "eventName",
//     key: "eventName",
//     render: (text, record) => (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "10px",
//         }}
//       >
//         <img src={record.avatar} alt="avatar" style={{ borderRadius: "5px" }} />
//         <Link to={`/events/${record.id}`} state={events}>
//           {text}
//         </Link>
//       </div>
//     ),
//   },
//   {
//     title: "Date Created",
//     dataIndex: "createdAt",
//     key: "createdAt",
//   },
//   {
//     title: "Client Name",
//     dataIndex: "clientName",
//     key: "clientName",
//   },
//   {
//     title: "No. of Guests",
//     dataIndex: "guessCount",
//     key: "guessCount",
//   },
//   {
//     title: "Status",
//     dataIndex: "status",
//     key: "status",
//   },
//   {
//     title: "",
//     key: "action",
//     render: () => <EventDropdownMenu />,
//   },
// ];

const EventsTable = (props) => {
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
          <img
            src={record.avatar}
            alt="avatar"
            style={{ borderRadius: "5px" }}
          />
          <Link to={`/events/${record.id}`} state={props.events}>
            {text}
          </Link>
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
