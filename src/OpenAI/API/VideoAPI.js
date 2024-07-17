export async function VideoAPI() {
  const url = "https://api.synclabs.so/lipsync";
  const apiKey = "c1fe29de-7151-4688-b559-648a16f28f51";
  const data = {
    audioUrl: `https://peregrine-results.s3.amazonaws.com/54QK8Zlyro9mgKyEqm.mp3`,
    videoUrl:
      "https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/f981e00c-428c-11ef-9027-02420a0001d9/gooey.ai%20lipsync.mp4#t=0.001",
    maxCredits: 101,
    model: "wav2lip++",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Request succeeded with status 201");
      const res = await response.json();
      return res;
    } else if (response.status === 403) {
      console.log("Request failed with status 403");
    }
  } catch (error) {
    console.error("Request failed", error);
  }
}
