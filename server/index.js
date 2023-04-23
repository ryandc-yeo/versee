const express = require("express");
const app = express();
const cors = require("cors");
const GenerateResult = require("./components/test");

const port = 8000;
app.use(cors());

app.post("/generator", async (req, res) => {
  GenerateResult(req.body)
    .then((response) => res.send(response.slice(0, -1)))
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// const cohere = require("cohere-ai");
// cohere.init("JAYwzMA1JUPrBzxirI9Ie569NtE8SzAvQUQJeA1w"); // This is your trial API key
// app.get("/api", async (req, res) => {
//   const response = await cohere.generate({
//     model: "xlarge",
//     prompt:
//       "this is a trivia generation tool. It generates questions related to a given topic.\n-\nTopic: History\nQ: Who invented penicillin?\n-\nTopic: Entertainment\nQ: What was the first toy to be advertised on television?\n-\nTopic: Sports\nQ: Which two countries have not missed one of the modern-day Olympics?\n-\nTopic: Geography\nQ: What is the smallest country in the world?\n-\nTopic: ",
//     max_tokens: 300,
//     temperature: 0.9,
//     k: 0,
//     stop_sequences: ["-"],
//     return_likelihoods: "NONE",
//   });
//   // res.json(response.body);
//   console.log(`Prediction: ${response.body.generations[0].text}`);
// });

app.get("/", (req, res) => {
  res.send(
    "Server Running! I am a language translation/phrase suggesting app using Cohere AI."
  );
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
