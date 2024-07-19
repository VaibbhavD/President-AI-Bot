import { run } from "./API/OpenAi";
import { textToSpeech } from "./API/TTS";
import { GetAudioUrl } from "./API/GetAudioAPI";
import { VideoAPI } from "./API/VideoAPI";
import { GetVideoAPI } from "./API/GetVideoAPI";

export async function Biden_Speech(input, context) {
  context.ChangeStatus("Hi there! We're starting your request now...");
  const text = await run(input, context);

  context.ChangeStatus("Now, let's convert this text into speech...");
  const speech = await textToSpeech(text, context);

  context.ChangeStatus("Recording the Response speech...!");
  const Audio = await GetAudioUrl(speech, context);

  context.ChangeStatus("Now, let's get the video...");
  const Video = await VideoAPI(Audio, context);
  context.ChangeStatus("AI Biden Genrating Response Video ...");

  context.ChangeStatus("Almost Done...");
  const data = GetVideoAPI(Video, context);
  return data;
}
