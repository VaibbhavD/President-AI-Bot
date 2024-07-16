export async function GetAudioUrl(input) {
  try {
    const response = await fetch(`https://api.play.ht/api/v2/tts/${input.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer cf79595fe3c543c3a14986d91dfd000b`,
        "X-USER-ID": `M46j5VIyLeh5xhCiro6KIwdP7i53`,
        accept: "application/json   ",
        "Content-Type": "application/json ",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching audio URL:", error);
    throw error; // Propagate the error up to the caller
  }
}
