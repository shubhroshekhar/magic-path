import moment from "moment";

const formatDataAsKey = (key, val) => {
  const [FT, FF] = key.split("$");
  const [, TYPE] = FT.split("_");
  if (TYPE === "DATE") {
    let format = { day: "DD", month: "MM", year: "YYYY" };
    const returnObj = {};
    try {
      format = JSON.parse(FF);
    } catch (e) {
      console.log(e); // eslint-disable-line
    }
    const mmm = new moment(val);
    Object.keys(format).forEach(k => {
      if (format[k] === "DD") {
        returnObj[k] = `${mmm.get("D")}`;
      } else if (format[k] === "MM") {
        const month = `${mmm.get("M") + 1}`;
        returnObj[k] = month.length === 1 ? `0${month}` : month;
      } else if (format[k] === "YYYY") {
        returnObj[k] = `${mmm.get("Y")}`;
      }
    });
    return returnObj;
  } else if (TYPE === "DATEASSTRING") {
    let format = FF || "DD/MM/YYYY";
    let returnDate = "";
    try {
      returnDate = moment(val).format(format);
    } catch (e) {
      returnDate = moment(val).format("DD/MM/YYYY");
    }
    return returnDate;
  }
  return val;
};

export default formatDataAsKey;

