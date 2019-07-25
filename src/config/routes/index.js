import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "screens/Home";
import Login from "screens/auth/Login";
import PageNotFound from "components/shared/PageNotFound";
import ProjectPage from "screens/ProjectPage";
import Cast from "components/Cast";
import Dashboard from "components/Dashboard";
import Script from "components/Script";
import Crew from "components/Crew";
import Equipments from "components/Equipments";
import Approvals from "components/Approvals";
import Projects from "components/Projects";
import LocationAudition from "components/Location/LocationAudition";
import Makeup from "components/Makeup";
import VFX from "components/Vfx";
import Song from "components/Song";
import Stunt from "components/Stunt";
import Actor from "components/Actor";
import SceneOverview from "components/SceneOverview";
import actorprofiledata from "components/Actorprofile";
import AddlocationForm from "components/addlocation";
import Location from "components/Location";
import CreateLocationModal from "components/Location/AddLocationModal";

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/project" component={ProjectPage} />
      <Route path="/" component={Home} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

const WelcomeRoutes = () => {
  return (
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/approvals" component={Approvals} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

const ProjectRoutes = () => {
  return (
    <Switch>
      <Route path="/project/overview/:id" component={Dashboard} />
      <Route path="/project/script" component={Script} />
      <Route path="/project/actor" component={Actor} />
      <Route path="/project/art/set" component={Crew} />
      <Route path="/project/costumes" component={Equipments} />
      <Route path="/project/makeup" component={Makeup} />
      <Route path="/project/vfx" component={VFX} />
      <Route path="/project/song" component={Song} />
      <Route path="/project/stunt" component={Stunt} />
      <Route path="/project/sceen-overview" component={SceneOverview} />
      <Route path="/project/location" component={Location}/>
      <Route path="/project/actorprofile" component={actorprofiledata}/>
      <Route path="/project/addlocationmodal" component={CreateLocationModal}/>
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export { MainRoutes, ProjectRoutes, WelcomeRoutes };
