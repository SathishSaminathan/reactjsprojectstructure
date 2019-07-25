import React, { Component } from 'react';
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
import Songsmodel from 'components/songsmodel';

const data = [
    {
      key: "1",
      sceneno: "10",
      scenelocation: "MysorePalace",
      actuallocation: "MysorePalace",
      budget: "2,50,000",
      status: "approved",
      document: "",

    },
    {
        key: "1",
        sceneno: "20",
        scenelocation: "MountRoad",
        actuallocation: "MountRoad",
        budget: "2,50,000",
        status: "pending",
        document: "",
  
      },
    
  ];

class Song extends Component {
    

    componentDidMount(){
        console.log("componentDidMount Song")
    }

    render () {
        const columns = [
            {
              title: "Scene No",
              dataIndex: "sceneno",
              align:'center'
            },
            {
              title: "Scene Location",
              dataIndex: "scenelocation",
              align:'center'
            },
            {
              title: "Actual Location",
              dataIndex: "actuallocation",
              align:'center'
            },
      
            {
              title: "Budget",
              dataIndex: "budget",
              align:'center'
            },
            {
                title: "Status",
                dataIndex: "status",
                align:'center'
              },
              {
                title: "Document",
                dataIndex: "document",
                align:'center'
              },
      
            {
              title: "Action",
              key: "action",
              align:'center',
              render: (text, record) => (
                <div>
                  <Button type="link">More</Button>
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
        )
    }
}

export default Song