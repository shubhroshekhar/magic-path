import merge from "lodash/merge";
import createObjectAsPerName from "./createObjectAsPerName";

const set = (path = "", value, data = {}) => {
  const dataAsPerName = createObjectAsPerName(path, value);
  const responseData = merge(dataAsPerName, data);
  return responseData;
};

export default set;
