import axios from "axios";
import { Services, LocalStorage } from "constants/AppConstants";
import { getAuthApiURL, getApiURL } from "utilities/APIHelper";

// const headers = {
//   'Content-Type': 'application/json',
//    }
export default class ArtSetServices {
  service(type, data, token) {
    let config = {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem(
          LocalStorage.ACCESS_TOKEN
        )}`
      }
    };
    switch (type) {
      case Services.ArtSetVariables.GET_ART_SET_LIST:
        return axios.post(`${getAuthApiURL()}/users/authenticate`, data);
      case Services.ArtSetVariables.ADD_ART_SET:
        return axios.put(`${getAuthApiURL()}/user/password`, data);
      default:
        break;
    }
  }
}
