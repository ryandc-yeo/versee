const fs = require("fs");

const readJsonFile = () => {
  const array = JSON.parse(fs.readFileSync("./reviews.json", "utf-8"));
  return array;
};

const writeJsonFile = (data) => {
  return JSON.stringify(fs.writeFileSync("./reviews.json", data));
};

exports.writeToJson = function (data) {
  const existingJson = readJsonFile();
  const updatedJson = JSON.stringify(existingJson.concat(data));
  writeJsonFile(updatedJson);
};
