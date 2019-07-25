import axios from "axios";
import { Services, LocalStorage } from "constants/AppConstants";
import { getApiURL, getProjectApiURL } from "utilities/APIHelper";


export default class GlobalService {
  globalService(type, data) {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem(LocalStorage.ACCESS_TOKEN)
        )}`
      }
    };
    switch (type) {
      case Services.GlobalVariables.GET_IMAGE_ID:
        return axios.post(`${getApiURL()}/file/upload`, data, config);
      case Services.GlobalVariables.GET_IMAGE_FROM_ID:
        return axios.get(`${getApiURL()}/file/download/${data}`, config);
      case Services.GlobalVariables.GET_MASTER_DATA:
        return axios.get(
          `${getProjectApiURL()}script/master/data?type=${data}`
        );
      default:
        break;
    }
  }
}
