// import openai from "openai";
const dotenv = require("dotenv").config();
const cohere = require("cohere-ai");
const { output, trailingSlash } = require("../../next.config");
const TextRec = require("./vision");
const TranslateToEnglish = require("./translate");

cohere.init(process.env.API_KEY);

const GenerateResult = async () => {
  const inputs = await TextRec();

  const outputs_array = [];

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const prompt = inputs;
  console.log(prompt);

  for (let i = 0; i < 3; i++) {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        "create 1 relevant short phrase to converse or ask about " +
        prompt +
        " with locals in the local language",
      temperature: 0.6,
      max_tokens: 150,
    });
    outputs_array.push(response.data.choices[0].text);
  }

  const romanized_array = [];
  for (let i = 0; i < 3; i++) {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "write " + outputs_array[i] + " romanized",
      temperature: 0.6,
      max_tokens: 150,
    });
    romanized_array.push(response.data.choices[0].text);
  }

  const translated_array = [];
  for (let i = 0; i < 3; i++) {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "write " + outputs_array[i] + " translated to English",
      temperature: 0.6,
      max_tokens: 150,
    });
    translated_array.push(response.data.choices[0].text);
  }

  console.log(prompt);
  // console.log(response.data.choices[0].text);
  outputs_array.map((phrase) => {
    console.log(phrase);
  });
  romanized_array.map((phrase) => {
    console.log(phrase);
  });
  translated_array.map((phrase) => {
    console.log(phrase);
  });

  // outputs_array.map(async (i) => {
  //   const translate = await TranslateToEnglish(i, "en");
  //   console.log(translate);
  // });

  return [outputs_array, romanized_array, translated_array, 1];
};

module.exports = GenerateResult;
