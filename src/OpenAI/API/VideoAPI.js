export async function VideoAPI(input) {
  console.log(input.id);
  const data = {
    audioUrl: `https://peregrine-results.s3.amazonaws.com/${input.id}.mp3`,
    videoUrl:
      "https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/f981e00c-428c-11ef-9027-02420a0001d9/gooey.ai%20lipsync.mp4#t=0.001",
    model: "wav2lip++",
  };

  try {
    const response = await fetch("https://api.synclabs.so/lipsync", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const res = await response.json();
      console.log(" Video API Request succeeded");
      return res;
    } else if (response.status === 403) {
      console.log("Request failed with status 403");
    }
  } catch (error) {
    console.error("Request failed", error);
  }
}
