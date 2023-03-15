import "./App.scss";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UnorderedListOutlined,
  AppstoreFilled,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  theme,
  Button,
  Input,
  DatePicker,
  Select,
  ConfigProvider,
} from "antd";
import React, { useState } from "react";
import EventsTable from "./components/table";
import CardsList from "./components/cardsList";
import eventData from "./model/eventData";
import CreateEventModal from "./components/createEventModal";

const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { RangePicker } = DatePicker;

const onSearch = (value) => console.log(value);

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [display, setDisplay] = useState("grid");
  const [events, setEvents] = useState(eventData);
  const [open, setOpen] = useState(false);

  const filterByStatus = (status) => {
    setEvents(eventData.filter((event) => event.status === status));
  };

  const handleStatusChange = (value) => {
    filterByStatus(value);
  };

  const handleDateChange = (value) => {
    console.log(value);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f4b205",
          fontFamily: "'Manrope', sans-serif",
        },
      }}
    >
      <CreateEventModal open={open} setOpen={setOpen} />
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={[
              UserOutlined,
              VideoCameraOutlined,
              UploadOutlined,
              UserOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }))}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div className="header-container">
              <h1 className="title">Events</h1>
              <Button type="primary" onClick={() => setOpen(true)}>
                Add New Event
              </Button>
            </div>
          </Header>
          <Content>
            <div className="content-navigation">
              <div className="search-box">
                <Search
                  placeholder="Search by events, clients..."
                  onSearch={onSearch}
                />
              </div>
              <div className="filter-box">
                <RangePicker onChange={handleDateChange} />
                <Select
                  placeholder="Status"
                  style={{
                    width: 120,
                  }}
                  onChange={handleStatusChange}
                  dropdownStyle={{
                    fontSize: "12px",
                  }}
                  options={[
                    {
                      value: "in progress",
                      label: "In Progress",
                    },
                    {
                      value: "completed",
                      label: "Completed",
                    },
                    {
                      value: "expired",
                      label: "Expired",
                    },
                    {
                      value: "archived",
                      label: "Archived",
                    },
                  ]}
                />
                <Button
                  type="primary"
                  icon={<UnorderedListOutlined />}
                  onClick={() => setDisplay("list")}
                  className={display === "list" && "current-display-btn"}
                >
                  List
                </Button>
                <Button
                  type="primary"
                  icon={<AppstoreFilled />}
                  onClick={() => setDisplay("grid")}
                  className={display === "grid" && "current-display-btn"}
                >
                  Grid
                </Button>
              </div>
            </div>
            <div className="main-content">
              {display === "grid" ? (
                <CardsList events={events} />
              ) : (
                <EventsTable events={events} />
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
