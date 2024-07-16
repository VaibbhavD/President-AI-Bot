export async function texttospeech(input) {
  try {
    const res = await fetch(`https://api.play.ht/api/v2/tts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer cf79595fe3c543c3a14986d91dfd000b`,
        "X-USER-ID": `M46j5VIyLeh5xhCiro6KIwdP7i53`,
      },
      body: JSON.stringify({
        text: input,
        voice:
          "s3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json",
        output_format: "mp3",
        voice_engine: "PlayHT2.0",
        speed: 1,
      }),
    });
    const responsedata = await res.json();
    console.log(responsedata);
    const audioUrl = responsedata._links[2].href;
    console.log(audioUrl);
    const TTSRes = {
      Url: audioUrl,
      id: responsedata.id,
      status: responsedata.status,
    };
    return TTSRes;
  } catch (error) {
    console.log(error);
  }
}
