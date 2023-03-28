import React, { useState } from "react";
import "./EventDetails.scss";
import {
  BarsOutlined,
  CalendarOutlined,
  EditOutlined,
  PlusSquareOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import HomeLayout from "../../components/layout/home";
import EventTabs from "../../components/eventDetails/eventTabs";
import AppSetupWizard from "../../components/appSetupWizard";
import { useLocation, useParams } from "react-router-dom";
import AddImportGuestModal from "./AddImportGuestModal";

const EventDetails = () => {
  const [openAppSetupWizard, setOpenAppSetupWizard] = useState(false);
  const [openAddImportGuestModal, setOpenAddImportGuestModal] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const data = location.state;
  const event = data.find((event) => event.id === id);

  return (
    <HomeLayout>
      <AppSetupWizard
        event={event}
        openAppSetupWizard={openAppSetupWizard}
        setOpenAppSetupWizard={setOpenAppSetupWizard}
      />
      <AddImportGuestModal
        event={event}
        openAddImportGuestModal={openAddImportGuestModal}
        setOpenAddImportGuestModal={setOpenAddImportGuestModal}
      />
      <div className="event-container">
        <div className="event-cover-photo-container">
          <img
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="event cover"
          />
        </div>
        <div className="event-details-container">
          <div className="event-details-box">
            <div className="event-profile-photo-container">
              <img
                src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/28/2018/08/34365_1Julia-Jane-Studios-for-My-Mystic-Wedding_001-1200x800.jpg"
                alt="event-profile-photo"
              />
            </div>
            <div className="event-title">
              <h1>{event.eventName}</h1>
            </div>
            <div className="event-description">
              <p>{event.description}</p>
            </div>
            <div className="event-date">
              <span>
                <CalendarOutlined />
                Event Date: <span>{event.eventDate}</span>
              </span>
            </div>
          </div>
          <div className="event-actions-box">
            <Button onClick={() => setOpenAddImportGuestModal(true)}>
              <PlusSquareOutlined />
              Add/Import Guest
            </Button>
            <Button>
              <BarsOutlined />
              Set/Edit Questions
            </Button>
            <Button>
              <EditOutlined />
              Edit Event Details
            </Button>
            <Button onClick={() => setOpenAppSetupWizard(true)}>
              <SettingOutlined />
              App Setup
            </Button>
          </div>
        </div>
        <div className="event-content-container">
          <EventTabs />
        </div>
      </div>
    </HomeLayout>
  );
};

export default EventDetails;
