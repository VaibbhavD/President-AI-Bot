import { run } from "./API/OpenAi";
import { texttospeech } from "./API/TTS";

export async function Biden_Speech(input) {
  const text = await run(input);
  // console.log(text);
  const speech = await texttospeech(text);
  // console.log(speech);
  return speech;
}
