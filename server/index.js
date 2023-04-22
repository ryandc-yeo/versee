const cohere = require("cohere-ai");
const express = require("express");
const cors = require("cors");
const { writeToJson } = require("./utils");
require("dotenv").config();

// express app declaration after the imports
const app = express();
const port = 8000;
const router = express.Router();

// middlewares after calling express()
app.use(cors());
app.use(express.json());
cohere.init(process.env.API_KEY);

app.get("/", (req, res) => {
  res.send(
    "Hello World! I am a language translation/phrase suggesting app using Cohere AI."
  );
});

router.post("/", async (req, res) => {
  res.send("hi there");
});

// at the end of the file
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
