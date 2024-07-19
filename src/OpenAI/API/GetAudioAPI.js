export async function GetAudioUrl(input, context) {
  async function fetchAudioUrl() {
    const response = await fetch(`https://api.play.ht/api/v2/tts/${input.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: import.meta.env.VITE_PLAYHT_API_KEY,
        "X-USER-ID": import.meta.env.VITE_PLAYHT_USER_ID,
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
      await new Promise((resolve) => setTimeout(resolve, 7000)); // Wait for 10 seconds before checking again
      data = await fetchAudioUrl();
      console.log("Status Pending");
    }

    if (data.status === "complete") {
      console.log("Status Completed : Genrated AudioAPI:");
      return data;
    } else {
      context.Setloader(false);
      context.ChangeStatus("Internal Error");
      throw new Error("Audio URL generation failed");
    }
  } catch (error) {
    console.error("Error fetching audio URL:", error);
    context.Setloader(false);
    context.ChangeStatus("Internal Error");
    throw error; // Propagate the error up to the caller
  }
}
