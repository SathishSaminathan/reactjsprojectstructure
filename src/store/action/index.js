import {
  SET_FONTSIZE,
  SET_USER,
  REMOVE_USER,
  SET_ACCESS_TOKEN,
  SET_ACTIVE_PROJECT,
  SET_ACTIVE_MENU
} from "./actionTypes";

export const setFontSize = size => {
  return {
    type: SET_FONTSIZE,
    payload: {
      size
    }
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    payload: {
      user
    }
  };
};

export const setAccessToken = accessToken => {
  return {
    type: SET_ACCESS_TOKEN,
    payload: {
      accessToken
    }
  };
};

export const setActiveMenu = menu => {
  return {
    type: SET_ACTIVE_MENU,
    payload: {
      menu
    }
  };
};

export const setActiveProject = projectId => {
  return {
    type: SET_ACTIVE_PROJECT,
    payload: {
      projectId
    }
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};
