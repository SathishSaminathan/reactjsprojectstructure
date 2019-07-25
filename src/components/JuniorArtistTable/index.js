import React from "react";
import { Table, InputNumber, Icon, Popconfirm, Form } from "antd";

class JuniorArtistTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log("props....");
    
  }

  render() {
    const columns = [
      {
        title: "S.No",
        dataIndex: "sno",
        align: "center"
      },
      {
        title: "Type",
        dataIndex: "type",
        align: "center"
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        align: "center"
      },
      {
        title: "Delete",
        // dataIndex: <Icon type="delete" />,
        align: "center",
        render: (text, record) => (
          <Popconfirm
            title="Are you sure delete this Character?"
            onConfirm={this.confirm}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">
              <Icon type="delete" />
            </a>
          </Popconfirm>
        )
      }
    ];

    const dataSource = [
      {
        key: "0",
        sno: "1",
        type: "Crowd",
        quantity: "20"
      },
      {
        key: "1",
        sno: "2",
        type: "Police",
        quantity: "8"
      }
    ];

    return (
      <div>
        <Table
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </div>
    );
  }
}

export default JuniorArtistTable;
