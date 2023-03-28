import { Layout } from "antd";
import React from "react";
import "./HomeLayout.scss";
import LayoutSidebar from "./sidebar";
import LayoutHeader from "./header";

import { useLocation } from "react-router-dom";

const { Content } = Layout;

const HomeLayout = ({ children }) => {
  const location = useLocation();
  const pathSnippets = location.pathname
    .split("/")
    .filter((path) => path !== "");
  console.log(pathSnippets[pathSnippets.length - 1] === "events");

  console.log(pathSnippets);
  return (
    <Layout>
      <LayoutSidebar />
      <Layout>
        {pathSnippets.length > 1 && <LayoutHeader />}
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
