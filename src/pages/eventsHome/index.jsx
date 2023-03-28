import React, { useState } from "react";
import HomeLayout from "../../components/layout/home";
import "./EventsHome.scss";
import CreateEventModal from "../../components/createEventModal";
import CardsList from "../../components/cardsList";
import EventsTable from "../../components/table";
import eventData from "../../model/eventData";
import { Input, Select, DatePicker, Button } from "antd";
import { UnorderedListOutlined, AppstoreFilled } from "@ant-design/icons";

const { Search } = Input;
const { RangePicker } = DatePicker;

const onSearch = (value) => console.log(value);

const EventsHome = () => {
  const [display, setDisplay] = useState("grid");
  const [events, setEvents] = useState(eventData);
  const [openCreateEventWizard, setOpenCreateEventWizard] = useState(false);
  const [event, setEvent] = useState(null);

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
    <HomeLayout>
      <CreateEventModal
        openCreateEventWizard={openCreateEventWizard}
        setOpenCreateEventWizard={setOpenCreateEventWizard}
      />
      <div className="title-container">
        <h1 className="title">Events</h1>
        <Button type="primary" onClick={() => setOpenCreateEventWizard(true)}>
          Add New Event
        </Button>
      </div>
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
    </HomeLayout>
  );
};

export default EventsHome;
