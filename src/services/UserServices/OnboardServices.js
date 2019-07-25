import axios from "axios";
import { Services, LocalStorage } from "constants/AppConstants";
import { getAuthApiURL, getApiURL } from "utilities/APIHelper";

// const headers = {
//   'Content-Type': 'application/json',
//    }
export default class OnboardServices {
  onboardService(type, data) {
    console.log("onboard",data);
    let config = {
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem(LocalStorage.ACCESS_TOKEN))} `
      }
    };
   
    switch (type) {
      case Services.OnboardVariables.LOGIN:
        return axios.post(`${getAuthApiURL()}/users/authenticate`, data);
      case Services.OnboardVariables.FORGOT_PASSWORD:
        return axios.put(`${getAuthApiURL()}/user/password`, data);
        case Services.OnboardVariables.RESET_PASSWORD:
          return axios.put(`${getAuthApiURL()}/user/password/reset`, data,config);
      case Services.OnboardVariables.LOGOUT:
        return axios.get(`${getAuthApiURL()}/users/logout`, config);
      case Services.OnboardVariables.GET_USER_DETAILS:
        return axios.get(`${getApiURL()}/user`, config);
      default:
        break;
    }
  }
}
