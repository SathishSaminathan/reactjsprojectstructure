import { Services,LocalStorage  } from "constants/AppConstants";
import axios from "axios";
import { getScriptDownloadUrl } from "utilities/APIHelper";

export default class ScriptService {
  scriptService(type, companyId, data) {
    switch (type) {

      case Services.ScriptVariables.DOWNLOAD:
        return axios.get(`${getScriptDownloadUrl()}/script/template/download`);

      case Services.AddActor.ADD_ACTOR:
          return axios.post(`${getScriptDownloadUrl()}/actors`,data, {
            headers: {
               "Authorization": `Bearer ${JSON.parse(localStorage.getItem(LocalStorage.ACCESS_TOKEN))} `
            }
          });

      case Services.ScriptVariables.UPLOAD:
        return axios.post(`${getScriptDownloadUrl()}project/${companyId}/scenes/import`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      default:
        break;
    }
  }
}
