import { run } from "./API/OpenAi";
import { texttospeech } from "./API/TTS";
import { GetAudioUrl } from "./API/GetAudioAPI";
import { VideoAPI } from "./API/VideoAPI";
import { GetVideoAPI } from "./API/GetVideoAPI";

export async function Biden_Speech(input, ChangeStatus) {
  ChangeStatus("Hi there! We're starting your request now...");
  const text = await run(input);

  ChangeStatus("Now, let's convert this text into speech...");
  const speech = await texttospeech(text);

  ChangeStatus("All done with the speech conversion...!");
  const Audio = await GetAudioUrl(speech);

  ChangeStatus("Now, let's get the video...");
  const Video = await VideoAPI(Audio);
  ChangeStatus(
    "All done! The video processing is complete. Here's the data we received..."
  );
  const data = GetVideoAPI(Video);
  ChangeStatus("AI Biden Genrating Response Video ...");
  console.log(data);
  console.log(text);

  return data;
}
