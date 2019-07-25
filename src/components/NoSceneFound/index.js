import React from "react";
import TextComponent from "components/shared/TextComponent";
import CreateProject from "components/CreateProject";
import { Images } from "assets/images";

const NoSceneFound = props => {
  const refreshProjectList = () => {
    props.refreshProjectList();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <TextComponent style={{ color: "red" }} customize>
        <img
          src={Images.logo}
          style={{ width: "10%", height: "10%", objectFit: "contain" }}
          alt="logo image"
        />
        <h2>No Actor found for this scene</h2>
      </TextComponent>
    </div>
  );
};

export default NoSceneFound;
