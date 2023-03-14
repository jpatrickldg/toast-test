import { DatePicker, Form, Input } from "antd";
import React from "react";
import "./CreditCardDetailsForm.scss";

const monthFormat = "MM/YYYY";

const CreditCardDetailsForm = () => {
  return (
    <>
      <div className="credit-card-details-title-container">
        <h1 className="title">Credit Card Details</h1>
        <p className="subtitle">Please enter your credit card details</p>
      </div>

      <div className="credit-card-details-step">
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
        <div className="expiration-and-cvc-container">
          <Form.Item
            name="cardExpirationDate"
            label="Expiration Date"
            required
            hasFeedback
            // rules={[
            //   {
            //     required: true,
            //     message: "Please enter card number",
            //   },
            // ]}
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
    </>
  );
};

export default CreditCardDetailsForm;
