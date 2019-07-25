import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  Table,
  Switch,
  Button,
  Row,
  Icon,
  Input,
  Col,
  Form,
  InputNumber,
  Modal,
  Select
} from "antd";
import { Link } from "react-router-dom";
import CreateLocationModal from "components/Location/AddLocationModal";
import MultipleSelectImage from "components/shared/MulitpleSelectImage";

const data = [
  {
    key: "1",
    sno: "1",
    name: "Airport",
    age: "1a,2d,4b",
    address: "Interior",
    loc: "live Location",
    desc: "Chennai domestic terminal... "
  },
  {
    key: "2",
    sno: "2",
    name: "Hospital",
    age: "2a,3d,6c",
    address: "Exterior",
    loc: "live Location",
    desc: "KMCH Hospital"
  },
  {
    key: "3",
    sno: "3",
    name: "Restaurant",
    age: "3c,4d,5a",
    address: "Interior",
    loc: "live Location",
    desc: "Jennys Residency"
  },
  {
    key: "4",
    sno: "4",
    name: "House",
    age: "4a,7c,8d",
    address: "Exterior",
    desc: "Yet to be confirmed",
    loc: "Yet to be confirmed"
  }
];
class Location extends Component {
  state = { visible: false };

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
    const columns = [
      {
        title: "S No",
        dataIndex: "sno",
        align: "center"
      },
      {
        title: "Scene Location",
        dataIndex: "name",
        align: "center"
      },
      {
        title: "Scene No",
        dataIndex: "age",
        align: "center"
      },
      {
        title: "Actual Location",
        dataIndex: "desc",
        align: "center"
      },
      {
        title: "Type",
        dataIndex: "loc",
        align: "center"
      },
      {
        title: "Status",
        dataIndex: "status",
        align: "center",
        render: (e, record) => <Switch defaultChecked />
      },
      {
        // title: "Action",
        key: "action",
        align: "center",
        render: (text, record) => (
          <div>
            <Button type="link" onClick={this.showModal}>
              Update
            </Button>
          </div>
        )
      }
    ];

    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const { TextArea } = Input;
    return (
      <div>
        <div style={{ paddingBottom: "10px" }}>
          <CreateLocationModal />
        </div>
        <Table columns={columns} dataSource={data} pagination={false} />;
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
          <h3
            className="font-600 mb-20"
            style={{ textAlign: "center", color: "#2da01c" }}
          >
            Update Location
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
                <Form.Item>
                  {getFieldDecorator("geolocation", {
                    rules: [
                      {
                        required: true,
                        message: "Enter Geo Location!"
                      }
                    ]
                  })(<Input addonAfter={<Icon type="environment" />} />)}
                </Form.Item>
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
const locationpop = Form.create()(Location);
export default locationpop;
