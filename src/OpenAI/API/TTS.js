export async function textToSpeech(input) {
  let s = input.length > 200 ? input.slice(0, 200) : input;

  try {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.play.ht/api/v2/tts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: import.meta.env.VITE_PLAYHT_API_KEY,
          "X-USER-ID": import.meta.env.VITE_PLAYHT_USER_ID,
        },
        body: JSON.stringify({
          text: s,
          voice:
            "s3://voice-cloning-zero-shot/e6b9f9c7-1ad7-4a76-ab21-0b5e692b550a/original/manifest.json",
          output_format: "mp3",
          voice_engine: "PlayHT2.0",
          speed: 1,
          emotion: "male_fearful",
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const responsedata = await res.json();

    if (!responsedata._links || responsedata._links.length < 3) {
      throw new Error("Unexpected response format");
    }

    const audioUrl = responsedata._links[2].href;
    const TTSRes = {
      Url: audioUrl,
      id: responsedata.id,
      status: responsedata.status,
    };

    console.log("TTS response:", TTSRes);
    return TTSRes;
  } catch (error) {
    console.error("Error in textToSpeech:", error);
    throw error; // Propagate the error up to the caller
  }
}
