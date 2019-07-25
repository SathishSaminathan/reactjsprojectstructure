import React, { Component } from "react";
import {
  Table,
  Button,
  Row,
  Col,
  Select,
} from "antd";
import UpdateCostumeModal from "components/UpdateCostumesModal";
const data = [
  {
    key: "1",
    sceneno: "1a",
    character: "Naman",
    actor: "Shashank Arora",
    cost: "10,000"
  },
  {
    key: "2",
    sceneno: "1b",
    character: "Ajay",
    actor: "Tanmay D",
    cost: "5,000"
  },
  {
    key: "3",
    sceneno: "1c",
    character: "Ramu",
    actor: "Shankar C",
    cost: "5,000"
  }
];
class Equipments extends Component {
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
  componentDidMount() {
    console.log("componentDidMount Equipments");
  }
  render() {
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    const { Option } = Select;
    const columns = [
      {
        title: "Scene No",
        dataIndex: "sceneno",
        align:'center'
      },
      {
        title: "Character",
        dataIndex: "character",
        align:'center'
      },
      {
        title: "Actor",
        dataIndex: "actor",
        align:'center'
      },
      {
        title: "Special Costume Cost",
        dataIndex: "cost",
        align:'center'
      },
      {
        // title: "Action",
        dataIndex: "action",
        align:'center',
        render: (text, record) => (
          <span>
            <UpdateCostumeModal name="More" />
          </span>
        )
      }
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} pagination={false} />
        {/* <Row
          gutter={12}
          type="flex"
          justify="end"
          style={{ marginTop: "20px" }}
        >
          <Col>
            <Button>Cancel</Button>
          </Col>
          <Col>
            <Button type="primary">Save</Button>
          </Col>
        </Row> */}
      </div>
    );
  }
}
export default Equipments;
