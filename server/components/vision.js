const fs = require("fs");

const TextRec = async (scanImage) => {
  const vision = require("@google-cloud/vision");
  const TranslateToEnglish = require("./translate");

  const client = new vision.ImageAnnotatorClient({
    keyFilename: "google-api.json",
  });

  let base64Image = scanImage.imageSrc.split(";base64,").pop();

  fs.writeFile(
    "image.png",
    base64Image,
    { encoding: "base64" },
    function (err) {
      console.log("File created");
    }
  );

  const result = await client.textDetection("./image.png").then((results) => {
    const text = results[0].textAnnotations;
    return text;
  });

  console.log(result[0].description, result[0].locale);
  const translate = await TranslateToEnglish(
    JSON.stringify(result[0].description),
    "en"
  );
  console.log("Translation: ", translate);

  // RETRANSLATE
  // const double = await TranslateToEnglish(translate[0], result[0].locale);
  // console.log(double);
  return [translate, result[0].locale];
};

module.exports = TextRec;
