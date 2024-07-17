export async function GetVideoAPI(input) {
  const apiKey = "c1fe29de-7151-4688-b559-648a16f28f51";

  async function fetchVideoStatus(id) {
    const response = await fetch(`https://api.synclabs.so/lipsync/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  }

  try {
    let data = await fetchVideoStatus(input.id);
    while (data.status === "PROCESSING" || data.status === "PENDING") {
      console.log("Status is PROCESSING, waiting...");
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
      data = await fetchVideoStatus(input.id);
    }

    if (data.status === "COMPLETED") {
      console.log(data);
      return data;
    } else {
      throw new Error(`Unexpected status: ${data.status}`);
    }
  } catch (error) {
    console.log("Get Video:", error);
    throw error; // Propagate the error up to the caller
  }
}
