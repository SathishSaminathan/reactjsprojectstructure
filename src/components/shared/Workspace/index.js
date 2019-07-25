import React, { Component } from "react";
import { Menus } from "constants/AppConstants";
import Dashboard from "components/Dashboard";
import Cast from "components/Cast";
import Crew from "components/Crew";
import Equipments from "components/Equipments";
import Approvals from "components/Approvals";
import HeroAudition from "components/HeroAudition";
import HeroineAudition from "components/HeroineAudition";
import Script from "components/Script";

class Workspace extends Component {
  renderComponent = showComponent => {
    switch (showComponent) {
      case Menus.DASHBOARD:
        return <Dashboard />;
      case Menus.CAST:
        return <Cast />;
      case Menus.CREW:
        return <Crew />;
      case Menus.EQUIPMENTS:
        return <Equipments />;
      case Menus.APPROVALS:
        return <Approvals />;
      case Menus.HERO_AUDITION:
        return <HeroAudition />;
      case Menus.HEROINE_AUDITION:
        return <HeroineAudition />;
      case Menus.SCRIPT:
        return <Script/>
      default:
        return null;
    }
  };
  render() {
    const { showComponent } = this.props;
    return <div>{this.renderComponent(showComponent)}</div>;
  }
}

export default Workspace;
