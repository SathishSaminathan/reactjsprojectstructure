import React, { Component } from "react";
import { Row, Col, Form, Input, Select, Button,Radio } from "antd";
import "./profile.css";
import Uploaddocumentfile from "components/uploaddocumentfile";
import Paymentterms from "components/paymentterms";
import UploadImage from "components/shared/UploadImage/UploadImage";
import { Images } from "assets/images";
import Dynamictable from "components/dynamictable";
import { ScriptService } from "services";
import { Services, Notifications } from "constants/AppConstants";
import { showNotifications } from "components/shared/NotificationComponent";

// const Option = { Select };

class Actorprofile extends Component {

  constructor(props) {
    super(props);
    this.scriptservice= new ScriptService();
     }


  state = {
    projectimageid: null,
    formvalues: null,
    paymentData: null,
    staffData: null,
    fileuploadid: null
  };

  handleImage = url => {
    console.log( "handle image url",url);

    this.setState({
      projectimageid: url
    });
  };

  handleDocument = id => {
    console.log("fileuploadid",id);

    this.setState({
      fileuploadid: id
    });
  };

  handlepayment = data => {
    console.log("handlepayment...", data);

    this.setState({
      paymentData: data
    });
  };

  handlestaff = details => {
    console.log("handlestaff...", details);

    this.setState(
      {
        staffData: details
      },
      () => console.log("this.state.staffData...", this.state.staffData)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log("Received values of form: ", values);
        this.setState({
          formvalues: values
        });
        let paymentamount = [];
        let paymentdate = [];
        let paymentremark = [];

        let paymentterms = this.state.paymentData;
        paymentterms.map((data, i) => {
          paymentamount.push(data.amount);
          paymentdate.push(data.paymentdate);
          paymentremark.push(data.remark);
        });
        console.log("paymentamount...", paymentamount);
        console.log("paymentdate...", paymentdate);
        console.log("paymentremark...", paymentremark);
        
        let staffname = [];
        let staffdesignation = [];
        let staffpayment = [];
        let stafftype = [];

        let staffdetails = this.state.staffData;
        staffdetails.map((details, i) => {
          staffname.push(details.name);
          staffdesignation.push(details.designation);
          staffpayment.push(details.payment);
          stafftype.push(details.type);
        });
        console.log("staffdetails...", staffdetails);
        console.log("staffname...", staffname);
        console.log("staffdesignation...", staffdesignation);
        console.log("staffpayment...", staffpayment);
        console.log("stafftype...", stafftype);
        console.log("totalformvalue",this.state.formvalues)
        console.log("data...",data)
        
        const data = {
          actorDocument: [
            {
              documentId:0 ,
              fileData: this.state.projectimageid,
              fileType: "IMAGE"
            },
            {
              documentId: 0,
              fileData: this.state.fileuploadid,
              fileType: "DOCUMENT"
            }
          ],
          actorId: 0,
          actorName: this.state.formvalues.actorname,
          actorPayment: {
            amount: paymentamount,
            paymentDate: paymentdate,
            remarks: paymentremark
          },
          actorStaff: {
            designation: staffdesignation,
            isSalaryNeed: true,
            payment: staffpayment,
            paymentType: stafftype,
            staffName: staffname
          },
          address: {
            addressLine: this.state.formvalues.Address,
            addressLine2: null,
            addressTypeId: 0,
            city: this.state.formvalues.city,
            country: this.state.formvalues.country,
            id: 0,
            landMark: null,
            state: this.state.formvalues.state,
            zipCode: this.state.formvalues.zipcode
          },
          characterName: this.state.formvalues.character,
          characterType: this.state.formvalues.charactertype,
          pan: this.state.formvalues.pan,
          projectActor: {
            conveyance: this.state.formvalues.conveyance,
            gst: this.state.formvalues.gst,
            isPickUP: this.state.formvalues.pickup,
            projectId: 0,
            rumuneration: this.state.formvalues.rumeneration,
            state: this.state.formvalues.status,
            vanityVan: this.state.formvalues.vanityvan
          }
        };
        this.scriptservice
        .scriptService(
          Services.AddActor.ADD_ACTOR,
          data,
          console.log("hai iam there",data)
        )
        .then(response => {
          // this.setState({ isLoading: false, visible: false });
          showNotifications(
            Notifications.SUCCESS,
            "Created Sucessfully!",
          );
        });

        console.log("data...",data)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;

    return (
      <div>
        <Row>
          <Col
            xl={{ span: 18, offset: 3 }}
            lg={{ span: 18, offset: 3 }}
            md={{ span: 21, offset: 3 }}
          >
            <Row>
              <Col
                xl={{ span: 10, offset: 10 }}
                lg={{ span: 10, offset: 10 }}
                md={{ span: 10, offset: 10 }}
              >
                <div
                  style={{
                    color: "#2da01c",
                    marginBottom: "10px",
                    fontSize: "20px"
                  }}
                >
                  Actor Profile
                </div>
              </Col>
            </Row>

            <Form onSubmit={this.handleSubmit}>

            <Row>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>ActorName:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("actorname", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter Actorname!"
                            },
                            {
                              pattern: new RegExp("^[A-Za-z]*$"),
                              message: "Enter Alphabets onlys"
                            }
                          ]
                        })(<Input type="text" placeholder="ActorName" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Character:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("character", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter character!"
                            },
                            {
                              pattern: new RegExp("^[A-Za-z]*$"),
                              message: "Enter Alphabets onlys"
                            }
                          ]
                        })(<Input type="text" placeholder="Character" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 10 }}>
                  <Row
                    style={{ position: "absolute", right: "50%" }}
                  >
                    <Form.Item>
                      {getFieldDecorator("projectimage", {
                        initialValue: this.state.projectimage
                      })(
                        <img
                          src={Images.user}
                          style={{ height: "100px", width: "100px" }}
                        />
                      )}
                    </Form.Item>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>CharacterType:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("charactertype", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter charactertype!"
                            },
                            {
                              pattern: new RegExp("^[A-Za-z]*$"),
                              message: "Enter Alphabets onlys"
                            }
                          ]
                        })(<Input type="text" placeholder="Character Type" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Rumeneration:</label>
                      </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("rumeneration", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter rumeneration!"
                            }
                          ]
                        })(<Input type="number" placeholder="Rumeneration" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 24 }} lg={{ span: 24 }} md={{ span: 24 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 4 }} lg={{ span: 5 }} md={{ span: 6 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>PaymentTerms:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 17 }} lg={{ span: 19 }} md={{ span: 18 }}>
                      <Form.Item>
                        {getFieldDecorator("paymentdata", {
                          initialValue: this.state.paymentData
                        })(<Paymentterms handlepayment={this.handlepayment} />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Pan No:</label>
                      </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("pan", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter Pan No!"
                            }
                          ]
                        })(<Input type="text" placeholder="Pan No" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Gst No:</label>
                      </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("gst", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter Gst No!"
                            }
                          ]
                        })(<Input type="text" placeholder="Gst No" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right",
                          marginBottom: "30px"
                        }}
                      >
                        <label>Address:</label>
                      </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("Address", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter Address!"
                            }
                          ]
                        })(<Input type="text" placeholder="Address" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right",
                          marginBottom: "30px"
                        }}
                      >
                        <label>City:</label>
                      </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("city", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter City!"
                            },
                            {
                              pattern: new RegExp("^[A-Za-z]*$"),
                              message: "Enter Alphabets onlys"
                            }
                          ]
                        })(<Input type="text" placeholder="City" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right",
                          marginBottom: "30px"
                        }}
                      >
                        <label>State:</label>
                      </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("state", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter State!"
                            },
                            {
                              pattern: new RegExp("^[A-Za-z]*$"),
                              message: "Enter Alphabets onlys"
                            }
                          ]
                        })(<Input type="text" placeholder="State" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Zipcode:</label>
                      </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("zipcode", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter Zipcode!"
                            }
                          ]
                        })(<Input type="number" placeholder="Zipcode" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Country:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("country", {
                          rules: [
                            {
                              required: true,
                              message: "Please select Country!"
                            }
                          ]
                        })(
                          <Select placeholder="Please select country">
                            <Option value="china">China</Option>
                            <Option value="usa">U.S.A</Option>
                          </Select>
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 24 }} lg={{ span: 24 }} md={{ span: 24 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 4 }} lg={{ span: 5 }} md={{ span: 6 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Staff Details:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 17 }} lg={{ span: 19 }} md={{ span: 18 }}>
                      <Form.Item>
                        {getFieldDecorator("staffdata", {
                          initialValue: this.state.staffData
                        })(<Dynamictable handlestaff={this.handlestaff} />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Vanity Van:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("vanityvan", {
                          rules: [
                            {
                              required: true,
                              message: "Please select vanity van!"
                            }
                          ]
                        })(
                          <Select placeholder="Please select Vanity Van">
                            <Option value="none">None</Option>
                            <Option value="singledoor">SingleDoor</Option>
                            <Option value="doubledoor">DoubleDoor</Option>
                          </Select>
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right",
                          marginBottom: "30px"
                        }}
                      >
                        <label>PickUp:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                    <Form.Item>
                      {getFieldDecorator("pickup", {
                      })(
                        <Radio.Group
                          name="radiogroup"
                        >
                          <Radio value={"Yes"}>Yes</Radio>
                          <Radio value={"No"}>No</Radio>
                        </Radio.Group>
                      )}
                    </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right",
                          marginBottom: "30px"
                        }}
                      >
                        <label>Conveyance:</label>
                      </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("conveyance", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter Conveyance!"
                            }
                          ]
                        })(<Input type="text" placeholder="Conveyance" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Contract:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("fileuploadid", {
                          initialValue: this.state.fileuploadid
                        })(
                          <Uploaddocumentfile
                            handleDocument={this.handleDocument}
                          />
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col xl={{ span: 24 }} lg={{ span: 12 }} md={{ span: 14 }}>
                  <Row gutter={16}>
                    <Col xl={{ span: 4 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Photos:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 18 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("projectimageid", {
                          initialValue: this.state.projectimageid
                        })(<UploadImage handleImage={this.handleImage} />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col
                  xl={{ span: 12 }}
                  lg={{ span: 12 }}
                  md={{ span: 14 }}
                  style={{ marginBottom: "30px" }}
                >
                  <Row gutter={16}>
                    <Col xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 11 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          paddingTop: "8px",
                          textAlign: "right"
                        }}
                      >
                        <label>Status:</label>
                      </div>
                    </Col>

                    <Col xl={{ span: 12 }} lg={{ span: 13 }} md={{ span: 12 }}>
                      <Form.Item>
                        {getFieldDecorator("status", {
                          rules: [
                            {
                              required: true,
                              message: "Please select status!"
                            }
                          ]
                        })(
                          <Select placeholder="Please select status">
                            <Option value="sentforreview">None</Option>
                            <Option value="rejected">Rejected</Option>
                            <Option value="approved">Approved</Option>
                          </Select>
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row
                gutter={12}
                type="flex"
                justify="end"
                style={{ marginTop: "20px" }}
              >
                <Col>
                  <Button>Cancel</Button>
                </Col>
                <Col>
                  <Button type="primary" onClick={this.handleSubmit}>
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
const actorprofiledata = Form.create()(Actorprofile);
export default actorprofiledata;
