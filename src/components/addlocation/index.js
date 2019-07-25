import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Input, Row, Col, Select, Icon, Button } from "antd";
import "./addloc.css";
import MultipleSelectImage from "components/shared/MulitpleSelectImage";

const { Option } = Select;
class Addlocation extends Component {
  state = {
    formvalues: null,
    projectimage: []
  };

  componentDidMount() {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.setState({
          formvalues: values
        });
      }
    });
  };

  handleImage = url => {
    console.log(url);

    this.setState({
      projectimage: url
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row>
          <Col xl={{ span: 18, offset: 3 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <Row>
              <Col xl={{ span: 10, offset: 10 }} sm={{ span: 10, offset: 9 }}>
                <div
                  style={{
                    color: "#2da01c",
                    marginBottom: "10px",
                    fontSize: "20px"
                  }}
                >
                  Add New Location
                </div>
              </Col>
            </Row>

            <Form onSubmit={this.handleSubmit}>
              <Row gutter={16}>
                <Col xl={{ span: 12 }} xs={{ span: 23 }} sm={{ span: 12 }}>
                  <div style={{ fontWeight: "600" }}>
                    <label>Location Category</label>
                  </div>

                  <Form.Item>
                    {getFieldDecorator("locationcategory", {
                      rules: [
                        {
                          required: true,
                          message: "Please select localation category!"
                        }
                      ]
                    })(
                      <Select placeholder="Please select location category">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>

                <Col xl={{ span: 12 }} xs={{ span: 23 }} sm={{ span: 12 }}>
                  <div style={{ fontWeight: "600" }}>
                    <label>Location Sub Category</label>
                  </div>

                  <Form.Item>
                    {getFieldDecorator("locationsubcategory", {
                      rules: [
                        {
                          required: true,
                          message: "Please select localation sub category!"
                        }
                      ]
                    })(
                      <Select placeholder="Please select location sub category">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>

                <Col xl={{ span: 12 }} xs={{ span: 23 }} sm={{ span: 12 }}>
                  <div style={{ fontWeight: "600" }}>
                    <label>Location Name</label>
                  </div>
                  <Form.Item>
                    {getFieldDecorator("locationname", {
                      rules: [
                        {
                          required: true,
                          message: "Please enter your location name!"
                        }
                      ]
                    })(<Input type="text" placeholder="Location Name" />)}
                  </Form.Item>
                </Col>

                <Col xl={{ span: 12 }} xs={{ span: 23 }} sm={{ span: 12 }}>
                  <div style={{ fontWeight: "600" }}>
                    <label>Address1</label>
                  </div>
                  <Form.Item>
                    {getFieldDecorator("address1", {
                      rules: [
                        {
                          required: true,
                          message: "Please enter your Address!"
                        }
                      ]
                    })(<Input type="text" placeholder="Address1" />)}
                  </Form.Item>
                </Col>

                <Col xl={{ span: 12 }} xs={{ span: 23 }} sm={{ span: 12 }}>
                  <div style={{ fontWeight: "600" }}>
                    <label>Address2</label>
                  </div>
                  <Form.Item>
                    {getFieldDecorator("address2", {
                      rules: [
                        {
                          required: true,
                          message: "Please enter your Address!"
                        }
                      ]
                    })(<Input type="text" placeholder="Address1" />)}
                  </Form.Item>
                </Col>

                <Col xl={{ span: 12 }} xs={{ span: 23 }} sm={{ span: 12 }}>
                  <div style={{ fontWeight: "600" }}>
                    <label>City</label>
                  </div>
                  <Form.Item>
                    {getFieldDecorator("city", {
                      rules: [
                        { required: true, message: "Please enter your City!" }
                      ]
                    })(<Input type="text" placeholder="city" />)}
                  </Form.Item>
                </Col>

                <Col xl={{ span: 12 }} xs={{ span: 23 }} sm={{ span: 12 }}>
                  <div style={{ fontWeight: "600" }}>
                    <label>State</label>
                  </div>
                  <Form.Item>
                    {getFieldDecorator("state", {
                      rules: [
                        { required: true, message: "Please enter your State!" }
                      ]
                    })(<Input type="text" placeholder="State" />)}
                  </Form.Item>
                </Col>

                <Col xl={{ span: 12 }} xs={{ span: 23 }} sm={{ span: 12 }}>
                  <div style={{ fontWeight: "600" }}>
                    <label>Country</label>
                  </div>

                  <Form.Item>
                    {getFieldDecorator("country", {
                      rules: [
                        { required: true, message: "Please select country!" }
                      ]
                    })(
                      <Select placeholder="Please select country">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>

                <Col xl={{ span: 12 }} xs={{ span: 23 }} sm={{ span: 12 }}>
                  <div style={{ fontWeight: "600" }}>
                    <label>Contact Person</label>
                  </div>
                  <Form.Item>
                    {getFieldDecorator("contactperson", {
                      rules: [
                        {
                          required: true,
                          message: "Please enter your phonenumber!"
                        }
                      ]
                    })(<Input type="text" placeholder="Phone Number" />)}
                  </Form.Item>
                </Col>

                <Col xl={{ span: 12 }} xs={{ span: 23 }} sm={{ span: 12 }}>
                  <div style={{ fontWeight: "600" }}>
                    <label>Cost Per Day</label>
                  </div>
                  <Form.Item>
                    {getFieldDecorator("costperday", {
                      rules: [
                        { required: true, message: "Please enter cost per day" }
                      ]
                    })(<Input type="text" placeholder="Cost Per Day" />)}
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 24 }} sm={{ span: 24 }}>
                  <div style={{ fontWeight: "600", marginBottom: "10px" }}>
                    <label>Upload Location</label>
                  </div>
                  <Form.Item>
                    {getFieldDecorator("projectimage", {
                      initialValue: this.state.projectimage
                    })(
                      <MultipleSelectImage/>
                      
                    )}
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 2, offset: 22 }} sm={{ span: 2, offset: 20 }}>
                  <Button
                    htmlType="submit"
                    type="primary"
                    onClick={this.handleSubmit}
                  >
                    Create
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
const AddlocationForm = Form.create()(Addlocation);
export default AddlocationForm;
