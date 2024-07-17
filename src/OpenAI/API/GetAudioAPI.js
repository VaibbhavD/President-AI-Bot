export async function GetAudioUrl(input) {
  const apiKey = `810b52860fef4b399b9174a51843d5e6`;
  const userId = `GXWel3DfSfVla6YGq6MknK84kdJ2`;

  async function fetchAudioUrl() {
    const response = await fetch(`https://api.play.ht/api/v2/tts/${input.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: apiKey,
        "X-USER-ID": userId,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("res:", data);
    return data;
  }

  try {
    let data = await fetchAudioUrl();
    while (data.status === "pending") {
      await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait for 10 seconds before checking again
      data = await fetchAudioUrl();
      console.log("pending after 10 sec:", data);
    }

    if (data.status === "complete") {
      console.log("complete:", data);
      return data;
    } else {
      throw new Error("Audio URL generation failed");
    }
  } catch (error) {
    console.error("Error fetching audio URL:", error);
    throw error; // Propagate the error up to the caller
  }
}
