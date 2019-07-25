import React, { Component } from "react";
import { Card, Button, Icon } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";

import { Images } from "assets/images";
import { setActiveProject } from "store/action";
import CreateProject from "components/Reset Password";
import { LocalStorage } from "constants/AppConstants";
import Axios from "axios";
import { getApiURL } from "utilities/APIHelper";

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectImageId: null
    };
  }

  setActiveProjects = projectId => {
    localStorage.setItem(LocalStorage.ACTIVE_PROJECT_ID, projectId);
    this.props.setActiveProject(projectId);
  };
  render() {
    const { createdDate, projectId, projectTitle, projectImageId } = this.props;
    return (
      <div style={{ display: "inline", margin: "0 10px 10px 0 " }}>
        <Link
          to={`/project/overview/${projectId}`}
          onClick={() => this.setActiveProjects(projectId)}
        >
          <div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = `${Images.camera}`;
                  }}
                  src={`${getApiURL()}/file/download/${
                    this.props.projectImageId
                  }`}
                  style={{ objectFit: "cover", height: 150 }}
                  alt="camera image"
                />
              }
            >
              <Link to="/project/overview/1">
                <h3>{projectTitle}</h3>
              </Link>
              <p>Created {`${moment(createdDate).fromNow()}`}</p>
            </Card>
          </div>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveProject: projectId => dispatch(setActiveProject(projectId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProjectItem);
