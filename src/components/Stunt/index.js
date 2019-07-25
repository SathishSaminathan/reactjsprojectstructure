import React, { Component } from "react";
import { Button, Table, Row, Col } from "antd";

const columns = [
  {
    title: "Scene_no",
    dataIndex: "age",
    align: "center"
  },

  {
    title: "Scene Location",
    dataIndex: "scdesc",
    align: "center"
  },
  {
    title: "Actual Location",
    dataIndex: "aloc",
    align: "center"
  },

  {
    title: "Budget",
    dataIndex: "budget",
    align: "center"
  },
  {
    title: "Status",
    dataIndex: "status",
    align: "center"
  },
  {
    title: "Documents",
    dataIndex: "doc",
    align: "center"
  },
  {
    // title: "Action",
    key: "action",
    align: "center",
    render: (text, record) => (
      <div>
        <Button type="link">More</Button>
      </div>
    )
  }
];
const data = [
  {
    key: "1",
    age: "1a,2d,4b",
    aloc: "Gokulam house",
    status: "Approved",
    budget: "10000",
    scdesc: "Naman House "
  },
  {
    key: "2",
    age: "2a,3d,6c",
    aloc: "To be confirmed",
    status: "Pending",
    budget: "",
    scdesc: "Ramu House"
  },
  {
    key: "3",
    age: "3c,4d,5a",
    aloc: "To be confirmed",
    status: "Pending",
    budget: "",
    scdesc: "Akshara house"
  }
];
class Stunt extends Component {
  componentDidMount() {
    console.log("componentDidMount Makeup");
  }

  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} pagination={false} />
        {/* <Row
          type="flex"
          justify="end"
          style={{ paddingLeft: "450px", paddingTop: "50px" }}
        >
          <Col span={3}>
            <Button type="default">Cancel</Button>
          </Col>
          <Col span={3}>
            <Button type="primary">Save</Button>
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default Stunt;
