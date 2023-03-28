import React, { useState, useEffect } from "react";
import { Button, Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AppstoreOutlined,
  PlaySquareOutlined,
  ScheduleOutlined,
  BookOutlined,
  ClockCircleOutlined,
  IdcardOutlined,
  CreditCardOutlined,
  HistoryOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./LayoutSidebar.scss";
import logo from "../../../../images/TOAST-ICON.png";
import { useLocation, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "General",
    "general",
    null,
    [
      getItem("Dashboard", "/", <AppstoreOutlined />),
      getItem("Video Gallery", "/gallery", <PlaySquareOutlined />),
      getItem("Events", "/events", <ScheduleOutlined />),
      getItem("Collections", "/collections", <BookOutlined />),
      getItem("Activity Logs", "/activity-logs", <ClockCircleOutlined />),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "Account",
    "account",
    null,
    [
      getItem("My Portfolio", "/portfolio", <IdcardOutlined />),
      getItem("Subscription", "/subscription", <CreditCardOutlined />),
      getItem("Payment History", "/payments", <HistoryOutlined />),
      getItem("Settings", "/settings", <SettingOutlined />),
    ],
    "group"
  ),
];

const { Sider } = Layout;

const LayoutSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  function handleMenuClick(e) {
    navigate(e.key);
    setCurrent(e.key);
  }

  // const setSelectedKey = () => {
  //   const paths = location.pathname.split("/").filter((path) => path !== "");
  //   if (paths.length === 0) setCurrentKey("/");
  //   if (paths.includes === "gallery") setCurrentKey("/gallery");
  //   if (paths.includes === "events") setCurrentKey("/events");
  //   if (paths.includes === "collections") setCurrentKey("/collections");
  //   if (paths.includes === "logs") setCurrentKey("/logs");
  //   if (paths.includes === "portfolio") setCurrentKey("/portfolio");
  //   if (paths.includes === "subsctiption") setCurrentKey("/subscription");
  //   if (paths.includes === "payments") setCurrentKey("/payments");
  //   if (paths.includes === "settings") setCurrentKey("/settings");
  // };

  // const handleMenuClick = ({ key }) => {
  //   if (key) {
  //     navigate(key);
  //     setSelectedKey();
  //   }
  // };

  return (
    <Sider
      width={235}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Menu
        label="General"
        mode="inline"
        // defaultSelectedKeys={["events"]}
        selectedKeys={current}
        items={items}
        inlineIndent={8}
        onClick={handleMenuClick}
      />
      <div className="logout-box">
        <div className="user-info-container">
          <div className="avatar-container">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt="avatar"
            />
          </div>
          <div className="user-info-box">
            <div className="user-name">Oliver Smith</div>
            <div className="user-title">Videographer</div>
          </div>
        </div>
        <div className="logout-button-container">
          <Button type="primary">
            <LogoutOutlined />
          </Button>
        </div>
      </div>
    </Sider>
  );
};

export default LayoutSidebar;
