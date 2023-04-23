// import openai from "openai";
const dotenv = require("dotenv").config();
const cohere = require("cohere-ai");

cohere.init(process.env.API_KEY);

const GenerateResult = async () => {
  const inputs = [
    "bulgogi"
  ];

  const outputs_array = [];

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const prompt = inputs[0];
  
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: 'create 4 relevant short phrases to converse or ask about ' + prompt + ' with locals, not romanized',
    temperature: 0.6,
    max_tokens: 150,
  });
  console.log(prompt);
    console.log(response.data.choices[0].text);
    outputs_array.append(response.data.choices[0].text);

  return outputs_array;
};

module.exports = GenerateResult;
