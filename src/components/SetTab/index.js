import React, { Component } from "react";
import { Table } from "antd";
import UpdateSet from "UpdateSet";

const columns = [
  {
    title: "S.No",
    dataIndex: "sno",
    key: "sno"
  },
  {
    title: "Scene Location",
    dataIndex: "sceneLocation",
    key: "sceneLocation"
  },
  {
    title: "Finalized Actual Location",
    dataIndex: "actualLocation",
    key: "actualLocation"
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "Budjet",
    dataIndex: "budjet",
    key: "budjet"
  },
  {
    dataIndex: "update",
    key: "update",
    render: text => <a href="javascript:;">{text}</a>
  },
];

const data = [
  {
    key: "1",
    sno: "1",
    sceneLocation: "AJAY HOUSE",
    actualLocation: "Aachi House",
    type: "Set",
    status: "Approved",
    budjet: "2,50,000",
    update: <UpdateSet type="Update" />
  }
];

class SetTab extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center", fontWeight: "600" }}>Scene 1A</h2>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          style={{ padding: "20px 50px" }}
        />
      </div>
    );
  }
}

export default SetTab;
