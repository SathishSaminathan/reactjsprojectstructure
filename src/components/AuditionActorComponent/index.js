import React, { Component } from "react";
import { Modal, Col, Row, Button, Select } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ActorCardComponent from "components/shared/ActorCardComponent";

class AuditionActorComponent extends Component {
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
            Main Character
          </h3>
          <h3 className="font-600 mb-20 primary-font-color text-center">
            {" "}
            {name}
          </h3>
          <Link to="/project/actorprofile">
            <Button type="primary" icon="plus" style={{ marginBottom: "20px" }}>
              Add Actor
            </Button>
          </Link>
          <Row>
            <Col span="12">
              <ActorCardComponent name="Shankar" />{" "}
            </Col>
            <Col span="12">
              <ActorCardComponent name="Ajay" />
            </Col>
            <Col span="12">
              <ActorCardComponent name="Ramu" />
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

AuditionActorComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default AuditionActorComponent;
