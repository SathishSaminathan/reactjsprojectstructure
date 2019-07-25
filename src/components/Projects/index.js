import React, { Component, Fragment } from "react";
import { ProjectServices } from "services";
import { connect } from "react-redux";

import CreateProject from "components/CreateProject";
import CreateCompany from "components/CreateCompany";
import ProjectItem from "components/Dashboard/ProjectItem";
import { Services } from "constants/AppConstants";
import NoProjectFound from "components/NoProjectFound";
import SkeletonLoader from "components/shared/SkeletonLoader";
import Resetpassword from "components/Reset Password";

class Projects extends Component {
  constructor(props) {
    super(props);
    this._projectServices = new ProjectServices();
    this.state = {
      projectList: null,
      isProjectsFetched: false
    };
  }

  componentDidMount() {
    console.log("componentDidMount Schedule... ", this.props.accessToken);
    this.fetchProjects();
  }

  fetchProjects = () => {
    const { accessToken } = this.props;
    this.setState({ isProjectsFetched: false });
    this._projectServices
      .projectServices(
        Services.DashboardVariables.GET_PROJECT_LIST,
        accessToken
      )
      .then(res => {
        console.log("res...", res);
        this.setState({
          projectList: res.data.projects,
          isProjectsFetched: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  refreshProjectList = () => {
    this.fetchProjects();
  };

  renderProjects = () => {
    const { projectList } = this.state;
    let projectListTemplate = [];
    if (projectList) {
      projectList.map((project, i) => {
        projectListTemplate.push(
          <ProjectItem
            key={i}
            createdDate={project.createdDate}
            projectId={project.projectId}
            projectTitle={project.projectTitle}
            projectImageId={project.projectimageId}
          />
        );
      });
      return projectListTemplate;
    }
    return <NoProjectFound refreshProjectList={this.refreshProjectList} />;
  };

  render() {
    const { isProjectsFetched } = this.state;

    return (
      <Fragment>
        <Resetpassword/>
        <CreateCompany />
        <div style={{ paddingBottom: 10 }}>
          <CreateProject refreshProjectList={this.refreshProjectList} />
        </div>
        {isProjectsFetched ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {this.renderProjects()}
          </div>
        ) : (
          <SkeletonLoader />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
    accessToken: user.accessToken
  };
};
export default connect(mapStateToProps)(Projects);
