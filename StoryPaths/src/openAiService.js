import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: 'ZTjHe9JH4VDUGs4li5YMT3BlbkFJGBnDYQB7TH1nPF95Zjf3',
});
const openai = new OpenAIApi(configuration);

export async function generateStory() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        //prompt: `Create a children's story with the following elements: 1) a hero named ${formData.childName}, 2) a villain who is a ${formData.villain}, 3) a sidekick named ${formData.childSidekick}, 4) set in a ${formData.location} location/setting, 4) suitable for a child of ${formData.childAge} years old, 5) in the voice of ${formData.authorVoice}, and 6) with the theme of ${formData.storyTheme}.`,
        prompt: "Create a children's story with the following elements: 1) a hero named JJ, 2) a villain who is a flying dragon, 3) a sidekick named Leslie, 4) set in a dark forest location/setting, 4) suitable for a child of 7 years old, 5) in the voice of JK Rowling, and 6) with the theme of compassion.\n\nOnce upon a time, there lived a young hero called JJ who lived in a thick forest far away from any other people.\n\nHe was a brave and adventurous soul and always seemed to find himself getting into all kinds of unexpected adventures.\n\nOne day, while exploring the forest, he came across a large dark cave. Curiosity getting the best of him, he ventured in and discovered a giant dragon in the cave, sleeping.\n\nJJ met Leslie, the dragon's sidekick, who warned him not to wake the dragon as this would mean certain death. But as fate would have it, the dragon suddenly awoke, scaring JJ and Leslie alike.\n\nThe dragon was very angry and ready to attack them, when JJ suddenly remembered a lesson that his grandmother had taught him: that compassion can sometimes win the day where all else fails.\n\nHe opened his arms wide and said, \"Please, I don't want to fight. Is there something I can do to help you? Maybe, I can help make your home better?\"\n\nTo JJ's surprise, the dragon softened and paused. Leslie also stopped, realizing that the dragon was listening to JJ. The dragon's expression changed from anger to curiosity.\n\n\"What do you mean?",
        temperature: 0.3,
        max_tokens: 256,
        // top_p: 1,
        n: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        // user_id: "user-id-1234", -- consider later for personalization
    });
    console.log('response', response)
    console.log(response.data);
    return response.data.choices[0].text;
}


