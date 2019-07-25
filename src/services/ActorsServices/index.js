import axios from "axios";
import { Services } from "constants/AppConstants";
import { getProjectApiURL } from "utilities/APIHelper";

export default class ActorsServices {
  actorsServices(type, token, data = null) {
    let config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };
    switch (type) {
      case Services.ActorVariables.GET_ACTORS_LIST:
        return axios.get(`${getProjectApiURL()}casts`, config);
      default:
        break;
    }
  }
}
