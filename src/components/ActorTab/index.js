import React, { Component } from "react";
import MainCharacterComponent from "components/MainCharacterComponent";
import SupportingCharacterComponent from "components/SupportingCharacterComponent";
import JuniorArtistComponent from "components/JuniorArtistComponent";

class ActorTab extends Component {
  render() {
    return (
      <div>
        <MainCharacterComponent />
        <SupportingCharacterComponent />
        <JuniorArtistComponent />
      </div>
    );
  }
}

export default ActorTab;
