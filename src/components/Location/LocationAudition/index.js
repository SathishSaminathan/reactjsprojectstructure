import React, { Component, Fragment } from "react";
import { Row, Col, Select, Table, Switch } from "antd";
import { Link } from "react-router-dom";

import TextComponent from "components/shared/TextComponent";

const { Option } = Select;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Cost per day",
    dataIndex: "costPerDay",
    key: "costPerDay"
  },
  {
    title: "Contact Person",
    key: "contactPerson",
    dataIndex: "contactPerson"
  },
  {
    title: "Status",
    key: "status",
    render: record => <Switch defaultChecked={record.isPlaceSelected} />
  },
  {
    title: "Action",
    key: "action",
    render: record => <a><Link to="/project/addlocation">More</Link></a>
  }
];

const data = [
  {
    key: "1",
    name: "KMCH",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    address: "Avinasi Road, Coimbatore.",
    costPerDay: 1000,
    contactPerson: "Tamil",
    contactPersonPhoneNumber: 8012941249,
    isPlaceSelected: false,
    action: "/project/crew"
  },
  {
    key: "2",
    name: "KMCH",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    address: "Avinasi Road, Coimbatore.",
    costPerDay: 1000,
    contactPerson: "Tamil",
    contactPersonPhoneNumber: 8012941249,
    isPlaceSelected: false,
    action: "/project/crew"
  },
  {
    key: "3",
    name: "KMCH",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    address: "Avinasi Road, Coimbatore.",
    costPerDay: 1000,
    contactPerson: "Tamil",
    contactPersonPhoneNumber: 8012941249,
    isPlaceSelected: false,
    action: "/project/crew"
  },
  {
    key: "4",
    name: "KMCH",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    address: "Avinasi Road, Coimbatore.",
    costPerDay: 1000,
    contactPerson: "Tamil",
    contactPersonPhoneNumber: 8012941249,
    isPlaceSelected: true,
    action: "/project/crew"
  }
];

class LocationAudition extends Component {
  render() {
    function onChange(value) {
      console.log(`selected ${value}`);
    }

    function onBlur() {
      console.log("blur");
    }

    function onFocus() {
      console.log("focus");
    }

    function onSearch(val) {
      console.log("search:", val);
    }
    return (
      <div>

        <Row>
          <Row>
            <Col lg={24}>
              <TextComponent style={{ fontWeight: "bold", fontSize: "20px" }}>
                Location Audition
              </TextComponent>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col lg={6}>
              <TextComponent style={{ fontWeight: "bold", fontSize: "15px" }}>
                Scene No:
              </TextComponent>
              <TextComponent style={{ fontSize: "15px", paddingLeft: "10px" }}>
                1A
              </TextComponent>
            </Col>
            <Col lg={6}>
              <TextComponent style={{ fontWeight: "bold", fontSize: "15px" }}>
                Location:
              </TextComponent>
              <TextComponent style={{ fontSize: "15px", paddingLeft: "10px" }}>
                Hospital
              </TextComponent>
            </Col>
          </Row>
          {/* <Row style={{ paddingTop: "20px" }}>
            <Col lg={6}>
              <TextComponent
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingRight: "10px"
                }}
              >
                Category:
              </TextComponent>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a Category"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
            <Col lg={6}>
              <TextComponent
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingRight: "10px"
                }}
              >
                Sub-Category:
              </TextComponent>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a Sub-Category"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
          </Row> */}
          <Row style={{ paddingTop: "20px" }}>
            <Col lg={24}>
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}

export default LocationAudition;
