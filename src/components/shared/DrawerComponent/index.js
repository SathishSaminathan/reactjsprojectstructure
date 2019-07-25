import React, { Component } from "react";
import { Drawer, Divider, Col, Row, Radio } from "antd";
import { connect } from "react-redux";
import { setFontSize } from "store/action";
import { FontStyles } from "constants/AppConstants";

const pStyle = {
  fontSize: 16,
  color: "rgba(0,0,0,0.85)",
  lineHeight: "24px",
  display: "block",
  marginBottom: 16
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: "22px",
      marginBottom: 7,
      color: "rgba(0,0,0,0.65)"
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: "inline-block",
        color: "rgba(0,0,0,0.85)"
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

class DrawerComponent extends Component {
  state = { visible: false };

  onChange = e => {
    // console.log(`radio checked:${e.target.value}`);
    this.props.setFontStyle(e.target.value);
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.props.onClose();
  };

  render() {
    const { visible } = this.props;
    return (
      <div>
        <Drawer
          width={"40%"}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p style={pStyle}>Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content="Lily" />{" "}
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Account"
                content="AntDesign@example.com"
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content="HangZhou" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="China🇨🇳" />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Company</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Position" content="Programmer" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Responsibilities" content="Coding" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Department" content="AFX" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="AntDesign@example.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Phone Number"
                content="+86 181 0000 0000"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Github"
                content={
                  <a href="http://github.com/ant-design/ant-design/">
                    github.com/ant-design/ant-design/
                  </a>
                }
              />
            </Col>
            <Radio.Group
              onChange={this.onChange}
              defaultValue={FontStyles.SMALL}
            >
              <Radio.Button value={FontStyles.SMALL}>Small</Radio.Button>
              <Radio.Button value={FontStyles.MEDIUM}>Medium</Radio.Button>
              <Radio.Button value={FontStyles.LARGE}>Large</Radio.Button>
            </Radio.Group>
          </Row>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ fontStyle }) => {
  return {
    fontSize: fontStyle.fontSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFontStyle: value => dispatch(setFontSize(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerComponent);

DrawerComponent.displayName = "DrawerComponent";
