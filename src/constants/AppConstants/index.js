import * as Services from "./ServicesConstants";
import { Icons } from "./IconConstants";
import { Errors } from "./ErrorConstants";

const LOCAL_IP = "122.165.203.72";
const PORT = "5051";

const ENV_CONSTANTS = {
  API_URL_DEV: `http://` + LOCAL_IP + `:` + PORT + `/user/api/v1`,
  AUTH_API_URL_DEV: `http://` + LOCAL_IP + `:` + PORT + `/user-auth/api/v1`,
  PROJECTS_API_URL: `http://` + LOCAL_IP + `:` + PORT + `/script/api/v1/`,
};

const FontStyles = {
  SMALL: "15px",
  MEDIUM: "20px",
  LARGE: "30px"
};

const Menus = {
  DASHBOARD: "Dashboard",
  ACTORS: "Actors",
  ART_SET: "ART/SET",
  COSTUMES: "Costumes",
  APPROVALS: "Approvals",
  HERO_AUDITION: "Hero Audition",
  HEROINE_AUDITION: "Heroine Audition",
  COLLECTION: "Collections",
  SCRIPTS_BREAKDOWN: "Script Breakdown",
  OVERVIEW: "Overview",
  // LOCATION: "Location",
  LOCATION_AUDITION: "Location",
  MAKEUP: "Makeup",
  VFX: "VFX",
  SONG: "Song",
  STUNT: "Stunt",
  SCENE_OVERVIEW: "Scene Overview"
};

const Notifications = {
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info",
  ERROR: "error",
  SUCCESS_CAP: "Success",
  WARNING_CAP: "Warning",
  INFO_CAP: "Info",
  ERROR_CAP: "Error"
};

const LocalStorage ={
  USER:"user",
  ACCESS_TOKEN:"accessToken",
  ACTIVE_PROJECT_ID:"projectId"
}

export {
  Menus,
  Icons,
  FontStyles,
  Services,
  Notifications,
  ENV_CONSTANTS,
  Errors,
  LocalStorage
};
