import React, { Component } from "react";
import {
  Modal,
  Col,
  Row,
  Button,
  Icon,
  Upload,
  Input,
  InputNumber,
  Select
} from "antd";
import MultipleSelectImage from "components/shared/MulitpleSelectImage";
import PropTypes from "prop-types";
import Axios from 'axios';

class UpdateMakeupModal extends Component {
  state = { visible: false };

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
  componentDidMount() {
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlN2M4NjYzOC1hMjRmLTQxNTItYWE1ZS04N2JlNTA2MTNmZjE6OnByb2plY3RhZG1pbkBhY2UuY29tOjpQcm9qZWN0QWRtaW46OlBBOjpwcm9qZWN0YWRtaW5AYWNlLmNvbTo6dHJ1ZTo6bnVsbDo6TWFsZTo6MjAxOS0wNy0xOFQxMzo1OToxNC4yMDQ6OlByb2plY3RBZG1pbiIsImV4cCI6MTU2NDAzNDY0NCwiaWF0IjoxNTYzOTQ4MjQ0fQ.CXQfYe7EQqWsdomTEPmJltPAdefnFzjkmx2yNcBw4h7wm_e9EwxpHEKR463Gu3qdRNHq7yT-lSmGcigl4edMtA"
      }
    };
    console.log("access", config);
    Axios.get(
      "http://122.165.203.72:5051/script/api/v1/project/9/makeup",
      config
    ).then(res => {
      console.log(res.data.scenes);

      this.setState({ data: res.data.scenes });
    });
  }
  //state = {
    //data: []
  //};
  render() {
    const { Option } = Select;
    const {name} = this.props
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    return (
      <div>
        <Button type="link" onClick={this.showModal}>
          {name}
        </Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          key={2}
          width={["630px"]}
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
          <h3 className="font-600 mb-20 text-center primary-font-color">
            Special Makeup
          </h3>

          <Row gutter={16}>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Scene No:</label>
              <Input value="1" disabled />
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Character:</label>
              <Select
                defaultValue="Character"
                style={{ width: "260px" }}
                onChange={{ handleChange }}
              >
                <Option value="naman">Naman</Option>
                <Option value="ajay">Ajay</Option>
                <Option value="ramu">Ramu</Option>
              </Select>
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Actor:</label>
              <Input value="Shakar" />
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Material Purchased:</label>
              <InputNumber
                defaultValue={1100}
                min={0}
                style={{ width: "260px" }}
                formatter={value =>
                  `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\₹\s?|(,*)/g, "")}
                onChange={{ handleChange }}
              />
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Material Hire:</label>
              <InputNumber
                defaultValue={2500}
                min={0}
                style={{ width: "260px" }}
                formatter={value =>
                  `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\₹\s?|(,*)/g, "")}
                onChange={{ handleChange }}
              />
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Labour Expense:</label>
              <InputNumber
                defaultValue={3100}
                min={0}
                style={{ width: "260px" }}
                formatter={value =>
                  `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\₹\s?|(,*)/g, "")}
                onChange={{ handleChange }}
              />
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Status:</label>
              <Select
                defaultValue="Status"
                style={{ width: "260px" }}
                onChange={{ handleChange }}
              >
                <Option value="review">Sent for Review</Option>
                <Option value="rejected">Rejected</Option>
                <Option value="apporve">Approved</Option>
              </Select>
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Makeup Time:</label>
              <br />
              <InputNumber
                defaultValue={3100}
                min={0}
                style={{ width: "90px" }}
                formatter={value => `₹ ${value}`}
                parser={value => value.replace("₹", "")}
                onChange={{ handleChange }}
              />
              <Select
                defaultValue="Makeup Time"
                style={{ width: "165px", padding: "5px" }}
                onChange={{ handleChange }}
              >
                <Option value="hours">Hours</Option>
                <Option value="shift">Shift</Option>
              </Select>
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Documents:</label>
              <Upload>
                <Button>
                  <Icon type="plus" />
                  Upload Documents
                </Button>
              </Upload>
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Photos:</label>
              <br />
              <MultipleSelectImage />
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

UpdateMakeupModal.propTypes = {
    name: PropTypes.string.isRequired
}

export default UpdateMakeupModal;
