import { LocalStorage, Services } from "constants/AppConstants";
import axios from "axios";
import { getProjectApiURL } from "utilities/APIHelper";

export default class ActorTabService {
  actorTabService(type, data) {
    let config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem(LocalStorage.ACCESS_TOKEN)
        )}`
      }
    };

    switch (type) {
      case Services.SceneOVerviewVariable.GET_ACTOR:
        return axios.get(
          `${getProjectApiURL()}scene/1/characters?types=${data}`,
          config
        );
      case Services.SceneOVerviewVariable.ADD_ACTOR:
        return axios.post(`${getProjectApiURL()}characters`, data, config);
      case Services.SceneOVerviewVariable.DELETE_ACTOR:
        return axios.delete(`${getProjectApiURL()}characters/${data}`, config);
      default:
        break;
    }
  }
}
