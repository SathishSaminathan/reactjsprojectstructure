import React, { Component } from "react";
import { Modal, Button, Row, Input, Col, Select, Form } from "antd";
import { connect } from "react-redux";

import UploadImage from "components/shared/UploadImage/UploadImage";
import { Notifications, Services, LocalStorage } from "constants/AppConstants";
import { showNotifications } from "components/shared/NotificationComponent";
import { ProjectServices, OnboardServices } from "services";
import Storage from "utilities/LocalStorageHelper";
import { getUser } from "utilities/UserHelper";
import { setUser } from "store/action";

class CreateCompanyModal extends Component {
  constructor(props) {
    super(props);

    this._projectService = new ProjectServices();
    this._userService = new OnboardServices();
    this._storage = new Storage();

    this.state = {
      isLoading: false,
      companyName: null,
      phoneNumber: null,
      landlineNumber: null,
      email: null,
      addressLine: null,
      landmark: null,
      city: null,
      state: null,
      zipCode: null,
      country: null,
      logoId: null,
      visible: false
    };
  }

  componentDidMount() {
    this.checkIfCompanyRegistered();
  }

  checkIfCompanyRegistered = () => {
    if (
      !(this.props.currentUser && this.props.currentUser.isCompanyRegistered)
    ) {
      this.setState({ visible: true });

      this._projectService
        .projectServices(
          Services.DashboardVariables.GET_COMPANY,
          this.props.accessToken,
          this.props.currentUser.companyId
        )
        .then(res => {
          console.log("get company", res.data.companyName);
          this.setState(
            {
              companyName: res.data.companyName,
              email: res.data.email,
              landlineNumber: res.data.landlineNumber,
              phoneNumber: res.data.phoneNumber,
              addressLine: res.data.addressLine,
              landmark: res.data.landmark,
              city: res.data.city,
              state: res.data.state,
              zipCode: res.data.zipCode,
              country: res.data.country
            },
            () => console.log("working", this.state.companyName)
          );
        });
    }
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    this.setState({ isLoading: true });

    const data = {
      companyName: this.state.companyName,
      phoneNumber: this.state.phoneNumber,
      landlineNumber: this.state.landlineNumber,
      email: this.state.email,
      addressLine: this.state.addressLine,
      landmark: this.state.landmark,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      country: this.state.country,
      logoId: this.state.logoId
    };
    console.log("data....", data);
    this._projectService
      .projectServices(
        Services.DashboardVariables.UPDATE_COMPANY,
        this.props.accessToken,
        data,
        this.props.currentUser.companyId
      )
      .then(res => {
        console.log(res);
        showNotifications(
          Notifications.SUCCESS,
          "Success",
          "Your Company Successfully Registered!!"
        );
        getUser().then(res => {
          this._storage.store(LocalStorage.USER, JSON.stringify(res.data));
          this.props.setUser(res.data);
        });
        this.setState({
          visible: false
        });
      });

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleImage = info => {
    console.log("checking....", info);
    this.setState({
      logoId: info
    });
  };

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
    const { getFieldDecorator } = this.props.form;
    const {
      isLoading,
      addressLine,
      city,
      country,
      landmark,
      zipCode,
      companyName,
      email,
      state,
      phoneNumber,
      landlineNumber,
      logoId
    } = this.state;

    return (
      <div>
        <Modal
          destroyOnClose
          key={1}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={
            <Button
              htmlType="submit"
              type="primary"
              onClick={this.handleSubmit.bind(this)}
              loading={isLoading}
            >
              Create
            </Button>
          }
          width="600px"
          style={{ maxHeight: "40px" }}
        >
          <h3
            className="font-600 mb-20"
            style={{ textAlign: "center", color: "#2da01c" }}
          >
            Register Your Company
          </h3>
          <Row>
            <Col>
              <Form>
                <Row type="flex" justify="center">
                  <div className="mt-5">
                    <Form.Item>
                      {getFieldDecorator("projectimageId", {
                        initialValue: logoId
                      })(
                        <UploadImage
                          handleImage={this.handleImage}
                          text="Upload Logo"
                          onChange={e =>
                            this.setState({ projectimageId: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </div>
                </Row>
                <Row gutter={16} className="mt-5">
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">Company Name :</label>
                    <Form.Item>
                      {getFieldDecorator("companyname", {
                        initialValue: companyName,
                        rules: [
                          {
                            required: true,
                            message: "Enter your Company Name!"
                          }
                        ]
                      })(
                        <Input
                          placeholder="Company Name"
                          onChange={e =>
                            this.setState({ companyName: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">Phone Number :</label>
                    <Form.Item>
                      {getFieldDecorator("phoneNumber", {
                        initialValue: phoneNumber,
                        rules: [
                          {
                            required: true,
                            message: "Enter your Phone Number!"
                          },
                          {
                            pattern: new RegExp("^[0-9]*$"),
                            message: "Enter Numbers onlys"
                          }
                        ]
                      })(
                        <Input
                          placeholder="Phone Number"
                          onChange={e =>
                            this.setState({ phoneNumber: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">Landline Number :</label>
                    <Form.Item>
                      {getFieldDecorator("lindlinenumber", {
                        initialValue: landlineNumber,
                        rules: [
                          {
                            required: true,
                            message: "Enter your Land Line Number!"
                          },
                          {
                            pattern: new RegExp("^[0-9]*$"),
                            message: "Enter Numbers onlys"
                          }
                        ]
                      })(
                        <Input
                          className="mt-5"
                          placeholder="Landline Number"
                          onChange={e =>
                            this.setState({ landlineNumber: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">Email ID :</label>
                    <Form.Item>
                      {getFieldDecorator("emailid", {
                        initialValue: email,
                        rules: [
                          {
                            required: true,
                            message: "Enter your Email Id!"
                          },
                          {
                            type: "email",
                            message: "Enter Validate Email"
                          }
                        ]
                      })(
                        <Input
                          className="mt-5"
                          placeholder="Email ID"
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">Address :</label>
                    <Form.Item>
                      {getFieldDecorator("address", {
                        initialValue: addressLine,
                        rules: [
                          {
                            initialValue: this.state.addressLine
                          },
                          {
                            required: true,
                            message: "Enter your Address!"
                          }
                        ]
                      })(
                        <Input
                          className="mt-5"
                          placeholder="Address"
                          onChange={e =>
                            this.setState({ addressLine: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">Landmark :</label>
                    <Form.Item>
                      {getFieldDecorator("landmark", {
                        initialValue: landmark,
                        rules: [
                          {
                            initialValue: this.state.landmark
                          },
                          {
                            required: true,
                            message: "Enter your Landmark!"
                          }
                        ]
                      })(
                        <Input
                          className="mt-5"
                          placeholder="Landmark"
                          onChange={e =>
                            this.setState({ landmark: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">City :</label>
                    <Form.Item>
                      {getFieldDecorator("city", {
                        initialValue: city,
                        rules: [
                          {
                            initialValue: this.state.city
                          },
                          {
                            required: true,
                            message: "Enter your City!"
                          }
                        ]
                      })(
                        <Input
                          className="mt-5"
                          placeholder="City"
                          onChange={e =>
                            this.setState({ city: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">State :</label>
                    <Form.Item>
                      {getFieldDecorator("state", {
                        initialValue: state,
                        rules: [
                          {
                            initialValue: this.state.state
                          },
                          {
                            required: true,
                            message: "Enter your State!"
                          }
                        ]
                      })(
                        <Input
                          className="mt-5"
                          placeholder="State"
                          onChange={e =>
                            this.setState({ state: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">Zip Code :</label>
                    <Form.Item>
                      {getFieldDecorator("zipcode", {
                        initialValue: zipCode,
                        rules: [
                          {
                            required: true,
                            message: "Enter your Zip Code!"
                          },
                          {
                            pattern: new RegExp("^[0-9]*$"),
                            message: "Enter Numbers Only"
                          }
                        ]
                      })(
                        <Input
                          className="mt-5"
                          placeholder="Zip Code"
                          onChange={e =>
                            this.setState({ zipCode: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">Country :</label>
                    <Form.Item>
                      {getFieldDecorator("country", {
                        initialValue: country,
                        rules: [
                          {
                            required: true,
                            message: "Enter your Country!"
                          }
                        ]
                      })(
                        <Input
                          className="mt-5"
                          placeholder="Country"
                          onChange={e =>
                            this.setState({ country: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                {/* <Row>
                  <label className="font-600">*Project Description :</label>
                  <Form.Item>
                    {getFieldDecorator("projectDescription", {
                      rules: [
                        {
                          required: true,
                          message: "Enter your project Description!"
                        }
                      ]
                    })(
                      <TextArea
                        className="mt-5"
                        rows={4}
                        onChange={e =>
                          this.setState({ projectDescription: e.target.value })
                        }
                      />
                    )}
                  </Form.Item>
                </Row> */}
              </Form>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

const CreateProject = Form.create()(CreateCompanyModal);

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
    accessToken: user.accessToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
