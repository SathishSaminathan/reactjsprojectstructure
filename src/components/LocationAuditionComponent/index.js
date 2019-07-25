import React, { Component } from "react";
import { Modal, Col, Row, Button, Select } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//import CardComponent from "components/shared/CardComponent";
import Card from "components/shared/card";
import CreateLocationModal from "components/Location/AddLocationModal";
import LocationCardComponent from "components/shared/LocationCardComponent"

class LocationAuditionComponent extends Component {
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
          <h3
            className="font-600 mb-20 text-center"
            style={{ textAlign: "center", color: "black" }}
          >
            Actual Location
          </h3>
          <h3 className="font-600 mb-20 primary-font-color text-center">
            {" "}
            {name}
          </h3>
          <CreateLocationModal />
          <Row>
            <Col span="12">
              <Card name="Gokulam House" />{" "}
            </Col>
            <Col span="12">
              <Card name="Sherif House" />
            </Col>
            <Col span="12">
              <Card name="Aachi house" />
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}
LocationAuditionComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default LocationAuditionComponent;
