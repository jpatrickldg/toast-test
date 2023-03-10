import { CloudUploadOutlined, PlusOutlined } from "@ant-design/icons";
import { DatePicker, Form, Input, Upload, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import "./CreateEventForm.scss";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const CreateEventForm = () => {
  const [form] = Form.useForm();
  return (
    <>
      <div className="create-event-title-container">
        <h1 className="title">Create Event</h1>
        <p className="subtitle">You can customize this details in settings</p>
      </div>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="create-event-form"
      >
        <Form.Item name="eventCoverPhoto">
          <Upload listType="text">
            <Button className="upload-input-content">
              <CloudUploadOutlined
                style={{
                  fontSize: "30px",
                }}
              />
              <div>
                <span>Upload Cover Image</span>
              </div>
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="eventName"
          label="Event Name"
          required
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please enter event name",
            },
            {
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Enter event name here" />
        </Form.Item>
        <Form.Item
          name="eventDate"
          label="Event Date"
          required
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please enter event date",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item name="eventDescription" label="Description">
          <TextArea placeholder="Optional" rows={4} />
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateEventForm;
