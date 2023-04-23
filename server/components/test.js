const dotenv = require("dotenv").config();
const cohere = require("cohere-ai");
cohere.init(process.env.API_KEY);

const GenerateResult = async () => {
  const examples = [
    { text: "welcome", label: "conversation" },
    { text: "Good morning", label: "conversation" },
    { text: "Nice to know you ;)", label: "conversation" },
    { text: "beef", label: "food" },
    { text: "pork", label: "food" },
    { text: "stew", label: "food" },
    { text: "cake", label: "food" },
    { text: "rice", label: "food" },
    { text: "spicy", label: "food" },
    { text: "sweet", label: "food" },
    { text: "bean", label: "food" },
    { text: "fried", label: "food" },
    { text: "chicken", label: "food" },
    { text: "soup", label: "food" },
    { text: "tofu", label: "food" },
    { text: "fish", label: "food" },
    { text: "broth", label: "food" },
    { text: "lamb", label: "food" },
    { text: "bus station", label: "transportation" },
    { text: "subway", label: "transportation" },
    { text: "bus arriving", label: "transportation" },
    { text: "late arrival", label: "transportation" },
    { text: "early arrival", label: "transportation" },
    { text: "delayed", label: "transportation" },
    { text: "train arriving in 10 minutes", label: "transportation" },
    { text: "exit", label: "transportation" },
    { text: "tracks", label: "transportation" },
    { text: "bus stops", label: "transportation" },
    { text: "transfer", label: "transportation" },
    { text: "do not rush", label: "transportation" },
  ];
  const inputs = [
    "welcome to the jungle",
    "please use your phone to order",
    "please be quiet",
  ];

  const response = await cohere.classify({
    model: "large",
    inputs: inputs,
    examples: examples,
  });
  console.log(response.body.classifications);
  return response.body.classifications;
};

// const GenerateResult = async () => {
//   const response = await cohere.generate({
//     model: "xlarge",
//     prompt: "Once upon a time in a magical land called",
//     max_tokens: 100,
//     temperature: 1,
//   });
//   console.log(response.body.generations[0].text);
//   return response.body.generations[0].text;
// };

module.exports = GenerateResult;
