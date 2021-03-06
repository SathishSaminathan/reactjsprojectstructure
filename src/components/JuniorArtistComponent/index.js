import React, { Component } from "react";
import CreateCharacter from "components/shared/AddCharacter";
import CharacterCard from "components/shared/CharacterCard";
import { Row, Col } from "antd";
import JuniorArtistTable from "components/JuniorArtistTable";
import ActorTabService from "services/SceneOverviewService/ActorTabService";
import { Services } from "constants/AppConstants";
import NoSceneFound from "components/NoSceneFound";

class JuniorArtistComponent extends Component {
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
      .actorTabService(Services.SceneOVerviewVariable.GET_ACTOR, "JUNIOR")
      .then(res => {
        console.log("Main", res.data.characters);
        this.setState(
          {
            cardList: res.data.characters,
            isActorsFetched: true
          },
          () => {
            console.log("list....", res);
          }
        );
      });
  };

  refreshActors = () => {
    this.fetchActor();
  };

  renderActor = () => {
    console.log("renderActor...");
    let actorList = [];
    if (this.state.cardList) {
      // this.state.cardList.map((actor, i) => {
      //   actorList.push(
      //     <JuniorArtistTable
      //       type={actor.characterType}
      //       characterName={actor.characterName}
      //       characterId={actor.characterId}
      //       refreshActors={this.refreshActors}
      //       characterCount={actor.characterCount}
      //     />
      //   );
      // });

      actorList.push(<JuniorArtistTable data={this.state.cardList} />);

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
            Junior Artist :
          </h3>
          <CreateCharacter type="JUNIOR" name="Add Junior Character" />
          <Row className="pb-10">
            <Col xl={{ span: 8, offset: 8 }}>
              <JuniorArtistTable />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default JuniorArtistComponent;
