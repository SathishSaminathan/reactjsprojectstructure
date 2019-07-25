import React, { Component } from "react";
import { Row, Col } from "antd";
import CharacterCard from "components/shared/CharacterCard";
import CreateLocationModal from "components/Location/AddLocationModal";
import AuditionCardComponent from "components/AuditionCardComponent";

class LocationTab extends Component {
  render() {
    return (
      <div>
        <Row className="mb-25">
          <Col
            xl={{ offset: 1, span: 21 }}
            lg={{ offset: 1, span: 21 }}
            md={{ offset: 1, span: 21 }}
            style={{ border: "1px solid #ccc" }}
          >
            <h3
              className="font-600 text-left"
              style={{
                backgroundColor: "#001529",
                color: "#fff",
                padding: "10px"
              }}
            >
              Actual Location :
            </h3>
            <div style={{ paddingLeft: "10px" }}>
              <CreateLocationModal />
            </div>
            <Row>
              <AuditionCardComponent name="Naman's House" type="Location"/>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LocationTab;
