import React, { Component } from "react";
import CreateCharacter from "components/shared/AddCharacter";
import CharacterCard from "components/shared/CharacterCard";
import { Row, Col } from "antd";
import AuditionCardComponent from "components/AuditionCardComponent";
import ActorTabService from "services/SceneOverviewService/ActorTabService";
import { Services } from "constants/AppConstants";
import NoSceneFound from "components/NoSceneFound";
import SkeletonLoader from "components/shared/SkeletonLoader";

class SupportingCharacterComponent extends Component {
  state = {
    cardList: [],
    isActorsFetched: false
  };

  constructor(props) {
    super(props);
    this._actorService = new ActorTabService();
  }

  componentDidMount() {
    this.fetchActor();
  }

  fetchActor = () => {
    this.setState({ isActorsFetched: false });
    this._actorService
      .actorTabService(Services.SceneOVerviewVariable.GET_ACTOR, "SUPPORTING")
      .then(res => {
        console.log("Main", res.data.characters);
        this.setState({
          cardList: res.data.characters,
          isActorsFetched: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  refreshActors = () => {
    this.fetchActor();
  };

  renderActor = () => {
    console.log("renderActor...");
    let actorList = [];
    if (this.state.cardList) {
      this.state.cardList.map((actor, i) => {
        actorList.push(
          <AuditionCardComponent
            type={actor.characterType}
            characterName={actor.characterName}
            actorName={actor.actorName}
            characterId={actor.characterId}
            imageId={actor.profileImageId}
            refreshActors={this.refreshActors}
          />
        );
      });
      return actorList;
    }
    return <NoSceneFound refreshProjectList={this.refreshProjectList} />;
  };

  render() {
    return (
      <Row className="mb-25">
        <Col
          xl={{ offset: 1, span: 21 }}
          lg={{ offset: 1, span: 21 }}
          md={{ offset: 1, span: 21 }}
          style={{ border: "1px solid #ccc" }}
        >
          <h3
            className="font-600 text-left"
            style={{
              backgroundColor: "#001529",
              color: "#fff",
              padding: "10px"
            }}
          >
            Supporting Character :
          </h3>
          <CreateCharacter
            name="Add Supporting Character"
            type="SUPPORTING"
            refreshActors={this.refreshActors}
          />
          <Row className="pb-10">
            {this.state.isActorsFetched ? (
              this.renderActor()
            ) : (
              <SkeletonLoader />
            )}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default SupportingCharacterComponent;
