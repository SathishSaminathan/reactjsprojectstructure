import React, { Component } from "react";
import {
  Table,
  Button,
  Row,
  Col,
  Modal,
  Input,
  Upload,
  Icon,
  Select,
  InputNumber
} from "antd";
import MultipleSelectImage from "components/shared/MulitpleSelectImage";
import { string } from "prop-types";
import UpdateMakeupModal from "components/UpdateMakeupModal";
import Axios from 'axios';

const data = [
  {
    key: "1",
    age: "1a,2d,4b",
    loc: "Aditya",
    budget: "10000",
    desc: "Lakshan "
  },
  {
    key: "2",
    age: "2a,3d,6c",
    loc: "Shrada",
    budget: "20000",
    desc: "Nethra"
  },
  {
    key: "3",
    age: "3c,4d,5a",
    loc: "Akshara",
    budget: "50000",
    desc: "Megha"
  }
];
class Makeup extends Component {
  state = { visible: false };

  componentDidMount() {
    console.log("componentDidMount Makeup");
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlN2M4NjYzOC1hMjRmLTQxNTItYWE1ZS04N2JlNTA2MTNmZjE6OnByb2plY3RhZG1pbkBhY2UuY29tOjpQcm9qZWN0QWRtaW46OlBBOjpwcm9qZWN0YWRtaW5AYWNlLmNvbTo6dHJ1ZTo6bnVsbDo6TWFsZTo6MjAxOS0wNy0xOFQxMzo1OToxNC4yMDQ6OlByb2plY3RBZG1pbiIsImV4cCI6MTU2Mzk0NDY3NSwiaWF0IjoxNTYzODU4Mjc1fQ.4XFBMg8F-oRseKEwBxtk1SQONKKE_YDjpKHxDlg2Stmy1pOeGQvD7DIpplAEExH6lu7bmzLS0e1TjS3SYUMJAQ"
      }
    };
    console.log("access", config);
    Axios.get(
      "http://122.165.203.72:5051/script/api/v1/project/9/makeup",
      config
    ).then(res => {
      console.log(res.data.scenes);

      this.setState({ data: res.data.scenes });
    });
  }
  //state = {
    //data: []
  //}

  render() {
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    const { Option } = Select;

    const columns = [
      {
        title: "Scene No",
        dataIndex: "sceneNumber",
        align:'center'
      },
      {
        title: "Character",
        dataIndex: "characterName",
        align:'center'
      },
      {
        title: "Actor",
        dataIndex: "actor",
        align:'center'
      },

      {
        title: "Cost of Spl Makeup",
        dataIndex: "specialCostumeCost",
        align:'center'
      },

      {
        // title: "Action",
        key: "action",
        align:'center',
        render: (text, record) => (
          <div>
            <UpdateMakeupModal name="More"/>
          </div>
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

export default Makeup;
