import React, { Component } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Row,
  Col,
  Select,
  Icon,
  InputNumber,
  AutoComplete
} from "antd";
import UploadImage from "../UploadImage/UploadImage";
import "./AddCharacter.css";
import ActorTabService from "services/SceneOverviewService/ActorTabService";
import { Services, Notifications } from "constants/AppConstants";
import { showNotifications } from "../NotificationComponent";

class AddCharacter extends Component {
  state = {
    visible: false,
    addCharacter: false,
    characterName: null,
    characterType: null,
    imageId: null,
    sceneId: null,
    characterCount: null,
    actorName: null
  };

  constructor(props) {
    super(props);
    this._actorService = new ActorTabService();
  }

  componentDidMount() {
    const { type } = this.props;
    this.setState({
      characterType: type,
      sceneId: 1
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const data = {
          characterName: this.state.characterName,
          characterType: this.state.characterType,
          imageId: this.state.imageId,
          sceneId: this.state.sceneId,
          characterCount: this.state.characterCount
        };

        this._actorService
          .actorTabService(Services.SceneOVerviewVariable.ADD_ACTOR, data)
          .then(
            res => {
              this.setState({
                visible: false,
                characterName: null,
                imageId: null,
                sceneId: null,
                actorName: null
              });
              showNotifications(
                Notifications.SUCCESS,
                "New Created Successfully",
                "Get your work simplified!!"
              );
              this.props.refreshActors();
            },
            err => {
              // this.setState({
              //   visible: false
              // });
            }
          );
      }
    });
  };

  onChangeSelect = value => {
    console.log(`selected ${value}`);
  };

  onBlur = blur => {
    console.log("blur", blur);
  };

  onFocus = focus => {
    console.log("focus", focus);
  };

  onSearch = search => {
    console.log("search:", search);
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

  handleImage = id => {
    console.log(id);

    this.setState({
      imageId: id
    });
  };

  addCharacter = e => {
    console.log(e);
    this.setState({ addCharacter: true });
    console.log(this.state);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { name } = this.props;
    const dataSource = ["Naman", "Ajay", "Ramu"];
    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}
          type="primary"
          icon="plus"
          style={{ display: "flex", marginLeft: "10px" }}
        >
          {name}
        </Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
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
                <Button type="primary" onClick={this.handleSubmit}>
                  Save
                </Button>
              </Col>
            </Row>
          }
        >
          <h3 className="font-600 mb-20 text-center primary-font-color">
            {name}
          </h3>
          {name != "Add Junior Character" ? (
            <div>
              <Form>
                <Row type="flex" justify="center">
                  <div className="mt-5">
                    <Form.Item>
                      {getFieldDecorator("projectimage", {
                        initialValue: this.state.projectimage
                      })(
                        <UploadImage
                          handleImage={this.handleImage}
                          text="Upload Actor image"
                        />
                      )}
                    </Form.Item>
                  </div>
                </Row>
                <Row gutter={16} className="mt-5">
                  <Col xl={{ span: 12 }}>
                    <label className="font-600" label="Username">
                      *Character Name :
                    </label>
                    <Form.Item>
                      {getFieldDecorator("charactername", {
                        rules: [
                          {
                            required: true,
                            message: "Enter your Character Name!"
                          },
                          {
                            pattern: new RegExp("^[A-Za-z]*$"),
                            message: "Enter Alphabets onlys"
                          }
                        ]
                      })(
                        <AutoComplete
                          placeholder="Enter Character Name"
                          dataSource={dataSource}
                          filterOption={(inputValue, option) =>
                            option.props.children
                              .toUpperCase()
                              .indexOf(inputValue.toUpperCase()) !== -1
                          }
                          onChange={e =>
                            this.setState({
                              characterName: e
                            })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 12 }}>
                    <label className="font-600">Actor Name :</label>
                    <Form.Item>
                      {getFieldDecorator("actorname", {})(
                        <Input
                          placeholder="Actor Name"
                          onChange={e =>
                            this.setState({
                              actorName: e.target.value
                            })
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          ) : (
            <Form>
              <Row gutter={16} className="mt-5">
                <Col xl={{ span: 12 }}>
                  <label className="font-600" label="Username">
                    *Character Name :
                  </label>
                  <Form.Item>
                    {getFieldDecorator("charactername", {
                      rules: [
                        {
                          required: true,
                          message: "Enter your Junior Artist Type!"
                        },
                        {
                          pattern: new RegExp("^[A-Za-z]*$"),
                          message: "Enter Alphabets onlys"
                        }
                      ]
                    })(
                      <Input
                        placeholder="Enter Junior Artist"
                        onChange={e => {
                          this.setState({ characterName: e.target.value });
                        }}
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col xl={{ span: 12 }}>
                  <label className="font-600">Quantity :</label>
                  <Form.Item>
                    {getFieldDecorator("actorname", {
                      rules: [
                        {
                          required: true,
                          message: "Enter quantity!"
                        }
                      ]
                    })(
                      <InputNumber
                        className="w-100"
                        placeholder="Quantity"
                        onChange={e => {
                          this.setState({ characterCount: e });
                        }}
                      />
                    )}
                  </Form.Item>
                </Col>
                {this.state.addCharacter ? (
                  <div>
                    <Col xl={{ span: 11 }}>
                      <label className="font-600">New Character :</label>
                      <Form.Item>
                        {getFieldDecorator("addcharacter", {
                          rules: [
                            {
                              required: true,
                              message: "Select your project Type!"
                            }
                          ]
                        })(<Input placeholder="New Character Name" />)}
                      </Form.Item>
                    </Col>
                    <Col xl={{ span: 1 }}>
                      <Icon type="minus-circle" />
                    </Col>
                  </div>
                ) : null}
              </Row>
            </Form>
          )}
        </Modal>
      </div>
    );
  }
}

const CreateCharacter = Form.create()(AddCharacter);
export default CreateCharacter;
