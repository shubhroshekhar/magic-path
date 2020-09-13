import merge from "lodash/merge";
import formatDataAsKey from "./formatDataAsKey";
import createObjectAsPerName from "./createObjectAsPerName";

const getValueForKey = (o, kl) => {
  if (!o) {
    return;
  }
  if (kl.length > 1) {
    const [fst, ...oth] = kl;
    if (fst === "[]") {
      return o.map(obj => getValueForKey(obj, oth));
    } else if (new RegExp(/^\[\d+\]$/).test(fst)) {
      const indexFst = parseInt(fst.replace("[", "").replace("]", ""), 10);
      return getValueForKey(o[indexFst], oth);
    } else if (fst.indexOf("FORMAT") >= 0) {
      return getValueForKey(formatDataAsKey(fst, o), oth);
    }
    return getValueForKey(o[fst], oth);
  } else {
    const [fst] = kl;
    if (new RegExp(/^\[\d+\]$/).test(fst)) {
      const indexFst = parseInt(fst.replace("[", "").replace("]", ""), 10);
      return o[indexFst];
    } else if (fst === "[]") {
      return o;
    } else if (fst.indexOf("FORMAT") >= 0) {
      return formatDataAsKey(fst, o);
    }
    return fst ? o[fst] : o;
  }
};


const mapResponse = (data, mappining = {}) => {
  if (Array.isArray(mappining) && mappining.length) {
    return data.map(d => mapResponse(d, mappining[0]));
  } else if (typeof mappining === "object" && Object.keys(mappining).length) {
    let responseData = {};
    Object.keys(mappining).forEach(key => {
      const d = createObjectAsPerName(key, mapResponse(data, mappining[key]));
      responseData = merge(responseData, d);
    });
    return responseData;
  } else if (typeof mappining === "string" && mappining.length) {
    return getValueForKey(data, mappining.split("."));
  }
  return data;
};

const get = (data, mapping, defaultValue) => {
  const value = mapResponse(data, mapping);
  return value || defaultValue;
};

export default get;