import React from "react";
import { Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./LayoutHeader.scss";
import Breadcrumbs from "../../../breadcrumbs";

const { Header } = Layout;

const LayoutHeader = () => {
  return (
    <Header>
      <Breadcrumbs />
    </Header>
  );
};

export default LayoutHeader;
