import React, { Component } from "react";
import { Row, Col, Icon, Popconfirm, message, Checkbox } from "antd";
import { Images } from "assets/images";
//import "./CharacterCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterCard from "../CharacterCard";
import LocationAuditionComponent from "components/LocationAuditionComponent";
class LocationCardComponent extends Component {
  confirm = e => {
    message.success("Character Successfully deleted");
  };

  cancel = e => {
    console.log(e);
    // message.error("Click on No");
  };

  render() {
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
    const { name } = this.props;
    return (
      <Col
        // xl={{ span: 8 }}
        //lg={{ span: 10 }}
        //md={{ span: 16 }}
        //xs={{ span: 24 }}
        span={8}
        style={{ padding: "10px" }}
      >
        <div className="card">
          <div className="deleteCard">
            <Popconfirm
              title="Are you sure delete this Character?"
              onConfirm={this.confirm}
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
              <a href="#">
                <Icon type="delete" />
              </a>
            </Popconfirm>
            <div />
          </div>
          <Row>
            <Col span={16} className="vertical-center pl-15">
              <h3 className="font-600 text-ellipsis">
                <LocationAuditionComponent name={name} />
              </h3>
              <p>To be confirm</p>
            </Col>
            <Col span={8}>
              <img src={Images.user} />
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}

export default LocationCardComponent;
