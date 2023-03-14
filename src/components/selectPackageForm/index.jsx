import { Form, Radio } from "antd";
import React from "react";
import PackageCard from "../packageCard";
import "./SelectPackageForm.scss";

// const onFinish = (values) => {
//   console.log("Success:", values);
// };

const SelectPackageForm = () => {
  // const [form] = Form.useForm();
  return (
    <>
      <div className="select-package-title-container">
        <h1 className="title">Select Package</h1>
        <div className="subtitle">Choose the right package for your needs</div>
      </div>
      <div className="select-package-step">
        <Form.Item>
          <Radio.Group>
            <Radio.Button value="free trial">
              <PackageCard packageName="Free Trial" />
            </Radio.Button>
            <Radio.Button value="standard">
              <PackageCard packageName="Standard" />
            </Radio.Button>
            <Radio.Button value="enterprise">
              <PackageCard packageName="Enterprise" />
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
      </div>
    </>
  );
};

export default SelectPackageForm;
