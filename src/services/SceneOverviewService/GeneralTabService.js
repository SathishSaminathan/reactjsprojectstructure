import { Services, LocalStorage } from "constants/AppConstants";
import axios from "axios";
import { getProjectApiURL } from "utilities/APIHelper";

export default class GeneralTabService {
  generalTabService(type, data) {
    let config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem(LocalStorage.ACCESS_TOKEN)
        )}`
      }
    };

    switch (type) {
      case Services.SceneOVerviewVariable.GET_SCENE:
        return axios.get(`${getProjectApiURL()}scenes/${data}`, config);
      case Services.SceneOVerviewVariable.UPDATE_SCENE:
        debugger;
        return axios.put(`${getProjectApiURL()}scenes/1`, data, config);
      default:
        break;
    }
  }
}
