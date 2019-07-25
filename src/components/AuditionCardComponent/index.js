import React, { Component } from "react";
import { Row, Col, Icon, Popconfirm, message } from "antd";
import { Images } from "assets/images";
//import "./AuditionCard.css";
import PropTypes from "prop-types";
import AuditionActorComponent from "components/AuditionActorComponent";
import ActorTabService from "services/SceneOverviewService/ActorTabService";
import { Services, Notifications } from "constants/AppConstants";
import LocationTabService from "services/SceneOverviewService/LocationTabService";
import { getApiURL } from "utilities/APIHelper";
import { showNotifications } from "components/shared/NotificationComponent";

class AuditionCardComponent extends Component {
  state = {
    name: null,
    status: null,
    imageId: null,
    characterId: null,
    cardList: []
  };

  constructor(props) {
    super(props);
    this._actorService = new ActorTabService();
    this._locationService = new LocationTabService();
  }

  componentDidMount() {
    // this.getCardDetails();
    this.setState({ characterId: 1 });
  }

  // getCardDetails() {
  //   const { type } = this.props;
  //   if (type != "Location") {
  //     this._actorService
  //       .actorTabService(Services.SceneOVerviewVariable.GET_ACTOR, type)
  //       .then(res => {
  //         console.log("Main", res.data.characters);
  //         this.setState({
  //           cardList: res.data.characters
  //         });
  //       });
  //   } else {
  //     this._locationService.locationTabService(
  //       Services.SceneOVerviewVariable.GET_LOCATION,
  //       1
  //     );
  //   }
  // }

  confirm = e => {
    this._actorService
      .actorTabService(
        Services.SceneOVerviewVariable.DELETE_ACTOR,
        this.props.characterId
      )
      .then(res => {
        showNotifications(
          Notifications.SUCCESS,
          "New Created Successfully",
          "Get your work simplified!!"
        );
        this.props.refreshActors();
      });
  };

  cancel = e => {
    console.log(e);
    // message.error("Click on No");
  };

  render() {
    const { characterName, actorName, type, imageId } = this.props;
    return (
      <div>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 10 }}
          md={{ span: 16 }}
          xs={{ span: 24 }}
          style={{ padding: "10px" }}
        >
          <div className="card">
            <div className="deleteCard">
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
            </div>
            <Row>
              <Col span={16} className="vertical-center pl-15">
                <h3>
                  <a className="font-600 text-ellipsis">
                    <AuditionActorComponent name={characterName} />
                  </a>
                </h3>
                <p>
                  {actorName != "null" && actorName != "undefined"
                    ? "To be confrom"
                    : actorName}
                </p>
              </Col>
              <Col span={8}>
                <img
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = `${Images.user}`;
                  }}
                  src={`${getApiURL()}/file/download/${
                    this.props.projectImageId
                  }`}
                  alt="user image"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </div>
    );
  }
}

export default AuditionCardComponent;
