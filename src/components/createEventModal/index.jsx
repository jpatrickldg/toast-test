import React, { useState } from "react";
import "./CreateEventModal.scss";
import { Modal, Steps, Button } from "antd";
import CreateEventForm from "../createEventForm";
import { LeftOutlined } from "@ant-design/icons";

const steps = [
  {
    title: "Create Event",
    description: "This is a description",
    content: <CreateEventForm />,
  },
  {
    title: "Select Package",
    description: "This is a description",
    content: <CreateEventForm />,
  },
  {
    title: "Add Team",
    description: "This is a description",
  },
  {
    title: "Add Guest",
    description: "This is a description",
  },
];

const CreateEventModal = ({ open, setOpen }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prevState) => prevState + 1);
  };

  const prev = () => {
    setCurrent((prevState) => prevState - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <Modal
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1088}
      footer={null}
    >
      <Steps progressDot current={current} items={items} direction="vertical" />
      <div className="steps-container">
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-navigation">
          {current > 0 && (
            <Button type="text" onClick={() => prev()}>
              <LeftOutlined />
              Back
            </Button>
          )}
          {/* {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => console.log("Processing complete!")}
            >
              Done
            </Button>
          )} */}
          {current < steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => next()}
              style={{ fontWeight: "700" }}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default CreateEventModal;