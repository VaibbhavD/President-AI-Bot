export async function GetVideoAPI(input, context) {
  console.log(input.id);
  async function fetchVideoStatus(id) {
    const response = await fetch(`https://api.synclabs.so/lipsync/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${import.meta.env.VITE_API_KEY}`,
      },
    });
    // console.log(response);
    return response.json();
  }

  try {
    let data = await fetchVideoStatus(input.id);
    while (data.status === "PROCESSING" || data.status === "PENDING") {
      console.log("Video URl PROCESSING, Waiting...");
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
      data = await fetchVideoStatus(input.id);
    }

    if (data.status === "COMPLETED") {
      console.log("Video URL Genrated Successfully !");
      return data;
    } else {
      context.Setloader(false);
      context.ChangeStatus("Internal Error", data.status);
      throw new Error(`Unexpected status: ${data.status}`);
    }
  } catch (error) {
    console.log("Get Video:", error);
    context.Setloader(false);
    context.ChangeStatus("Internal Error");
    throw error; // Propagate the error up to the caller
  }
}
