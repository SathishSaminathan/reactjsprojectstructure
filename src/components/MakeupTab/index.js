import React, { Component } from "react";
import { Table } from "antd";
import UpdateSet from "UpdateSet";
import { Images } from "assets/images";
import UpdateMakeupModal from "components/UpdateMakeupModal";

const columns = [
  {
    title: "S.No",
    dataIndex: "sno",
    key: "sno",
    align: "center"
  },
  {
    title: "Character",
    dataIndex: "character",
    key: "character",
    align: "center"
  },
  {
    title: "Actor",
    dataIndex: "actor",
    key: "actor",
    align: "center"
  },
  {
    title: "Special Makeup Cost",
    dataIndex: "specialMakeupCost",
    key: "specialMakeupCost",
    align: "center"
  },
  {
    title: "Photo",
    dataIndex: "photo",
    key: "photo",
    align: "center"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center"
  },
  {
    dataIndex: "update",
    key: "update",
    render: text => <a href="javascript:;">{text}</a>,
    align: "center"
  }
];

const data = [
  {
    key: "1",
    sno: "1",
    character: "Naman",
    actor: "Shashank Arora",
    specialMakeupCost: "1000",
    photo: <img src={Images.user} style={{ height: "50px", width: "50px" }} />,
    status: "Approved",
    update: <UpdateMakeupModal name="Update" />
  },
  {
    key: "2",
    sno: "2",
    character: "Ajay",
    actor: "Tanmay D",
    specialMakeupCost: "3000",
    photo: <img src={Images.user} style={{ height: "50px", width: "50px" }} />,
    status: "Pending",
    update: <UpdateMakeupModal name="Update" />
  },
  {
    key: "3",
    sno: "3",
    character: "Ramu",
    actor: "Shankar C",
    specialMakeupCost: "2000",
    photo: <img src={Images.user} style={{ height: "50px", width: "50px" }} />,
    status: "Set for Review",
    update: <UpdateMakeupModal name="Update" />
  }
];

class MakeupTab extends Component {
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

export default MakeupTab;
