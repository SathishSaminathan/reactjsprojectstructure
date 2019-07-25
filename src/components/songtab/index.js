import React, { Component } from "react";
import {
  Modal,
  Button,
  Icon,
  Table,
  Switch,
  Input,
  Row,
  Col,
  Upload,
  InputNumber,
  Select
} from "antd";
import Songsmodel from "components/songsmodel";

const columns = [
  {
    title: "Sno.",
    dataIndex: "sno",
    align: "center"
  },

  {
    title: "Stunt Type",
    dataIndex: "stunttype",
    align: "center"
  },
  {
    title: "Nos",
    dataIndex: "nos",
    align: "center"
  },
  {
    title: "Day/Sequence",
    dataIndex: "day",
    align: "center"
  },

  {
    title: "Rate",
    dataIndex: "rate",
    align: "center"
  },

  {
    title: "Action",
    key: "action",
    align: "center",
    render: (text, record) => (
      <div>
        <Songsmodel name="Add" />
      </div>
    )
  }
];
const data = [
  {
    key: "1",
    sno: "1a,2d,4b",
    stunttype: "Aditya",
    nos: "2",
    day: "10000",
    rate: "Lakshan "
  },
  {
    key: "1",
    sno: "1a,2d,4b",
    stunttype: "Aditya",
    nos: "2",
    day: "10000",
    rate: "Lakshan "
  },
  {
    key: "1",
    sno: "1a,2d,4b",
    stunttype: "Aditya",
    nos: "2",
    day: "10000",
    rate: "Lakshan "
  }
];
class Songtab extends Component {
  componentDidMount() {
    console.log("componentDidMount Makeup");
  }

  render() {
    const { Option } = Select;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    function onChange(value) {
      console.log("changed", value);
    }
    return (
      <div>
        <Table columns={columns} dataSource={data} pagination={false} />
        <div>
          <Row>
            <Col style = {{marginTop:"20px"}}
              xl={{ span: 12 }} lg = {{span:12}} md = {{span:24}} xs = {{span:24}} >
              
                
                  <Row gutter={12}>
                    <Col  style ={{textAlign:"right"}} xl = {{span:8,offset:4}} lg = {{span:12}} md = {{span:12}} xs = {{span:21}} >
                  <label className="font-600">Material Purchase :</label>
                  </Col>

                  <Col xl = {{span:11}} lg = {{span:11}} md = {{span:10}} xs = {{span:22,offset:1}}>
                  <InputNumber
                    defaultValue={1000}
                    min={0}
                    style = {{width:"100%"}} 
                    formatter={value =>
                      `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={value => value.replace(/\₹\s?|(,*)/g, "")}
                    onChange={onChange}
                  />
                  </Col>
                  </Row>
              </Col>
              

              <Col xl={{ span: 12 }} lg = {{span:12}} md = {{span:24}} xs = {{span:24}} style = {{marginTop:"20px"}}>
                <Row gutter={12}>
                  
                  <Col style ={{textAlign:"right"}} xl = {{span:7}} lg = {{span:10}} md = {{span:12}} xs = {{span:21}} >
                  <label className="font-600">Material hire :</label>
                  </Col>

                  <Col xl = {{span:12}} lg = {{span:12}} md = {{span:10}} xs = {{span:22,offset:1}}>
                  <InputNumber
                    defaultValue={1000}
                    min={0}
                    style = {{width:"100%"}}
                    formatter={value =>
                      `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={value => value.replace(/\₹\s?|(,*)/g, "")}
                    onChange={onChange}
                  />
                  </Col>
                  
                </Row>
             
            </Col>
          </Row>

          <Row>
            <Col style = {{marginTop:"20px"}}
              xl={{ span: 12 }} lg = {{span:12}} md = {{span:24}}  xs = {{span:24}}>
              
                
                  <Row gutter={12}>
                    <Col  style ={{textAlign:"right"}} xl = {{span:8,offset:4}} lg = {{span:12}} md = {{span:12}} xs = {{span:21}} >
                  <label className="font-600">Props Purchase :</label>
                  </Col>

                  <Col xl = {{span:11}} lg = {{span:11}} md = {{span:10}} xs = {{span:22,offset:1}}>
                  <InputNumber
                    defaultValue={1000}
                    min={0}
                    style = {{width:"100%"}} 
                    formatter={value =>
                      `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={value => value.replace(/\₹\s?|(,*)/g, "")}
                    onChange={onChange}
                  />
                  </Col>
                  </Row>
              </Col>
              

              <Col xl={{ span: 12 }} lg = {{span:12}} md = {{span:24}} xs = {{span:24}} style = {{marginTop:"20px"}}>
                <Row gutter={12}>
                  
                  <Col style ={{textAlign:"right"}} xl = {{span:7}} lg = {{span:10}} md = {{span:12}} xs = {{span:21}}>
                  <label className="font-600">Props hire :</label>
                  </Col>

                  <Col xl = {{span:12}} lg = {{span:12}} md = {{span:10}} xs = {{span:22,offset:1}} >
                  <InputNumber
                    defaultValue={1000}
                    min={0}
                    style = {{width:"100%"}}
                    formatter={value =>
                      `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={value => value.replace(/\₹\s?|(,*)/g, "")}
                    onChange={onChange}
                  />
                  </Col>
                  
                </Row>
             
            </Col>
          </Row>
          
          <Row>
            <Col style = {{marginTop:"20px"}}
              xl={{ span: 12 }} lg = {{span:12}} md = {{span:24}} xs = {{span:24}}>
              
                
                  <Row gutter={12}>
                    <Col  style ={{textAlign:"right"}} xl = {{span:8,offset:4}} lg = {{span:12}}md = {{span:12}} xs = {{span:21}} >
                  <label className="font-600">Time Required To Shoot:</label>
                  </Col>

                  <Col xl = {{span:11}} lg = {{span:11}} md = {{span:10}}  xs = {{span:22,offset:1}}>
                  <InputNumber
                    defaultValue={1000}
                    min={0}
                    style = {{width:"100%"}} 
                    formatter={value =>
                      `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={value => value.replace(/\₹\s?|(,*)/g, "")}
                    onChange={onChange}
                  />
                  </Col>
                  </Row>
              </Col>
              

              <Col xl={{ span: 12 }} lg = {{span:12}} md = {{span:24}} xs = {{span:24}} style = {{marginTop:"20px"}}>
                <Row gutter={12}>
                  
                  <Col style ={{textAlign:"right"}} xl = {{span:7}} lg = {{span:10}} md = {{span:12}} xs = {{span:21}} >
                  <label className="font-600">Upload Documents :</label>
                  </Col>

                  <Col xl = {{span:12}} lg = {{span:12}} md = {{span:10}}  xs = {{span:22,offset:1}} >
                  <Upload multiple="true">
                <Button>
                  <Icon type="upload" /> Upload Documents
                </Button>
              </Upload>
                  </Col>
                  
                </Row>
             
            </Col>
          </Row>

          <Row gutter = {1} type="flex" justify="end" style = {{marginTop:"20px"}} >
            <Col xl = {{span:2}} lg = {{span:3}} md = {{span:5}} xs = {{span:12}}>
              <Button type="default">Cancel</Button>
            </Col>
            <Col xl = {{span:3}} lg = {{span:4}} md = {{span:6}} xs = {{span:12}}>
              <Button type="primary">Save</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Songtab;
