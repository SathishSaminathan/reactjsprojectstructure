import React from "react";
import {
    Modal,
    Col,
    Row,
    Button,
    Input,
        } from "antd";

class Stuntmodel extends React.Component {
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
render(){
    const {name} = this.props
    return(
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
<h3 className="font-600 mb-20 primary-font-color text-center">
  Stunt
</h3>
<Row gutter={16}>
  <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
    <label className="font-600">S No:</label>
    <Input/>
  </Col>
  <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
    <label className="font-600">Stunt Type:</label>
    <Input/>
  </Col>
  <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
    <label className="font-600">Nos:</label>
    <Input/>
  </Col>
  <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
    <label className="font-600">Day/Seq:</label>
    <Input/>
  </Col>
  <Col xl={{ span: 11 }} style={{ marginBottom: "20px" }}>
    <label className="font-600">Price:</label>
    <Input/>
  </Col>
</Row>
</Modal>
</div>
    )
}
}

export default Stuntmodel




