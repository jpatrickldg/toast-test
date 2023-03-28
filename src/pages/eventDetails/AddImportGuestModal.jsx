import { UploadOutlined } from "@ant-design/icons";
import { Modal, Form, Button, Upload, message } from "antd";
import "./AddImportGuestModal.scss";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { useState } from "react";

const AddImportGuestModal = ({
  openAddImportGuestModal,
  setOpenAddImportGuestModal,
}) => {
  const [form] = Form.useForm();
  const [convertedFile, setConvertedFile] = useState(null);

  const handleFileUpload = (event) => {
    console.log(event.file);
    if (event.file && event.file.status !== "removed") {
      if (event.file.type === "text/csv") {
        csvToJson(event.file);
      } else if (
        event.file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        xlsxToJson(event.file);
      }
    }
  };

  const csvToJson = (file) => {
    Papa.parse(file, {
      complete: function (results) {
        console.log("Finished:", results.data);
        const json = results.data.map((result) => {
          return {
            first_name: result[0],
            last_name: result[1],
            email: result[2],
            mobile_number: result[3],
            relationship: result[4],
            role: result[5],
            priority: result[6],
          };
        });
        setConvertedFile(json);
      },
    });
  };

  const xlsxToJson = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      setConvertedFile(json);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = () => {
    message.success("File uploaded");
    console.log(convertedFile);
  };

  return (
    <Modal
      className="add-import-guest-modal"
      centered
      width={700}
      open={openAddImportGuestModal}
      onOk={() => setOpenAddImportGuestModal(false)}
      onCancel={() => setOpenAddImportGuestModal(false)}
      footer={null}
    >
      <div className="add-import-guest-title-container">
        <h1 className="title">Guests</h1>
        <p className="subtitle">Import guest list below</p>
      </div>
      <Form
        form={form}
        onFinish={handleSubmit}
        className="add-import-guest-form"
        layout="vertical"
      >
        <Form.Item
          name="guestsListFile"
          valuePropName="fileList"
          getValueFromEvent={(event) => {
            return event?.fileList;
          }}
          rules={[
            {
              required: true,
              message: "Please upload a file",
            },
          ]}
        >
          <Upload
            accept="text/csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            maxCount={1}
            showUploadList={{}}
            onRemove={() => setConvertedFile(null)}
            beforeUpload={() => {
              // stop automatic upload when file is selected
              return false;
            }}
            onChange={handleFileUpload}
          >
            <Button className="upload-button">
              <UploadOutlined /> Upload File
            </Button>
            <span>File must be in Excel sheet or CSV file format</span>
          </Upload>
        </Form.Item>
        <Form.Item className="submit">
          <Button
            block
            type="primary"
            htmlType="submit"
            disabled={!convertedFile}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddImportGuestModal;
