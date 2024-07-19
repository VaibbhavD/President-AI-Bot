export async function textToSpeech(input) {
  let s = input;
  if (input.length > 300) {
    s = input.slice(0, 300);
  }
  try {
    const res = await fetch(
      `https://ai-biden.vercel.app/api/proxy?url=${encodeURIComponent(
        "https://api.play.ht/api/v2/tts"
      )}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_PLAYHT_API_KEY}`,
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

    // Check if _links[2] exists
    if (responsedata._links && responsedata._links[2]) {
      const audioUrl = responsedata._links[2].href;
      const TTSRes = {
        Url: audioUrl,
        id: responsedata.id,
        status: responsedata.status,
      };
      console.log("Text to Speech Generated");
      return TTSRes;
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

// export async function textToSpeech(input) {
//   let s = input;
//   if (input.length > 300) {
//     s = input.slice(0, 300);
//   }
//   try {
//     const res = await fetch(`https://api.play.ht/api/v2/tts`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         accept: "application/json",
//         Authorization: import.meta.env.VITE_PLAYHT_API_KEY,
//         "X-USER-ID": import.meta.env.VITE_PLAYHT_USER_ID,
//       },
//       body: JSON.stringify({
//         text: s,
//         voice:
//           "s3://voice-cloning-zero-shot/e6b9f9c7-1ad7-4a76-ab21-0b5e692b550a/original/manifest.json",
//         output_format: "mp3",
//         voice_engine: "PlayHT2.0",
//         speed: 1,
//         emotion: "male_fearful",
//       }),
//     });
//     const responsedata = await res.json();
//     const audioUrl = responsedata._links[2].href;
//     const TTSRes = {
//       Url: audioUrl,
//       id: responsedata.id,
//       status: responsedata.status,
//     };
//     console.log("Text to Speech Genrated");
//     return TTSRes;
//   } catch (error) {
//     console.log(error);
//   }
// }
