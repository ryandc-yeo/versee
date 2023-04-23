// import openai from "openai";
const dotenv = require("dotenv").config();
const cohere = require("cohere-ai");
const openai = require("openai");
cohere.init(process.env.API_KEY);
openai.api_key = process.env.OPENAI_API_KEY;

const GenerateResult = async () => {
  // const [inputText, setInputText] = useState("");
  // const [outputText, setOutputText] = useState(null);

  // classification
  const examples = [
    {text: "Yield ahead", label: "transportation"},
    {text: "Next stop: Central Station", label: "transportation"},
    {text: "No parking between 8AM-6PM", label: "transportation"},
    {text: "Beef burger with fries", label: "food"},
    {text: "Vegan pizza with mushrooms and peppers", label: "food"},
    {text: "Chocolate cake with raspberry sauce", label: "food"},
    {text: "Hi, how are you?", label: "conversations"},
    {text: "What can I get for you today?", label: "conversations"},
    {text: "Excuse me, do you know where the restroom is?", label: "conversations"},
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
    {text: "Exit 15A: Downtown", label: "transportation"},
    {text: "Arriving at Gate 27", label: "transportation"},
    {text: "No bicycles on the sidewalk", label: "transportation"},
    {text: "Fried rice with chicken and vegetables", label: "food"},
    {text: "Salmon with mashed potatoes and green beans", label: "food"},
    {text: "Shrimp cocktail appetizer", label: "food"},
    {text: "Nice to meet you, my name is John", label: "conversations"},
    {text: "What brings you here today?", label: "conversations"},
    {text: "How was your weekend?", label: "conversations"},
    {text: "One way ticket to Los Angeles, please", label: "transportation"},
    {text: "Boarding now for Flight 345 to Chicago", label: "transportation"},
    {text: "No left turn at this intersection", label: "transportation"},
    {text: "Grilled cheese sandwich with tomato soup", label: "food"},
    {text: "Chicken fajitas with rice and beans", label: "food"},
    {text: "Ice cream sundae with whipped cream and cherry", label: "food"},
    {text: "Excuse me, can you help me find my gate?", label: "conversations"},
    {text: "What do you recommend on the menu?", label: "conversations"},
    {text: "Where are you from originally?", label: "conversations"},
  ];
  const inputs = [
    "kung pao chicken",
    // "please use your phone to order",
    // "please be quiet",
  ];

  const outputs_array = [];

  // const response = await cohere.classify({
  //   model: "large",
  //   inputs: inputs,
  //   examples: examples,
  // });

  // setInputText(inputs[0])

  // console.log('classification: ');
  // console.log(response.body.classifications[0].prediction + ' ' + response.body.classifications[0].input);

  const prompt = inputs[0];
    const response = await openai.Completion.create({
      model: "text-davinci-003",
      prompt,
      temperature: 0.6,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1
      });
      console.log(response.body);
      // const message = response.choices[0].text.trim();
      // console.log(message);
      outputs_array.append(response.body);
  // TODO: undo later
  // for (let i = 0; i < 3; i++) {
  //   const prompt = inputs[0];
  //   const response = await openai.Completion.create({
  //     model: "text-davinci-003",
  //     prompt,
  //     temperature: 0.6,
  //     max_tokens: 150,
  //     top_p: 1,
  //     frequency_penalty: 1,
  //     presence_penalty: 1
  //     });
  //     console.log(response.body);
  //     // const message = response.choices[0].text.trim();
  //     // console.log(message);
  //     outputs_array.append(response.body);
  //   };

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
    // console.log('next is:')
//  }

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
  return outputs_array;
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
