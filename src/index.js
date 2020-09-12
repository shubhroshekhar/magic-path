import merge from 'lodash/merge';
import moment from 'moment';

const formatDataAsKey = (key, val) => {
  const [FT, FF] = key.split('$');
  const [, TYPE] = FT.split('_');
  if (TYPE === 'DATE') {
    let format = { day: 'DD', month: 'MM', year: 'YYYY' };
    const returnObj = {};
    try {
      format = JSON.parse(FF);
    } catch (e) {
      console.log(e);
    }
    const mmm = new moment(val);
    Object.keys(format).forEach(k => {
      if (format[k] === 'DD') {
        returnObj[k] = `${mmm.get('D')}`;
      } else if (format[k] === 'MM') {
        const month = `${mmm.get('M') + 1}`;
        returnObj[k] = month.length === 1 ? `0${month}` : month;
      } else if (format[k] === 'YYYY') {
        returnObj[k] = `${mmm.get('Y')}`;
      }
    });
    return returnObj;
  } else if (TYPE === 'DATEASSTRING') {
    let format = FF || 'DD/MM/YYYY';
    let returnDate = '';
    try {
      returnDate = moment(val).format(format);
    } catch (e) {
      returnDate = moment(val).format('DD/MM/YYYY');
    }
    return returnDate;
  }
  return val;
};


const getValueForKey = (o, kl) => {
  if (!o) {
    return;
  }
  if (kl.length > 1) {
    const [fst, ...oth] = kl;
    if (fst === '[]') {
      return o.map(obj => getValueForKey(obj, oth));
    } else if (new RegExp(/^\[\d+\]$/).test(fst)) {
      const indexFst = parseInt(fst.replace('[', '').replace(']', ''), 10);
      return getValueForKey(o[indexFst], oth);
    } else if (fst.indexOf('FORMAT') >= 0) {
      return getValueForKey(formatDataAsKey(fst, o), oth);
    }
    return getValueForKey(o[fst], oth);
  } else {
    const [fst] = kl;
    if (new RegExp(/^\[\d+\]$/).test(fst)) {
      const indexFst = parseInt(fst.replace('[', '').replace(']', ''), 10);
      return o[indexFst];
    } else if (fst === '[]') {
      return o;
    } else if (fst.indexOf('FORMAT') >= 0) {
      return formatDataAsKey(fst, o);
    }
    return fst ? o[fst] : o;
  }
};


const mapResponse = (data, mappining = {}) => {
  if (Array.isArray(mappining) && mappining.length) {
    return data.map(d => mapResponse(d, mappining[0]));
  } else if (typeof mappining === 'object' && Object.keys(mappining).length) {
    let responseData = {};
    Object.keys(mappining).forEach(key => {
      const d = createObjectAsPerName(key, mapResponse(data, mappining[key]));
      responseData = merge(responseData, d);
    });
    return responseData;
  } else if (typeof mappining === 'string' && mappining.length) {
    return getValueForKey(data, mappining.split('.'));
  }
  return data;
};

const get = (data, mapping, defaultValue) => {
  const value = mapResponse(data, mapping);
  return value || defaultValue;
}


export {
  get
};