import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table, Switch, Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ActorsServices from "services/ActorsServices";
import { Services } from "constants/AppConstants";

const columns = [
  {
    title: "S No",
    dataIndex: "age",
    align: "center"
  },
  {
    title: "Character",
    dataIndex: "desc",
    align: "center"
  },
  {
    title: "Actor",
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
    // title: "Action",
    key: "action",
    align: "center",
    render: (text, record) => (
      <span>
        <a>
          <Link to="/project/actorprofile">More</Link>
        </a>
      </span>
    )
  }
];
const data = [
  {
    key: "1",
    age: "1",
    loc: "Arjun",
    desc: "Aditya"
  },
  {
    key: "2",
    age: "2",
    loc: "Aditi",
    desc: "Yazhini"
  },
  {
    key: "3",
    age: "3",
    loc: "Madhu",
    desc: "Krithi"
  },
  {
    key: "4",
    age: "4",
    desc: "krishna",
    loc: "Yet to be confirmed"
  }
];
class Cast extends Component {
  constructor(props) {
    super(props);
    this._actorsServices = new ActorsServices();
    this.state = {
      actorsList: null,
      isActorsFetched: false
    };
  }

  componentDidMount() {
    this.fetchActors();
  }

  fetchActors = () => {
    this._actorsServices
      .actorsServices(
        Services.ActorVariables.GET_ACTORS_LIST,
        this.props.accessToken
      )
      .then(res => {
        console.log(res);
        this.setState({
          isActorsFetched: false
        });
      });
  };

  render() {
    const { actorsList, isActorsFetched } = this.state;

    return (
      <div>
        <Link to="/project/actorprofile">
          <Button type="primary" icon="plus" style={{ marginBottom: "20px" }}>
            Add Actor
          </Button>
        </Link>
        <Table
          columns={columns}
          dataSource={actorsList}
          pagination={false}
          loading={isActorsFetched}
        />
        ;
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    accessToken: user.accessToken
  };
};

export default connect(mapStateToProps)(Cast);
