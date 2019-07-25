import { ENV_CONSTANTS } from "constants/AppConstants";

export const getAuthApiURL = () => {
  return ENV_CONSTANTS.AUTH_API_URL_DEV;
};

export const getApiURL = () => {
  return ENV_CONSTANTS.API_URL_DEV;
};

export const getScriptDownloadUrl = () => {
  return ENV_CONSTANTS.PROJECTS_API_URL;
};

export const getProjectApiURL = () => {
  return ENV_CONSTANTS.PROJECTS_API_URL;
};
