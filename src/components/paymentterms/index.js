import React from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form, Row, Col, Select } from "antd";

const { Option } = Select;

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: true,
  };


  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  handleChange = e =>{
    this.setState({selectValue:e.target.value});
    console.log('selectedvalue',this.state.selectvalue)
  }
  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

class Paymentterms extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Amount",
        dataIndex: "amount",
        editable: true,
        align:'center'
      },
      {
        title: "PaymentDate",
        dataIndex: "paymentdate",
        editable: true,
        align:'center'
      },
      {
        title: "Remark",
        dataIndex: "remark",
        editable: true,
        align:'center'
      },
    
      {
        title: "Operation",
        dataIndex: "operation",
        align:'center',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a href="javascript:;">Delete</a>
            </Popconfirm>
          ) : null
      }
    ];

    this.state = {
      dataSource: [
        // {
        //   key: '0',
        //   name: 'Edward King 0',
        //   designation: '32',
        //   payment: 'London, Park Lane no. 0',
        //   type:'ok'
        // },
        // {
        //   key: '1',
        //   name: 'Edward King 1',
        //   designation: '32',
        //   payment: 'London, Park Lane no. 1',
        //   type:'ok'
        // },
      ],
      count: 2
    };
    console.log("datasourse", this.state.dataSource);
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      amount: null,
      paymentdate: null,
      remark: null,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ dataSource: newData });
    this.props.handlepayment(newData);
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    return (
      <div>
        <Row>
          <Col
            xl={{ span: 23 }} md = {{span :24}}
          >
            <Table
              components={components}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </Col>
        </Row>
        <Row>
          <Col xl={{ span: 2, offset: 15 }} lg = {{span:1,offset:14}} md = {{span:1,offset:13}} style={{ marginTop: "20px" }}>
            <Button
              onClick={this.handleAdd}
              type="primary"
              style={{ marginLeft: "16px" }}
            >
              Add Payment Terms
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Paymentterms;
