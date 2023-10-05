import express from "express";
import cors from "cors";
import { loremIpsum } from "lorem-ipsum";
const app = express();

const port = 3000;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.get("/lorem/:runs/:ipsum", (req, res) => {
  const { runs, ipsum } = req.params;

  if (ipsum === "true") {
    res.json(
      loremIpsum({
        count: runs, // Number of "words", "sentences", or "paragraphs"
        format: "plain", // "plain" or "html"
        paragraphLowerBound: 5, // Min. number of sentences per paragraph.
        paragraphUpperBound: 8, // Max. number of sentences per paragarph.
        random: Math.random, // A PRNG function
        sentenceLowerBound: 15, // Min. number of words per sentence.
        sentenceUpperBound: 30, // Max. number of words per sentence.
        suffix: "\n", // Line ending, defaults to "\n" or "\r\n" (win32)
        units: "paragraph", // paragraph(s), "sentence(s)", or "word(s)"
      })
    );
  } else {
    res.json({ message: "Hello World" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
