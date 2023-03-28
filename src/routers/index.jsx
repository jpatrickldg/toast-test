import React from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import ActivityLogs from "../pages/activityLogs";
import Collections from "../pages/collections";
import Dashboard from "../pages/dashboard";
import EventDetails from "../pages/eventDetails";
import EventsHome from "../pages/eventsHome";
import Gallery from "../pages/gallery";
import Payments from "../pages/payments";
import Portfolio from "../pages/portfolio";
import Settings from "../pages/settings";
import Subscription from "../pages/subscription";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<EventsHome />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/activity-logs" element={<ActivityLogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default Routers;
