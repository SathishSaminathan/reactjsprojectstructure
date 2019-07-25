import { LocalStorage, Services } from "constants/AppConstants";
import axios from "axios";
import { getProjectApiURL } from "utilities/APIHelper";

export default class LocationTabService {
  locationTabService(type, id, data) {
    let config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem(LocalStorage.ACCESS_TOKEN)
        )}`
      }
    };

    switch (type) {
      case Services.SceneOVerviewVariable.GET_LOCATION:
        debugger;
        return axios.get(`${getProjectApiURL()}scene/${id}/locations`, config);
    }
  }
}
