import React, { Component } from "react";
import { Modal, Button, Row, Input, Col, Select, Form } from "antd";
import { connect } from "react-redux";

import "./CreateProject.css";
import UploadImage from "components/shared/UploadImage/UploadImage";
import { Services, Notifications } from "constants/AppConstants";
import { OnboardServices } from "services";
import { showNotifications } from "components/shared/NotificationComponent";

const { Option } = Select;

class reset extends Component {
  constructor(props) {
    super(props);
    this.onboardservices = new OnboardServices();
    this.state = {
      visible: false,
      oldPassword: null,
      Newpassword: null,
      Renter: null,
      formValues: null,
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  componentDidMount() {
    this.checkIfCompanyRegistered();
  }

  checkIfCompanyRegistered = () => {
    if (
      this.props.currentUser &&
      this.props.currentUser.isSystemGeneratedPassword
    ) {
      this.showModal();
    }
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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

  handleImage = url => {
    console.log(url);
  };
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const data = {
          newPassword: btoa(values.password),
          oldPassword: btoa(values.oldpassword)
        };
        console.log("data....", data);

        this.onboardservices
          .onboardService(
            Services.OnboardVariables.RESET_PASSWORD,
            data,
            console.log("hai iam there", data)
          )
          .then(response => {
            // this.setState({ isLoading: false, visible: false });
            showNotifications(Notifications.SUCCESS, "Password Created !");
          });
      }
    });
  };

  render() {
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
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
              onClick={this.handleSubmit}
            >
              Reset
            </Button>
          }
          width={["300px"]}
          style={{ maxHeight: "40px" }}
        >
          <h2 className="font-600 mb-20" style={{ textAlign: "center" }}>
            Reset Password
          </h2>
          <Row>
            <Col>
              <Form>
                <Form.Item label=" Old Password" hasFeedback>
                  {getFieldDecorator("oldpassword", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your old password!"
                      }
                    ]
                  })(<Input.Password placeholder="Enter Old Password" />)}
                </Form.Item>
                <Form.Item label="New Password" hasFeedback>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your new password!"
                      },
                      {
                        validator: this.validateToNextPassword
                      }
                    ]
                  })(<Input.Password placeholder="Enter New Password" />)}
                </Form.Item>
                <Form.Item label="Confirm Password" hasFeedback>
                  {getFieldDecorator("confirm", {
                    rules: [
                      {
                        required: true,
                        message: "Please confirm your password!"
                      },
                      {
                        validator: this.compareToFirstPassword
                      }
                    ]
                  })(
                    <Input.Password
                      placeholder="Re-enter Password"
                      onBlur={this.handleConfirmBlur}
                    />
                  )}
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

const Resetpassword = Form.create()(reset);

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  };
};

export default connect(
  mapStateToProps,
  null
)(Resetpassword);
