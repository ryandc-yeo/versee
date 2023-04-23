const TextRec = async () => {
  const vision = require("@google-cloud/vision");
  const TranslateToEnglish = require("./translate");

  const client = new vision.ImageAnnotatorClient({
    keyFilename: "google-api.json",
  });

  const result = await client
    .textDetection("../public/koreanmenu.png")
    .then((results) => {
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
