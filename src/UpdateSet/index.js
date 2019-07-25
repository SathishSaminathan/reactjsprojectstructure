import React, { Component } from "react";
import { Modal, Button, Row, Col, Input, InputNumber, Select } from "antd";
import "./UpdateSet.css";
import MultipleSelectImage from "components/shared/MulitpleSelectImage";
import FileUpload from "components/shared/FileUpload";
import PropTypes from "prop-types";

const { Option } = Select;

class UpdateSet extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { type } = this.props;
    return (
      <div>
        <div onClick={this.showModal}>{type}</div>
        <Modal
          destroyOnClose
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="700px"
          footer={
            <Row
              gutter={12}
              type="flex"
              justify="end"
              style={{ marginTop: "20px" }}
            >
              <Col>
                <Button onClick={this.handleCancel}>Cancel</Button>
              </Col>
              <Col>
                <Button type="primary">Save</Button>
              </Col>
            </Row>
          }
        >
          <h3 className="mb-20 font-600 text-center primary-font-color">
            Ajay House
          </h3>
          <Row>
            <Col xl={{ span: 17 }}>
              <Row gutter={16} className="vertical-center mb-15 ">
                <Col className="text-right" xl={{ span: 10 }}>
                  <label className="pb-5 font-600">Actual Location :</label>
                </Col>
                <Col xl={{ span: 14 }}>
                  <Input value="Gokulam House" />
                </Col>
              </Row>
              <Row gutter={16} className="vertical-center mb-15">
                <Col className="text-right" xl={{ span: 10 }}>
                  <label className="pb-5 font-600">Location Type :</label>
                </Col>
                <Col xl={{ span: 14 }}>
                  <Input value="Set" />
                </Col>
              </Row>
              <Row gutter={16} className="vertical-center mb-15">
                <Col className="text-right" xl={{ span: 10 }}>
                  <label className="pb-5 font-600">Material Purchase :</label>
                </Col>
                <Col xl={{ span: 14 }}>
                  <Input className="w-100" value="75,000" />
                </Col>
              </Row>
              <Row gutter={16} className="vertical-center mb-15">
                <Col className="text-right" xl={{ span: 10 }}>
                  <label className="pb-5 font-600">Material Hire :</label>
                </Col>
                <Col xl={{ span: 14 }}>
                  <Input className="w-100" value="50,000" />
                </Col>
              </Row>
              <Row gutter={16} className="vertical-center mb-15">
                <Col className="text-right" xl={{ span: 10 }}>
                  <label className="pb-5 font-600">Material Hire :</label>
                </Col>
                <Col xl={{ span: 14 }}>
                  <Input className="w-100" value="50,000" />
                </Col>
              </Row>
              <Row gutter={16} className="vertical-center mb-15">
                <Col className="text-right" xl={{ span: 10 }}>
                  <label className="pb-5 font-600">Setup Time Required :</label>
                </Col>
                <Col xl={{ span: 14 }}>
                  <Input
                    className="w-100"
                    value="1"
                    addonAfter={
                      <Select defaultValue="Shift">
                        <Option value="Shift">Shift</Option>
                        <Option value="Hours">Hours</Option>
                      </Select>
                    }
                  />
                </Col>
              </Row>
              <Row gutter={16} className="vertical-center mb-15">
                <Col className="text-right" xl={{ span: 10 }}>
                  <label className="pb-5 font-600">Status :</label>
                </Col>
                <Col xl={{ span: 14 }}>
                  <Select className="w-100" defaultValue="Approved">
                    <Option value="Sent for Review">Sent for Review</Option>
                    <Option value="Approved">Approved</Option>
                    <Option value="Rejected">Rejected</Option>
                  </Select>
                </Col>
              </Row>
              <Row gutter={16} className="vertical-center mb-15">
                <Col className="text-right" xl={{ span: 10 }}>
                  <label className="pb-5 font-600">Upload Document :</label>
                </Col>
                <Col xl={{ span: 14 }}>
                  <FileUpload />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginLeft: "-2px" }}>
            <Col className="text-right" xl={{ span: 7 }}>
              <label className="pb-5 font-600">Upload Image :</label>
            </Col>
            <Col xl={{ span: 17 }} className="imageSelect">
              <MultipleSelectImage />
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default UpdateSet;
