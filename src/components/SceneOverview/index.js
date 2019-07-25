import React, { Component } from "react";
import ScriptOverview from "components/ScriptOverview";

class SceneOverview extends Component {
  componentDidMount() {
    console.log("componentDidMount SceneOverview");
  }

  render() {
    return (
      <div>
        <ScriptOverview />
      </div>
    );
  }
}

export default SceneOverview;
