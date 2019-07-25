import React, { Component } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Row,
  Col,
  Select,
  InputNumber,
  Icon
} from "antd";
import MultipleSelectImage from "components/shared/MulitpleSelectImage";

class AddLocationModal extends Component {
  state = { visible: false };

  googleMap = e => {
    this.setState({ visible: false });
  };

  showModal = () => {
    console.log("show");
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
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const { TextArea } = Input;
    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}
          icon="plus"
          style={{ marginBottom: "10px" }}
        >
          Add Location
        </Button>
        <Modal
          destroyOnClose
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={700}
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
          <h3 className="font-600 mb-20 text-center primary-font-color">
            Add Location
          </h3>
          <Form>
            <Row gutter={16} className="mt-5">
              <Col xl={{ span: 12 }}>
                <label className="font-600" label="Username">
                  Scene Location :
                </label>
                <Form.Item>
                  {getFieldDecorator("scenelocation", {
                    rules: [
                      { required: true, message: "Enter your Scene Location!" },
                      {
                        pattern: new RegExp("^[A-Za-z]*$"),
                        message: "Enter Alphabets onlys"
                      }
                    ]
                  })(<Input placeholder="Scene Location" />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 12 }}>
                <label className="font-600">Actual Location :</label>
                <Form.Item>
                  {getFieldDecorator("actuallocation", {
                    rules: [
                      { required: true, message: "Enter your Actual Location!" }
                    ]
                  })(<Input placeholder="Actual Location" />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 12 }}>
                <label className="font-600">Location Type :</label>
                <Form.Item>
                  {getFieldDecorator("locationtype", {
                    initialValue: "Select Location Type",
                    rules: [
                      { required: true, message: "Enter your Actual Location!" }
                    ]
                  })(
                    <Select className="w-100">
                      <Option value="Live">Live</Option>
                      <Option value="Location">Location</Option>
                      <Option value="Live and Set">Live and Set</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col xl={{ span: 12 }}>
                <label className="font-600">Contact Person :</label>
                <Form.Item>
                  {getFieldDecorator("contactperson", {
                    rules: [
                      {
                        required: true,
                        message: "Enter your contact person name!"
                      }
                    ]
                  })(<Input placeholder="Contact Person Name" />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 12 }}>
                <label className="font-600">Contact Number :</label>
                <Form.Item>
                  {getFieldDecorator("contactnumber", {
                    rules: [
                      {
                        required: true,
                        message: "Enter your contact number!"
                      }
                    ]
                  })(
                    <InputNumber
                      placeholder="Contact Number"
                      style={{ width: "100%" }}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col xl={{ span: 12 }}>
                <label className="font-600">Rent/Hire (Shoot Day) :</label>
                <Form.Item>
                  {getFieldDecorator("shootday", {
                    rules: [
                      {
                        required: true,
                        message: "Enter your Amount!"
                      }
                    ]
                  })(
                    <Input
                      placeholder="Enter Amount"
                      addonAfter={
                        <Select defaultValue="Select Type" className="w-100">
                          <Option value="Per Day">Per Day</Option>
                          <Option value="Per Shift">Per Shift</Option>
                          <Option value="Per Hour">Per Hour</Option>
                        </Select>
                      }
                    />
                  )}
                </Form.Item>
              </Col>
              <Col xl={{ span: 12 }}>
                <label className="font-600">Rent/Hire (Set Work Day) :</label>
                <Form.Item>
                  {getFieldDecorator("shootday", {
                    rules: [
                      {
                        required: true,
                        message: "Enter your Amount!"
                      }
                    ]
                  })(
                    <Input
                      placeholder="Enter Amount"
                      addonAfter={
                        <Select defaultValue="Select Type" className="w-100">
                          <Option value="Per Day">Per Day</Option>
                          <Option value="Per Shift">Per Shift</Option>
                          <Option value="Per Hour">Per Hour</Option>
                        </Select>
                      }
                    />
                  )}
                </Form.Item>
              </Col>
              <Col xl={{ span: 12 }}>
                <label className="font-600">Geo Tag/Google Location :</label>
                <Row gutter={0}>
                  <Col span={22}>
                    <Form.Item>
                      {getFieldDecorator("vfx", {})(<Input />)}
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <div
                      onClick={this.googleMap}
                      style={{
                        border: "1px solid #e3e3e3",
                        backgroundColor: "#2da01c",
                        color: "#fff",
                        marginLeft: "-10px",
                        height: "34px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        marginTop: "3px"
                      }}
                    >
                      <Icon type="environment" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xl={{ span: 12 }}>
                <label className="font-600">Status :</label>
                <Form.Item>
                  {getFieldDecorator("locationstatus", {
                    rules: [
                      { required: true, message: "Enter your Actual Location!" }
                    ]
                  })(
                    <Select placeholder="Status" className="w-100">
                      <Option value="Approved">Approved</Option>
                      <Option value="Negotiation">Negotiation</Option>
                      <Option value="Rejected">Rejected</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col xl={{ span: 12 }}>
                <label className="font-600">Address :</label>
                <Form.Item>
                  {getFieldDecorator("locationtaddress", {
                    rules: [
                      {
                        required: true,
                        message: "Enter your Location Address!"
                      }
                    ]
                  })(<TextArea placeholder="Address" rows={4} />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <label className="font-600">Photos</label>
              <MultipleSelectImage />
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
}

const CreateLocationModal = Form.create()(AddLocationModal);
export default CreateLocationModal;
