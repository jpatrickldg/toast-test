import React from "react";
import "./EventCoverStep.scss";
import coverPhoto from "../../../images/Event-Cover.jpeg";

const EventCoverStep = () => {
  return (
    <div className="event-cover-step-container">
      <div className="form-container">test</div>
      <div className="preview-container">
        <div
          className="preview-box"
          style={{
            backgroundImage: `url(${coverPhoto})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "250px",
            height: "520px",
          }}
        >
          <div
            className="container"
            style={{
              background: "white",
              position: "relative",
              margin: "auto",
              marginTop: "72px",
              width: "220px",
              height: "150px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default EventCoverStep;
