const dotenv = require("dotenv").config();
const cohere = require("cohere-ai");
cohere.init(process.env.API_KEY);

const GenerateResult = async () => {
  const examples = [
    { text: "welcome", label: "conversation" },
    { text: "Good morning", label: "conversation" },
    { text: "dasdfs", label: "Spam" },
    { text: "Nice to know you ;)", label: "conversation" },
    { text: "Please help me?", label: "Spam" },
    { text: "Your parcel will be delivered today", label: "Not spam" },
    { text: "Review changes to our Terms and Conditions", label: "Not spam" },
    { text: "Weekly sync notes", label: "Not spam" },
    { text: "'Re: Follow up from today's meeting'", label: "Not spam" },
    { text: "Pre-read for tomorrow", label: "Not spam" },
  ];
  const inputs = ["Confirm your email address", "hey i need u to send some $"];

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
