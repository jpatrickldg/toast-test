import React, { useState } from "react";
import "./AppSetupWizard.scss";
import { Modal, Steps, Button, Form } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import EventCoverStep from "./eventCoverStep";

const steps = [
  {
    title: "Event Cover Photo",
    description: "This is a description",
    content: <EventCoverStep />,
  },
  {
    title: "Invitation",
    description: "This is a description",
  },
  {
    title: "Event Details",
    description: "This is a description",
  },
  {
    title: "Event Instructions",
    description: "This is a description",
  },
  {
    title: "Congratulate Guest",
    description: "This is a description",
  },
];

const onFinish = (values) => {
  console.log("Success:", values);
};

const AppSetupWizard = ({
  event,
  openAppSetupWizard,
  setOpenAppSetupWizard,
}) => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

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

  console.log(event);

  return (
    <Modal
      centered
      open={openAppSetupWizard}
      onOk={() => setOpenAppSetupWizard(false)}
      onCancel={() => setOpenAppSetupWizard(false)}
      width={1088}
      footer={null}
    >
      <Form
        form={form}
        onFinish={onFinish}
        className="app-setup-form"
        layout="vertical"
      >
        <Steps
          progressDot
          current={current}
          items={items}
          direction="vertical"
        />
        <div className="steps-container">
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-navigation">
            {current > 0 && (
              <Button type="text" onClick={() => prev()}>
                <LeftOutlined />
                Back
              </Button>
            )}
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
      </Form>
    </Modal>
  );
};

export default AppSetupWizard;
