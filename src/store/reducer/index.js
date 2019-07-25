import { combineReducers } from "redux";
import {
  SET_FONTSIZE,
  SET_USER,
  REMOVE_USER,
  SET_ACCESS_TOKEN,
  SET_ACTIVE_MENU,
  SET_ACTIVE_PROJECT
} from "store/action/actionTypes";
import { FontStyles } from "constants/AppConstants";

const fontInitialState = {
  fontSize: FontStyles.SMALL
};

const userInitialState = {
  currentUser: null,
  accessToken: null
};

const activeInitialState = {
  activeMenu: null,
  activeProject: null
};

const fontReducer = (state = fontInitialState, action) => {
  switch (action.type) {
    case SET_FONTSIZE:
      return {
        ...state,
        fontSize: action.payload.size
      };

    default:
      return state;
  }
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken
      };
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload.user
      };

    case REMOVE_USER:
      return {
        ...state,
        currentUser: null,
        accessToken: null
      };
    default:
      return state;
  }
};

const setActiveReducer = (state = activeInitialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_MENU:
      return {
        ...state,
        activeMenu: action.payload.menu
      };
    case SET_ACTIVE_PROJECT:
      return {
        ...state,
        activeProject: action.payload.projectId
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  fontStyle: fontReducer,
  activeItems: setActiveReducer
});

export default rootReducer;
