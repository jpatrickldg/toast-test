import { CheckOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import "./PackageCard.scss";

const PackageCard = (props) => {
  return (
    <Card
      style={{
        border: "none",
      }}
    >
      <div className="package-name">{props.packageName}</div>
      <div className="package-price">$0</div>
      <div className="package-content">
        <div className="single-package-description">
          <CheckOutlined
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginInlineEnd: "12px",
            }}
          />{" "}
          Lorem, ipsum dolor.
        </div>
        <div className="single-package-description">
          <CheckOutlined /> Lorem, ipsum dolor.
        </div>
        <div className="single-package-description">
          <CheckOutlined /> Lorem, ipsum dolor.
        </div>
      </div>
      <div className="package-description">
        <em>Lorem ipsum dolor sit amet.</em>
      </div>
    </Card>
  );
};

export default PackageCard;
