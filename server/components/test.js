const dotenv = require("dotenv").config();
const cohere = require("cohere-ai");
cohere.init(process.env.API_KEY);

const GenerateResult = async () => {

  // classification
  const examples = [
    { text: "welcome", label: "conversation" },
    { text: "Good morning", label: "conversation" },
    { text: "Nice to know you ;)", label: "conversation" },
    {text: "Happy Hour specials: half-price appetizers and drinks from 4-6pm", label: "food"},
    {text: "Farm-to-table restaurant featuring locally sourced ingredients", label: "food"},
    {text: "Gluten-free options available upon request", label: "food"},
    {text: "Vegan and vegetarian-friendly menu", label: "food"},
    {text: "Fresh seafood caught daily", label: "food"},
    {text: "Award-winning BBQ ribs and brisket", label: "food"},
    {text: "Authentic Italian gelato made in-house daily", label: "food"},
    {text: "Try our famous margaritas made with fresh-squeezed lime juice", label: "food"},
    {text: "Family-owned and operated since 1950", label: "food"},
    {text: "Enjoy a traditional English afternoon tea with scones and clotted cream", label: "food"},
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
    "kung pao chicken",
    // "please use your phone to order",
    // "please be quiet",
  ];

  const response = await cohere.classify({
    model: "large",
    inputs: inputs,
    examples: examples,
  });

  console.log('classification: ');
  console.log(response.body.classifications[0].prediction + ' ' + response.body.classifications[0].input);

  for (let i = 0; i < 3; i++) {
    const generation = await cohere.generate({
          // model: "xlarge",
          prompt: response.body.classifications[0].input,
          // "meta": {
          //   "api_version": {
          //     "version": "1"
          //   },
          // max_tokens: 30,
          // temperature: 1,
    });
    console.log('generations: ');
    console.log(generation.body.generations[0].text)
    console.log('next is:')
 }

  // console.log('classification: ');
  // console.log(response.body.classifications[0].prediction + ' ' + response.body.classifications[0].input);
  // const generation = await cohere.generate({
  //       // model: "xlarge",
  //       prompt: response.body.classifications[0].input,
  //       // "meta": {
  //       //   "api_version": {
  //       //     "version": "1"
  //       //   },
  //       // max_tokens: 30,
  //       // temperature: 1,
  // });
  // console.log('generations: ');
  // console.log(generation.body.generations[0].text)
  // response.body.classifications.prediction
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
