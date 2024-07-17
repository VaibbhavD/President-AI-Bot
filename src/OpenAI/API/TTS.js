export async function texttospeech(input) {
  let s = input;
  if (input.length > 200) {
    s = input.slice(0, 200);
  }

  try {
    const res = await fetch(`https://api.play.ht/api/v2/tts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `810b52860fef4b399b9174a51843d5e6`,
        "X-USER-ID": `GXWel3DfSfVla6YGq6MknK84kdJ2`,
      },
      body: JSON.stringify({
        text: s,
        voice:
          "s3://voice-cloning-zero-shot/9a31f0e2-a084-42bd-bc28-e162fc65daf7/original/manifest.json",
        output_format: "mp3",
        voice_engine: "PlayHT2.0",
        speed: 1,
      }),
    });
    const responsedata = await res.json();
    console.log(responsedata);
    const audioUrl = responsedata._links[2].href;
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
