import axios from "axios";
import { Services, LocalStorage } from "constants/AppConstants";
import { getAuthApiURL, getApiURL } from "utilities/APIHelper";

// const headers = {
//   'Content-Type': 'application/json',
//    }
export default class LocationServices {
  service(type, data, token) {
    let config = {
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem(
          LocalStorage.ACCESS_TOKEN
        ))}`
      }
    };
    switch (type) {
      case Services.LocationVariables.GET_LOCATION_LIST:
        return axios.post(`${getAuthApiURL()}/users/authenticate`, data);
      case Services.LocationVariables.ADD_LOCATION:
        return axios.put(`${getAuthApiURL()}/user/password`, data);
      default:
        break;
    }
  }
}
