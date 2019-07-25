import React, { Component, Fragment } from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Card,
  Layout
} from "antd";
import { connect } from "react-redux";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Storage from "utilities/LocalStorageHelper";
import TextComponent from "components/shared/TextComponent";
import { OnboardServices } from "services";
import { Services, Notifications, LocalStorage } from "constants/AppConstants";
import { setUser, setAccessToken } from "store/action";
import "./Login.css";
import { handleResponse } from "utilities/HandleResponseHelper";
import { showNotifications } from "components/shared/NotificationComponent";
import { getUser } from "utilities/UserHelper";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this._userService = new OnboardServices();
    this._storage = new Storage();
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.history.push("/");
    }
  }

  state = {
    formLayout: "horizontal",
    isLoading: false,
    isForgotPasswordEnabled: false,
    userName: null,
    password: null
  };

  handleSubmit = e => {
    const { userName, password, isForgotPasswordEnabled } = this.state;

    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      let formusername = values.username;
      let formpassword = btoa(values.password);

      if (!err) {
        this.setState({
          formValue: values,
          userName: formusername,
          password: formpassword
        });

        this.setState({
          isLoading: true
        });
        if (!isForgotPasswordEnabled) {
          const data = {
            userName,
            password: btoa(password)
          };
          this._userService
            .onboardService(Services.OnboardVariables.LOGIN, data)
            .then(res => {
              console.log("response data", res);
              let response = handleResponse(res.status);
              if (response[0].message === Services.OnboardVariables.SUCCESS) {
                // axios.defaults.headers.common["Authorization"] = `Bearer ${
                //   res.data.accessToken
                // }`;
                this._storage.store(
                  LocalStorage.ACCESS_TOKEN,
                  JSON.stringify(res.data.accessToken)
                );
                this.props.setAccessToken(res.data.accessToken);
                this.setState({ isLoading: false }, () => {
                  // this._userService
                  //   .onboardService(
                  //     Services.OnboardVariables.GET_USER_DETAILS,
                  //     null,
                  //     res.data.accessToken
                  //   )
                  //   .then(res => {
                  //     this._storage.store(
                  //       LocalStorage.USER,
                  //       JSON.stringify(res.data)
                  //     );
                  //     this.props.setUser(res.data);
                  //     this.props.history.push("/welcome");
                  //     showNotifications(
                  //       Notifications.SUCCESS,
                  //       "Welcome to ACE",
                  //       "Get your work simplified!!"
                  //     );
                  //   });
                  getUser().then(res => {
                    this._storage.store(
                      LocalStorage.USER,
                      JSON.stringify(res.data)
                    );
                    this.props.setUser(res.data);
                    this.props.history.push("/projects");
                    showNotifications(
                      Notifications.SUCCESS,
                      "Welcome to ACE",
                      "Get your work simplified!!"
                    );
                  });
                });
              } else {
                this._notification.showNotifications(
                  Notifications.ERROR,
                  "No User Found",
                  "Please check the credential!!"
                );
                this.setState({ isLoading: false });
              }
            })
            .catch(err => {
              console.log("err...", err);
              this.setState({
                isLoading: false
              });
              showNotifications(
                Notifications.ERROR,
                "No User Found",
                "Please check the credential!!"
              );
              this.setState({ isLoading: false });
            });
        } else {
          const data = {
            email: userName
          };
          this._userService
            .onboardService(Services.OnboardVariables.FORGOT_PASSWORD, data)
            .then(res => {
              console.log(res.data);
              this.setState({ isLoading: false }, () => {
                this._notification.showNotifications(
                  Notifications.SUCCESS,
                  "Email Sent!",
                  "Check Your Inbox!!"
                );
              });
            })
            .catch(err => {
              console.log("err...", err);
              this.setState({
                isLoading: false
              });
            });
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { formLayout, isLoading, isForgotPasswordEnabled } = this.state;
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 24 }
          }
        : null;
    const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;

    return (
      <div>
        {/* <Layout style={{ minHeight: "100vh" }}> */}
        <div className="loginContainer">
          <TextComponent
            style={{
              position: "absolute",
              top: "15px",
              fontSize: "20px",
              left: "110px",
              fontWeight: "bold"
            }}
          >
            Welcome To{" "}
            <TextComponent style={{ color: "#f44e6f" }}>ACE</TextComponent>
          </TextComponent>

          <Form
            wrapperCol={4}
            onSubmit={this.handleSubmit}
            className="login-form"
          >
            {!isForgotPasswordEnabled ? (
              <Fragment>
                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your username!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Username"
                      onChange={e =>
                        this.setState({ userName: e.target.value })
                      }
                    />
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your Password!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  )}
                </Form.Item>
              </Fragment>
            ) : (
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your username!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                    onChange={e => this.setState({ userName: e.target.value })}
                  />
                )}
              </Form.Item>
            )}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button customButton"
                loading={isLoading}
              >
                {isForgotPasswordEnabled ? "Send Email" : "Log in"}
              </Button>
            </Form.Item>

            <Form.Item>
              <a
                className="login-form-forgot"
                onClick={() =>
                  this.setState({
                    isForgotPasswordEnabled: !this.state.isForgotPasswordEnabled
                  })
                }
              >
                {isForgotPasswordEnabled ? "Back to Login" : "Forgot password?"}
              </a>
            </Form.Item>
          </Form>
        </div>
        {/* </Layout> */}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user)),
    setAccessToken: accessToken => dispatch(setAccessToken(accessToken))
  };
};
const Login = Form.create()(LoginForm);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
