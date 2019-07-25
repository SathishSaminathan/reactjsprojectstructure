import { Errors } from "constants/AppConstants";

export const handleResponse = code => {
  let res = Errors.filter(a => a.status === code);
  return res;
};
