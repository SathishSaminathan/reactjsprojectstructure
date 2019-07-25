import React, { Component } from "react";
import { Row, Col, Input, Button, Radio } from "antd";

const { TextArea } = Input;
const plainOptions = ["2D", "3D"];

class VFXTab extends Component {
  componentDidMount() {
    console.log("componentDidMount Schedule");
  }

  render() {
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    return (
      <div>
        <h3 className="text-right font-600" style={{ textAlign: "center" }}>
          Scene 2
        </h3>
        <br />
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
                <h3 className="text-right font-600">
                  Actual Location &nbsp; :
                </h3>
              </Col>
              <Col
                xs={{ span: 23 }}
                lg={{ span: 14 }}
                md={{ span: 10 }}
                className="pl-15"
              >
                <Input value="Gokulam House" />
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
                <h3 className="text-right font-600"> Location Type &nbsp; :</h3>
              </Col>
              <Col
                lg={{ span: 12 }}
                xs={{ span: 20 }}
                md={{ span: 8 }}
                className="pl-15"
              >
                <Input value="SET" />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-25">
          <Col lg={{ span: 3 }} md={{ span: 10 }} xs={{ span: 23, offset: 1 }}>
            <h3 className="text-right pr-15 font-600">Description &nbsp; :</h3>
          </Col>
          <Col
            xs={{ span: 23 }}
            lg={{ span: 19 }}
            md={{ span: 10 }}
            className="pl-15 pl-0"
          >
            <TextArea
              rows={3}
              style={{ width: "97.5%", display: "flex" }}
              value="The sequence involves 3D and 2D Animation work and Many Background Green Matt Compositing"
            />
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
                <h3 className="text-right font-600"> VFX Type &nbsp; :</h3>
              </Col>
              <Col
                xs={{ span: 23 }}
                lg={{ span: 14 }}
                md={{ span: 10 }}
                className="pl-15"
              >
                <div>
                  <Radio.Group name="radiogroup" onChange={this.onChange}>
                    <Radio value={"2d"}>2D</Radio>
                    <Radio value={"3d"}>3D</Radio>
                  </Radio.Group>
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
            <Button type="primary">Save</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default VFXTab;
