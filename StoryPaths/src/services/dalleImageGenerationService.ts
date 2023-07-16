/*
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
  prompt: "A cute baby sea otter", 
  n: 2,
  size: "1024x1024",
});
// The prompt above will be a combinatin of inputs from the story generation fields
// Ideally we could one-up the resuse of simple strings, but instead pull in the output from 
// the generated story itself, and one paragraph at a time feed those into DALL-E2 to generate
// one time contemporaneious -- in the story -- inmage for each paragraph.
*/