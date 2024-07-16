// export async function texttospeech(input) {
//   try {
//     const playHtResponse = await axios.post(
//       playHtEndpoint,
//       {
//         text: input,
//         voice:
//           "s3://voice-cloning-zero-shot/50984241-5283-4b67-b9d1-0f29a25d4d78/original/manifest.json",
//         output_format: "mp3",
//         voice_engine: "PlayHT2.0",
//         speed: 1,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: import.meta.env.VITE_PLAYHT_API_KEY,
//           "X-USER-ID": import.meta.env.VITE_PLAYHT_USER_ID,
//         },
//       }
//     );

//     const audioUrl = playHtResponse.data.url;
//     // console.log("Converted Audio URL:", audioUrl);
//     return audioUrl;
//   } catch (error) {
//     console.error("Error converting text to speech:", error);
//   }
// }
export async function texttospeech(input) {
  try {
    const res = await fetch("https://api.play.ht/api/v2/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 77c02ffccf0a4033a3dd57df290afb2b`,
        "X-USER-ID": `Sjb1FAPjSxWGQdPjD9cfTWr5kiF2`,
        accept: "application/json",
      },
      body: JSON.stringify({
        text: input,
        voice:
          "s3://voice-cloning-zero-shot/50984241-5283-4b67-b9d1-0f29a25d4d78/original/manifest.json",
        output_format: "mp3",
        voice_engine: "PlayHT2.0",
        speed: 1,
      }),
    });
    const responsedata = await res.json();
    // console.log(responsedata);
    const audioUrl = responsedata._links[0].href;
    return audioUrl;
  } catch (error) {}
}
