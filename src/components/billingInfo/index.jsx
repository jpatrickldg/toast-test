import { DatePicker, Form, Input } from "antd";
import React from "react";
import "./BillingInfo.scss";

const monthFormat = "MM/YYYY";

const BillingInfo = () => {
  return (
    <>
      <div className="billing-info-title-container">
        <h1 className="title">Billing Info</h1>
        <p className="subtitle">
          Please enter your correct billing information
        </p>
      </div>

      <div className="billing-info-step">
        <div className="billing-info-box">
          <Form.Item
            name="billingName"
            label="Full Name"
            required
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please enter billing info name",
              },
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
          <span className="billing-address-label">Billing Address</span>
          <Form.Item
            name="billingStreetAddress"
            label="Street"
            required
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please enter billing street",
              },
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Enter street address" />
          </Form.Item>
          <Form.Item
            name="billingCity"
            label="City"
            required
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please enter billing city",
              },
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Enter city" />
          </Form.Item>
          <div className="side-by-side-container">
            <Form.Item
              name="billingState"
              label="State"
              required
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please enter State",
                },
                {
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="State" />
            </Form.Item>
            <Form.Item
              name="billingZipCode"
              label="Zip Code"
              required
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please enter Zip Code",
                },
                {
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Zip Code" />
            </Form.Item>
          </div>
        </div>
        <div className="card-details-box">
          <Form.Item
            name="cardHolderName"
            label="Card Holder Name"
            required
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please enter card holder name",
              },
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Enter card holder name" />
          </Form.Item>
          <Form.Item
            name="creditDebitCardNo"
            label="Credit/Debit Card Number"
            required
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please enter card number",
              },
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Enter card number" />
          </Form.Item>
          <div className="side-by-side-container">
            <Form.Item
              name="cardExpirationDate"
              label="Expiration Date"
              required
              hasFeedback
            >
              <DatePicker
                format={monthFormat}
                picker="month"
                placeholder={monthFormat}
              />
            </Form.Item>
            <Form.Item
              name="cardCVC"
              label="CVC"
              required
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please enter CVC",
                },
                {
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="CVC" />
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingInfo;
