import React, { Component } from "react";
import "./generalscriptdetails.css";
import {
  Row,
  Col,
  Select,
  Radio,
  Checkbox,
  Input,
  Button,
  Icon,
  Modal,
  Form,
  InputNumber
} from "antd";
import GeneralTabService from "services/SceneOverviewService/GeneralTabService";
import { Services } from "constants/AppConstants";
import GlobalService from "services/GlobalService";

const { Option } = Select;
const { TextArea } = Input;

// const plainOptions = [];

class GeneralScriptDetails extends Component {
  constructor(props) {
    super(props);
    this._generalTabService = new GeneralTabService();
    this._globalService = new GlobalService();
  }
  state = {
    visible: false,
    sceneNo: null,
    screenLocation: null,
    description: null,
    environmentType: null,
    environmentTime: null,
    timeToShoot: null,
    art_set: null,
    costumes: null,
    makeup: null,
    sceneType: null,
    vfx: null,
    plainOptions: null
  };

  componentDidMount() {
    this.getSceneDetails();
    this.getSceneData();
  }

  getSceneData = () => {
    let datas = [];
    this._globalService
      .globalService(Services.GlobalVariables.GET_MASTER_DATA, "SCENE")
      .then(
        res => {
          console.log("res", res.data);
          res.data.map(checkbox => {
            datas.push(checkbox.value);
            this.setState({
              plainOptions: datas
            });
          });
        },
        err => {
          console.log(err);
        }
      );
    return datas;
  };

  getEnvironmentTypeData = () => {
    let template = [];
    this._globalService
      .globalService(Services.GlobalVariables.GET_MASTER_DATA, "ENVIRONMENT")
      .then(res => {
        console.log(res.data);
        res.data.map((option, i) => {
          template.push(<Option value={option.value}>{option.label}</Option>);
        });
      });
    return template;
  };

  getEnvironmentTimeData = () => {
    let time = [];
    this._globalService
      .globalService(Services.GlobalVariables.GET_MASTER_DATA, "TIME")
      .then(res => {
        console.log(res.data);
        res.data.map((option, i) => {
          time.push(<Option value={option.value}>{option.label}</Option>);
        });
      });
    return time;
  };

  getCostumesData = () => {
    let costumes = [];
    this._globalService
      .globalService(Services.GlobalVariables.GET_MASTER_DATA, "COSTUME")
      .then(res => {
        console.log(res.data);
        res.data.map((option, i) => {
          costumes.push(<Option value={option.value}>{option.label}</Option>);
        });
      });
    return costumes;
  };

  getMakeupData = () => {
    let costumes = [];
    this._globalService
      .globalService(Services.GlobalVariables.GET_MASTER_DATA, "MAKEUP")
      .then(res => {
        console.log(res.data);
        res.data.map((option, i) => {
          costumes.push(<Option value={option.value}>{option.label}</Option>);
        });
      });
    return costumes;
  };

  getSceneDetails = () => {
    this._generalTabService
      .generalTabService(Services.SceneOVerviewVariable.GET_SCENE, 1)
      .then(res => {
        console.log(res);
        this.setState(
          {
            sceneNo: res.data.sceneNumber,
            screenLocation: res.data.location,
            description: res.data.description,
            environmentType: res.data.environmentType,
            environmentTime: res.data.timeType
            // timeToShoot: "5",
            // art_set: "Set",
            // costumes: "Regualar",
            // makeup: "Regualar",
            // vfx: "Yes",
            // vfx: res.data.cgiState,
            // sceneType: ["TALKIES", "SONG"]
          },
          () => {
            this.props.handleVfxTabStatus(this.state.vfx);
            this.props.handleSongStuntTab(this.state.sceneType);
          }
        );
      });
  };

  handleEditEnvironment = e => {
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

  generalSceneSubmit = e => {
    e.preventDefault();
    const data = {
      costumeType: this.state.costumes,
      description: this.state.description,
      environmentType: this.state.environmentType,
      location: this.state.screenLocation,
      makeupType: this.state.makeup,
      requiredTime: this.state.timeToShoot,
      sceneNumber: this.state.sceneNo,
      sceneTypes: this.state.sceneType,
      timeType: this.state.environmentTime
      // cgiState: this.state.vfx
    };

    this._generalTabService
      .generalTabService(Services.SceneOVerviewVariable.UPDATE_SCENE, data)
      .then(res => {});

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleVfxTabs = e => {
    this.props.handleVfxTabStatus(e.target.value);
    this.setState({
      vfx: e.target.value
    });
  };

  handleSceneType = e => {
    this.props.handleSongStuntTab(e);
    this.setState({
      sceneType: e
    });
  };

  handleArtSet = e => {
    console.log(e);
    this.props.handleSetTab(e);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      art_set,
      vfx,
      costumes,
      makeup,
      sceneNo,
      sceneType,
      screenLocation,
      environmentTime,
      environmentType,
      timeToShoot,
      description
    } = this.state;
    return (
      <div>
        <Form>
          <Row>
            <Col
              lg={{ span: 11 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <Row className="mb-25">
                <Col
                  lg={{ span: 7 }}
                  md={{ span: 10 }}
                  xs={{ span: 23, offset: 1 }}
                >
                  <h3 className="text-right font-600">Scene &nbsp; :</h3>
                </Col>
                <Col
                  xs={{ span: 23 }}
                  lg={{ span: 14 }}
                  md={{ span: 10 }}
                  className="pl-15"
                >
                  <Form.Item>
                    {getFieldDecorator("sceneNo", {
                      initialValue: sceneNo,
                      rules: [
                        { required: true, message: "Enter Scene Number!" }
                      ]
                    })(<Input placeholder="Scene Number" disabled />)}
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 24 }}>
              <Row className="mb-25">
                <Col
                  lg={{ span: 10 }}
                  md={{ span: 10 }}
                  xs={{ span: 23, offset: 1 }}
                >
                  <h3 className="text-right font-600">
                    Screen Location &nbsp; :
                  </h3>
                </Col>
                <Col
                  lg={{ span: 12 }}
                  xs={{ span: 23 }}
                  md={{ span: 10 }}
                  className="pl-15"
                >
                  <Form.Item>
                    {getFieldDecorator("sceneLocation", {
                      initialValue: screenLocation,
                      rules: [
                        { required: true, message: "Enter Scene Location!" }
                      ]
                    })(
                      <Input
                        placeholder="Scene Location"
                        onChange={e =>
                          this.setState({
                            screenLocation: e.target.value
                          })
                        }
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mb-25">
            <Col
              lg={{ span: 3 }}
              md={{ span: 10 }}
              xs={{ span: 23, offset: 1 }}
            >
              <h3 className="text-right pr-15 font-600">
                Description &nbsp; :
              </h3>
            </Col>
            <Col
              xs={{ span: 23 }}
              lg={{ span: 19 }}
              md={{ span: 10 }}
              className="pl-15 pl-0"
            >
              <Form.Item>
                {getFieldDecorator("description", {
                  initialValue: description,
                  rules: [
                    { required: true, message: "Enter scene description!" }
                  ]
                })(
                  <TextArea
                    rows={4}
                    style={{ width: "97.5%", display: "flex" }}
                    onChange={e =>
                      this.setState({
                        description: e.target.value
                      })
                    }
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col
              xl={{ span: 11 }}
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <Row className="mb-25">
                <Col
                  lg={{ span: 7 }}
                  md={{ span: 10 }}
                  xs={{ span: 23, offset: 1 }}
                >
                  <h3 className="text-right font-600">Environment &nbsp; :</h3>
                </Col>
                <Col
                  xs={{ span: 23 }}
                  md={{ span: 10 }}
                  lg={{ span: 14 }}
                  className="pl-15"
                >
                  {/* <Search
                  value="INT/DAY"
                  enterButton={<Icon type="edit" />}
                  onSearch={this.handleEditEnvironment}
                /> */}
                  <Row gutter={0}>
                    <Col span={22}>
                      <Form.Item>
                        {getFieldDecorator("vfx", {
                          initialValue: `${environmentType}/${environmentTime}`
                        })(
                          <Input
                            disabled
                            // placeholder={`${environmentType}/${environmentTime}`}
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col span={2}>
                      <div
                        onClick={this.handleEditEnvironment}
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
                        <Icon type="edit" />
                      </div>
                    </Col>
                  </Row>
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
                          <Button
                            type="primary"
                            onClick={e => this.setState({ visible: false })}
                          >
                            Ok
                          </Button>
                        </Col>
                      </Row>
                    }
                  >
                    <h3 className="font-600 mb-20 text-center primary-font-color">
                      Edit Environment
                    </h3>
                    <Form>
                      <Row gutter={16} className="mt-5">
                        <Col xl={{ span: 12 }}>
                          <label className="font-600" label="Username">
                            INT/EXT :
                          </label>
                          <Form.Item>
                            {getFieldDecorator("environmentType", {
                              initialValue: environmentType,
                              rules: [
                                {
                                  required: true,
                                  message: "Enter scene description!"
                                }
                              ]
                            })(
                              <Select
                                placeholder="Environment Type"
                                className="mt-5"
                                style={{ width: "100%" }}
                                onChange={environmentType =>
                                  this.setState({
                                    environmentType
                                  })
                                }
                              >
                                {this.getEnvironmentTypeData()}
                              </Select>
                            )}
                          </Form.Item>
                        </Col>
                        <Col xl={{ span: 12 }}>
                          <label className="font-600">DAY/NIGHT :</label>
                          <Form.Item>
                            {getFieldDecorator("environmentTime", {
                              initialValue: environmentTime,
                              rules: [
                                {
                                  required: true,
                                  message: "Enter scene description!"
                                }
                              ]
                            })(
                              <Select
                                placeholder="Environment Time"
                                className="mt-5"
                                style={{ width: "100%" }}
                                onChange={environmentTime =>
                                  this.setState({
                                    environmentTime
                                  })
                                }
                              >
                                {this.getEnvironmentTimeData()}
                              </Select>
                            )}
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </Modal>
                </Col>
              </Row>
              {/* <Row className="mb-25">
                <Col
                  lg={{ span: 7 }}
                  md={{ span: 10 }}
                  xs={{ span: 23, offset: 1 }}
                >
                  <h3 className="text-right font-600">ART / SET &nbsp; :</h3>
                </Col>
                <Col
                  md={{ span: 10 }}
                  xs={{ span: 23 }}
                  lg={{ span: 14 }}
                  className="pl-15"
                >
                  <Form.Item>
                    {getFieldDecorator("art_set", {
                      initialValue: art_set,
                      rules: [{ required: true, message: "Select Art / Set!" }]
                    })(
                      <Select
                        placeholder="Select Art / Set"
                        className="w-100"
                        onChange={this.handleArtSet}
                      >
                        <Option value="Live">Live Location</Option>
                        <Option value="Set">Set</Option>
                        <Option value="Live and Set">Live and Set</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row> */}
              <Row className="mb-25">
                <Col
                  lg={{ span: 7 }}
                  md={{ span: 10 }}
                  xs={{ span: 23, offset: 1 }}
                >
                  <h3 className="text-right font-600">MAKEUP &nbsp; :</h3>
                </Col>
                <Col
                  md={{ span: 10 }}
                  xs={{ span: 23 }}
                  lg={{ span: 14 }}
                  className="pl-15"
                >
                  <Form.Item>
                    {getFieldDecorator("makeup", {
                      initialValue: makeup,
                      rules: [
                        { required: true, message: "Select Makeup Type!" }
                      ]
                    })(
                      <Select
                        placeholder="Select Makeup Type"
                        className="w-100"
                        onChange={makeup =>
                          this.setState({
                            makeup
                          })
                        }
                      >
                        {this.getMakeupData()}
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="mb-25">
                <Col
                  lg={{ span: 7 }}
                  md={{ span: 10 }}
                  xs={{ span: 23, offset: 1 }}
                >
                  <h3 className="text-right font-600"> VFX &nbsp; :</h3>
                </Col>
                <Col md={{ span: 10 }} lg={{ span: 14 }} xs={{ span: 23 }}>
                  <div className="text-left ml-15">
                    <Form.Item>
                      {getFieldDecorator("vfx", {
                        initialValue: vfx
                      })(
                        <Radio.Group
                          name="radiogroup"
                          onChange={this.handleVfxTabs}
                        >
                          <Radio value={"Yes"}>Yes</Radio>
                          <Radio value={"No"}>No</Radio>
                        </Radio.Group>
                      )}
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 24 }}>
              <Row className="mb-25">
                <Col
                  lg={{ span: 10 }}
                  md={{ span: 10 }}
                  xs={{ span: 23, offset: 1 }}
                >
                  <h3 className="text-right font-600 pt-3">
                    Time required to shoot &nbsp; :
                  </h3>
                </Col>
                <Col md={{ span: 10 }} xs={{ span: 23 }} lg={{ span: 12 }}>
                  <div className="text-left ml-15 pt-3">
                    <Form.Item>
                      {getFieldDecorator("time_required", {
                        initialValue: timeToShoot,
                        rules: [
                          {
                            required: true,
                            message: "Enter time required to shoot!"
                          }
                        ]
                      })(
                        <InputNumber
                          className="w-100"
                          onChange={time_required =>
                            this.setState({
                              timeToShoot: time_required
                            })
                          }
                          placeholder="Time required to shoot"
                        />
                      )}
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              <Row className="mb-25">
                <Col
                  lg={{ span: 10 }}
                  md={{ span: 10 }}
                  xs={{ span: 23, offset: 1 }}
                >
                  <h3 className="text-right font-600">Costumes &nbsp; :</h3>
                </Col>
                <Col
                  md={{ span: 10 }}
                  xs={{ span: 23 }}
                  lg={{ span: 12 }}
                  className="pl-15"
                >
                  <Form.Item>
                    {getFieldDecorator("costumes", {
                      initialValue: costumes,
                      rules: [
                        {
                          required: true,
                          message: "Select Costumes Type!"
                        }
                      ]
                    })(
                      <Select
                        placeholder="Select Costumes"
                        onChange={costumes =>
                          this.setState({
                            costumes
                          })
                        }
                        className="w-100"
                      >
                        {this.getCostumesData()}
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="mb-25">
                <Col
                  lg={{ span: 10 }}
                  md={{ span: 10 }}
                  xs={{ span: 23, offset: 1 }}
                >
                  <h3 className="text-right font-600">Scene Type &nbsp; :</h3>
                </Col>
                <Col md={{ span: 10 }} xs={{ span: 23 }} lg={{ span: 12 }}>
                  <div className="text-left ml-15 pt-3">
                    <Form.Item>
                      {getFieldDecorator("scene_type", {
                        initialValue: sceneType,
                        rules: [
                          {
                            required: true,
                            message: "Select Costumes Type!"
                          }
                        ]
                      })(
                        <Checkbox.Group
                          options={this.state.plainOptions}
                          onChange={this.handleSceneType}
                        />
                      )}
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            gutter={12}
            type="flex"
            justify="end"
            style={{ marginTop: "20px", marginRight: "20px" }}
          >
            <Col>
              <Button>Cancel</Button>
            </Col>
            <Col>
              <Button type="primary" onClick={this.generalSceneSubmit}>
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const GeneralScriptComponent = Form.create()(GeneralScriptDetails);
export default GeneralScriptComponent;
