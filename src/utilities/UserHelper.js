import { OnboardServices } from "services";
import { Services, LocalStorage } from "constants/AppConstants";
import Axios from "axios";
import { getApiURL } from "./APIHelper";

export const getUser = () => {
  let config = {
    headers: {
      "Authorization": `Bearer ${JSON.parse(
        localStorage.getItem(LocalStorage.ACCESS_TOKEN)
      )}`
    }
  };
  return Axios.get(`${getApiURL()}/user`, config);
};
