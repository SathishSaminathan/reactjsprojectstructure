import axios from "axios";
import { Services } from "constants/AppConstants";
import { getProjectApiURL, getApiURL } from "utilities/APIHelper";

export default class OnboardServices {
  projectServices(type, token, data = null, companyId) {
    let config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };
    switch (type) {
      case Services.DashboardVariables.GET_PROJECT_LIST:
        return axios.get(`${getProjectApiURL()}projects`, config);
      case Services.DashboardVariables.UPDATE_COMPANY:
        return axios.put(`${getApiURL()}/companies/${companyId}`, data, config);
      case Services.DashboardVariables.GET_COMPANY:
        return axios.get(`${getApiURL()}/companies/${data}`, config);
      default:
        break;
    }
  }
}
