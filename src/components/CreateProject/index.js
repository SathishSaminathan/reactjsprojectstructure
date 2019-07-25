import React, { Component } from "react";
import { Modal, Button, Row, Input, Col, Select, Form } from "antd";
import { connect } from "react-redux";

import "./CreateProject.css";
import UploadImage from "components/shared/UploadImage/UploadImage";
import Axios from "axios";
import { Notifications } from "constants/AppConstants";
import { showNotifications } from "components/shared/NotificationComponent";

const { Option } = Select;

class CreateProjectModal extends Component {
  state = {
    isLoading: false,
    projectName: null,
    projectTypeId: null,
    projectDescription: null,
    projectimageId: null,
    companyId: 1,
  };

  componentDidMount() {
    
  }

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

  handleImage = projectimageId => {
    console.log("checking....", projectimageId);
    this.setState({
      projectimageId
    });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    this.setState({ isLoading: true });
    const config = {
      headers: {
        "Authorization": `Bearer ${this.props.accessToken}`
      }
    };
    const data = {
      projectName: this.state.projectName,
      projectTypeId: this.state.projectTypeId,
      projectDescription: this.state.projectDescription,
      projectimageId: this.state.projectimageId,
      companyId: this.state.companyId
    };
    console.log("data....", config);
    Axios.post(
      "http://122.165.203.72:5051/script/api/v1/projects",
      data,
      config
    ).then(response => {
      console.log(response.data);
      this.setState({ isLoading: false, visible: false });
      showNotifications(
        Notifications.SUCCESS,
        "Project Created",
        "Get your work simplified!!"
      );
      this.props.refreshProjectList();
    });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    const { isLoading } = this.state;

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          + Project
        </Button>
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
          width={"450px"}
          style={{ maxHeight: "40px" }}
        >
          <h3
            className="font-600 mb-20"
            style={{ textAlign: "center", color: "#2da01c" }}
          >
            Create Project
          </h3>
          <Row>
            <Col>
              <Form>
                <Row gutter={16} className="mt-5">
                  <Col xl={{ span: 12 }}>
                    <label className="font-600" label="Username">
                      *Project Name :
                    </label>
                    <Form.Item>
                      {getFieldDecorator("projectName", {
                        rules: [
                          {
                            required: true,
                            message: "Enter your project Name!"
                          },
                          {
                            pattern: new RegExp("^[A-Za-z]*$"),
                            message: "Enter Alphabets onlys"
                          }
                        ]
                      })(
                        <Input
                          placeholder="Project Name"
                          onChange={e =>
                            this.setState({ projectName: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">*Project Type :</label>
                    <Form.Item>
                      {getFieldDecorator("projectTypeId", {
                        initialValue: "Select project type",
                        rules: [
                          {
                            required: true,
                            message: "Select your project Type!"
                          }
                        ]
                      })(
                        <Select
                          onChange={projectTypeId =>
                            this.setState({ projectTypeId })
                          }
                          className="mt-5"
                          style={{ width: "100%" }}
                        >
                          <Option value={0}>Short Flim</Option>
                          <Option value={1}>Feature Flim</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
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
                </Row>
                <Row>
                  <label className="font-600">Project Image</label>
                  <div className="mt-5">
                    <Form.Item>
                      {getFieldDecorator("projectimageId", {
                        initialValue: this.state.projectimageId
                      })(
                        <UploadImage
                          handleImage={this.handleImage}
                          text="Upload project image"
                          onChange={e =>
                            this.setState({ projectimageId: e.target.value })
                          }
                        />
                      )}
                    </Form.Item>
                  </div>
                </Row>
              </Form>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

const CreateProject = Form.create()(CreateProjectModal);

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
    accessToken: user.accessToken
  };
};

export default connect(mapStateToProps)(CreateProject);
