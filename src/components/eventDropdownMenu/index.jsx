import React from "react";
import { Button, Dropdown } from "antd";
import {
  MoreOutlined,
  FormOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: "Archive",
    icon: <DownloadOutlined />,
  },
  {
    key: "2",
    label: "Set Status",
    icon: <FormOutlined />,
    children: [
      {
        key: "2-1",
        label: "In Progress",
      },
      {
        key: "2-2",
        label: "Completed",
      },
      {
        key: "2-3",
        label: "Expired",
      },
    ],
  },
];

const handleClick = ({ key }) => {
  if (key === "1") {
    console.log(items.find((elem) => elem.key === key).label);
  } else {
    const subMenuItems = items.find((elem) => elem.key === "2").children;
    console.log(subMenuItems.find((elem) => elem.key === key).label);
  }
};

const EventDropdownMenu = () => {
  return (
    <Dropdown
      menu={{
        items,
        onClick: handleClick,
      }}
    >
      <Button
        icon={
          <MoreOutlined
            style={{
              fontSize: "18px",
            }}
          />
        }
      />
    </Dropdown>
  );
};

export default EventDropdownMenu;
