import { Card, List, Button, Dropdown } from "antd";
import "./CardsList.scss";
import React from "react";
import eventData from "../../model/eventData";
import thumbnail from "../../images/thumbnail.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import EventDropdownMenu from "../eventDropdownMenu";
import { formatDistanceToNow } from "date-fns";
const { Meta } = Card;

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

const CardsList = (props) => {
  return (
    <List
      grid={{
        gutter: 16,
      }}
      pagination={{
        position: "bottom",
        align: "center",
        itemRender: itemRender,
      }}
      dataSource={props.events}
      renderItem={(item) => (
        <List.Item>
          <Card
            hoverable
            cover={<img alt="example" src={thumbnail} className="cover-img" />}
          >
            <Meta
              title={item.eventName}
              description={formatDistanceToNow(new Date(item.createdAt), {
                addSuffix: true,
              })}
            />
            <EventDropdownMenu />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CardsList;
