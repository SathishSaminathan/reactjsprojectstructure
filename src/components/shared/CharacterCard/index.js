import React, { Component } from "react";
import { Row, Col, Icon, Popconfirm, message } from "antd";
import { Images } from "assets/images";
import "./CharacterCard.css";
import PropTypes from "prop-types";

class CharacterCard extends Component {
  confirm = e => {
    message.success("Character Successfully deleted");
  };

  cancel = e => {
    console.log(e);
    // message.error("Click on No");
  };

  render() {
    const { name } = this.props
    return (
      <Col
        xl={{ span: 8 }}
        lg={{ span: 10 }}
        md={{ span: 16 }}
        xs={{ span: 24 }}
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
          </div>
          <Row>
            <Col span={16} className="vertical-center pl-15">
              <h3 className="font-600 text-ellipsis">{name}</h3>
              <p>To be confrom</p>
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

export default CharacterCard;
