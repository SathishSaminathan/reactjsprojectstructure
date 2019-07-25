import React, { Component } from "react";
import { Layout, Button, Row, Col, Icon, Popover } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Images } from "assets/images";
import { removeUser } from "store/action";
import { Services, LocalStorage } from "constants/AppConstants";
import Storage from "utilities/LocalStorageHelper";
import { OnboardServices } from "services";

import "./header.css";

const { Header } = Layout;

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this._userService = new OnboardServices();
    this._storage = new Storage();
    this.state = {
      visible: false,
      isButtonLoading: false
    };
  }

  handleLogout = () => {
    this.setState({
      isButtonLoading: true
    });
    this._userService
      .onboardService(
        Services.OnboardVariables.LOGOUT,
        null,
        this.props.accessToken
      )
      .then(res => {
        this._storage.remove();
        this.props.removeUser();
        this.props.history.push("/login");
        this.setState({ visible: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const text = (
      <span style={{ fontWeight: "bold" }}>
        Welcome!{" "}
        {this.props.currentUser && this.props.currentUser.name.firstName}
      </span>
    );
    const content = (
      <div>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button customButton"
          onClick={this.handleLogout}
        >
          Sign out
        </Button>
      </div>
    );
    return (
      // <div>
      //   <Header
      //     style={{
      //       background: "#fff",
      //       padding: 0,
      //       overflow: "hidden",
      //       display: "flex"
      //     }}
      //   >
      //     <div
      //       className="logo"
      //       style={{
      //         width: "80px",
      //         height: "100px",
      //         backgroundColor: "#fb7791"
      //       }}
      //     >
      //       <img
      //         src={Images.logo}
      //         style={{ width: "50px", height: "60px", objectFit: "contain" }}
      //         alt="logo image"
      //       />
      //     </div>
      //     {this.props.currentUser && (
      //       <Button
      //         type="primary"
      //         htmlType="submit"
      //         className="login-form-button customButton"
      //         onClick={() => {
      //           localStorage.removeItem("user");
      //           this.props.removeUser();
      //           this.props.history.push("/login");
      //         }}
      //       >
      //         Sign out
      //       </Button>
      //     )}
      //   </Header>
      // </div>

      <div style={{ backgroundColor: "#393A3D", height: "55px" }}>
        <Row
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center"
          }}
        >
          <Col
            xl={{ span: 3 }}
            xs={{ span: 19 }}
            lg={{ span: 22 }}
            md={{ span: 21 }}
          >
            <Link to="/project">
              <div
                style={{
                  color: "#fff",
                  fontSize: "23px",
                  fontWeight: "600",
                  paddingLeft: "16px"
                }}
              >
                ACE
              </div>
            </Link>
          </Col>
          {this.props.currentUser && (
            <Col
              xl={{ offset: 18, span: 3 }}
              xs={{ span: 5 }}
              lg={{ span: 2 }}
              md={{ span: 3 }}
              style={{ height: "100%" }}
            >
              <Row
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "space-around",
                  height: "100%",
                  alignItems: "center"
                }}
              >
                <Col
                  span={10}
                  style={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-around",
                    height: "100%",
                    alignItems: "center"
                  }}
                >
                  <Link
                    className="links "
                    style={{ color: "white" }}
                    to="/projects"
                  >
                    <div className="myProjects">My Projects</div>
                  </Link>
                </Col>
                <Col
                  span={7}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Icon
                    className="links"
                    type="setting"
                    style={{ fontSize: "20px" }}
                  />
                </Col>
                <Col
                  span={7}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Popover
                    placement="bottomLeft"
                    title={text}
                    content={content}
                    trigger="click"
                    visible={this.state.visible}
                    onVisibleChange={() =>
                      this.setState({ visible: !this.state.visible })
                    }
                  >
                    <Icon
                      className="links"
                      type="user"
                      style={{ fontSize: "20px" }}
                    />
                  </Popover>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
    accessToken: user.accessToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeUser: () => dispatch(removeUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
