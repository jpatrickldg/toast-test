import React, { useState } from "react";
import "./CreateEventModal.scss";
import { Modal, Steps, Button, Form } from "antd";
import CreateEventForm from "../createEventForm";
import { LeftOutlined } from "@ant-design/icons";
import SelectPackageForm from "../selectPackageForm";
import BillingInfo from "../billingInfo";

const steps = [
  {
    title: "Create Event",
    description: "This is a description",
    content: <CreateEventForm />,
  },
  {
    title: "Select Package",
    description: "This is a description",
    content: <SelectPackageForm />,
  },
  {
    title: "Billing Info",
    description: "This is a description",
    content: <BillingInfo />,
  },
  {
    title: "Add Guest",
    description: "This is a description",
  },
];

const onFinish = (values) => {
  console.log("Success:", values);
};

const CreateEventModal = ({
  openCreateEventWizard,
  setOpenCreateEventWizard,
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

  return (
    <Modal
      className="create-event-wizard-modal"
      centered
      open={openCreateEventWizard}
      onOk={() => setOpenCreateEventWizard(false)}
      onCancel={() => setOpenCreateEventWizard(false)}
      width={1088}
      footer={null}
    >
      <Form
        form={form}
        onFinish={onFinish}
        className="create-event-package-form"
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

export default CreateEventModal;
