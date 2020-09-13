
const createObjectAsPerNameArray = (arr, val) => {
  if (arr.length === 0) {
    return val;
  }
  const [fst, ...oth] = arr;
  if (fst === "[]") {
    return [createObjectAsPerNameArray(oth, val)];
  }
  return { [fst]: createObjectAsPerNameArray(oth, val) };
};

const createObjectAsPerName = (oName, value) => {
  if (!oName) {
    return value;
  }
  const nameArray = oName.split(".");
  return createObjectAsPerNameArray(nameArray, value);
};

export default createObjectAsPerName;