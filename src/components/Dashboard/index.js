import React, { Component } from "react";
import { Card, Row, Col, Button, Upload, Icon, Modal, Table } from "antd";
import { ScriptService } from "services";
import "./dashboard.css";
import { connect } from "react-redux";

import { Services } from "constants/AppConstants";
import { Images } from "assets/images";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this._scriptService = new ScriptService();
  }
  componentDidMount() {
    console.log("componentDidMount Dashboard");
    console.log("this.props.history", this.props.match.params.id);
  }

  state = {
    fileList: [],
    excelError: []
  };

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-1);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    if (fileList.length > 0) {
      var onMyForm = new FormData();
      onMyForm.append("file", fileList[0].originFileObj);
      console.log("file", fileList);
      console.log(onMyForm);
      this._scriptService
        .scriptService(
          Services.ScriptVariables.UPLOAD,
          this.props.match.params.id,
          onMyForm
        )
        .then(
          res => {
            console.log(res);
            this.setState({ fileList: null });
          },
          err => {
            this.setState(
              { fileList: null, excelError: err.response.data.errors },
              () => console.log("error.....")
            );
            const columns = [
              {
                // title: "Errors"
              }
              // {
              //   title: "Error",
              //   dataIndex: "error",
              //   align: "center"
              // }
            ];
            Modal.error({
              title: "Solve the below errors",
              content: (
                <div>
                  <Table
                    columns={columns}
                    dataSource={this.state.excelError}
                    pagination={false}
                  />
                </div>
              ),
              width: "500px",
              className: "sample"
            });
          }
        );
    }
  };

  scriptDownload = e => {
    this._scriptService
      .scriptService(Services.ScriptVariables.DOWNLOAD)
      .then(res => {
        console.log(res);
        let blob = new Blob([res.data], {
            type:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          }),
          url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  };

  render() {
    const props = {
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange: this.handleChange
      // multiple: true
    };

    return (
      <div>
        <div>
          <Row>
            <Col xl={{ span: 4 }} lg={{ span: 5 }}>
              <Card
                hoverable
                style={{ height: "240px" }}
                cover={
                  <img
                    alt="sample"
                    src="https://image.freepik.com/free-photo/taking-photos-lake_1088-88.jpg"
                  />
                }
              >
                <h3 style={{ position: "absolute", left: "47px" }}>
                  First Project
                </h3>
              </Card>
            </Col>
            <Col xl={{ span: 16 }} lg={{ span: 14 }}>
              <Card style={{ height: "240px" }}>
                <h3>Project Description</h3>
                <p>
                  Once a tiger in a jungle in Uttar Pradesh in India turned a
                  man-eater. It had killed women and men in the forest. These
                  people had gone into the forest to collect firewood, fruits,
                  roots and other things. After such incidents people stopped
                  going into the forest.
                </p>
                <Col span={4}>
                  <span>Director </span> <br />
                  <span>Production </span>
                  <br />
                  <span>Producer </span>
                </Col>
                <Col>
                  <span> : Aishwarya Dhanush</span>
                  <br />
                  <span>: Wunderbar Films</span>
                  <br />
                  <span>: Dhanush</span>
                </Col>
              </Card>
            </Col>
            <Col xl={{ span: 4 }} lg={{ span: 5 }} className="text-center">
              <Card className="upload" style={{ height: "240px" }}>
                <div>
                  <h3>Script :</h3>
                  <div>
                    <Upload {...props} fileList={this.state.fileList}>
                      <Button type="primary">
                        {/* <Icon type="upload" />  */}
                        Upload
                      </Button>
                    </Upload>
                    <h4>or</h4>
                    <Button type="primary" style={{ textAlign: "center" }}>
                      {" "}
                      Create{" "}
                    </Button>
                    <br />
                    <br />
                  </div>
                  <div>
                    <a href="http://122.165.203.72:5051/script/api/v1/script/template/download">
                      <Button
                        // onClick={this.scriptDownload}
                        type="link"
                      >
                        <Icon type="download" style={{ fontSize: "20px" }} />
                        Template
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <br />

          <h3>Project Status</h3>
          <img
            src={Images.scene}
            style={{
              objectFit: "contain",
              width: "500px",
              height: "500px",
              paddingLeft: "100px"
            }}
            alt="scene"
          />
          <img
            src={Images.type}
            style={{
              objectFit: "contain",
              width: "450px",
              height: "450px",
              padding: "30px"
            }}
            alt="type"
          />
          <img
            src={Images.script}
            style={{
              objectFit: "contain",
              width: "500px",
              height: "500px",
              paddingLeft: "100px"
            }}
            alt="time"
          />
          <img
            src={Images.time}
            style={{
              objectFit: "contain",
              width: "470px",
              height: "470px",
              padding: "40px"
            }}
            alt="script"
          />
        </div>
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

export default connect(mapStateToProps)(Dashboard);
