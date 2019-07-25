import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  Card,
  Modal,
  Button,
  Icon,
  Table,
  Switch,
  Input,
  Row,
  Col,
  Upload
} from "antd";
import UpdateSet from "UpdateSet";

const data = [
  {
    key: "1",
    sno: "1",
    name: "Airport",
    age: "1a,2d,4b",
    address: "Interior",
    loc: "live Location",
    budget: "100000",
    desc: "Chennai domestic terminal... "
  },
  {
    key: "2",
    sno: "2",
    name: "Hospital",
    age: "2a,3d,6c",
    address: "Exterior",
    loc: "live Location",
    budget: "20000",
    desc: "KMCH Hospital"
  },
  {
    key: "3",
    sno: "3",
    name: "Restaurant",
    age: "3c,4d,5a",
    address: "Interior",
    loc: "live Location",
    budget: "50000",
    desc: "Jennys Residency"
  },
  {
    key: "4",
    sno: "4",
    name: "House",
    age: "4a,7c,8d",
    address: "Exterior",
    desc: "Yet to be confirmed",
    budget: "######",
    loc: "Yet to be confirmed"
  }
];
class Crew extends Component {
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
    const columns = [
      {
        title: "S No",
        dataIndex: "sno",
        align: "center"
      },
      {
        title: "Scene Location",
        dataIndex: "name",
        align: "center"
      },
      {
        title: "Scene No",
        dataIndex: "age",
        align: "center"
      },

      {
        title: "Finalized Actual Location",
        dataIndex: "desc",
        align: "center"
      },
      {
        title: "Type",
        dataIndex: "loc",
        align: "center"
      },

      {
        title: "Status",
        dataIndex: "status",
        align: "center",
        render: (e, record) => <Switch defaultChecked />
      },
      {
        title: "Budget",
        dataIndex: "budget",
        align: "center"
      },

      {
        // title: "Action",
        key: "action",
        align: "center",
        render: (text, record) => (
          <div className="primary-font-color" style={{ cursor: "pointer" }}>
            <UpdateSet type="Update" />
          </div>
        )
      }
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}

export default Crew;
