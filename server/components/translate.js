async function TranslateToEnglish(content, lang) {
  const { Translate } = require("@google-cloud/translate").v2;

  const translate = new Translate({
    keyFilename: "google-api.json",
  });

  const text = content;
  const target = lang;
  const model = "base";

  const options = {
    to: target,
    model: model,
  };

  let [translations] = await translate.translate(text, options);
  translations = Array.isArray(translations) ? translations : [translations];
  //   translations.forEach((translation, i) => {
  //     console.log(`${text} => (${target}) ${translation}`);
  //   });
  return translations;
}

module.exports = TranslateToEnglish;
