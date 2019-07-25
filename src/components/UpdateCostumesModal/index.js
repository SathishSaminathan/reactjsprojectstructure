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

class UpdateCostumesModal extends Component {
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

  render() {
    const { Option } = Select;
    const { name } = this.props;
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
          style={{ maxHeight: "40px" }}
        >
          <h3 className="font-600 mb-20 primary-font-color text-center">
            Special Costume
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
                formatter={value => `₹ ${value}`}
                parser={value => value.replace("₹", "")}
                onChange={{ handleChange }}
              />
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Material Hire:</label>
              <InputNumber
                defaultValue={2500}
                min={0}
                style={{ width: "260px" }}
                formatter={value => `₹ ${value}`}
                parser={value => value.replace("₹", "")}
                onChange={{ handleChange }}
              />
            </Col>
            <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
              <label className="font-600">Labour Expense:</label>
              <InputNumber
                defaultValue={3100}
                min={0}
                style={{ width: "260px" }}
                formatter={value => `₹ ${value}`}
                parser={value => value.replace("₹", "")}
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
              <label className="font-600">Documents:</label>
              <Upload>
                <Button>
                  <Icon type="plus" />
                  Upload Documnets
                </Button>
              </Upload>
            </Col>
            <Col xl={{ span: 24 }} style={{ marginBottom: "20px" }}>
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

UpdateCostumesModal.propTypes = {
  name: PropTypes.string.isRequired
};

export default UpdateCostumesModal;
