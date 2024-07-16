import { run } from "./API/OpenAi";
import { texttospeech } from "./API/TTS";
import { GetAudioUrl } from "./API/GetAudioAPI";

export async function Biden_Speech(input) {
  const text = await run(input);
  // console.log(text);
  const speech = await texttospeech(text);
  const Audio = await GetAudioUrl(speech);
  console.log(speech);
  return speech;
}
