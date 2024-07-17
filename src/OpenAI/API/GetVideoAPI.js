export async function GetVideoAPI() {
  try {
    const response = await fetch(
      `https://api.synclabs.so/lipsync/00d6e678-2771-46b9-bd8a-bbc1e9686dad`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "c1fe29de-7151-4688-b559-648a16f28f51",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Get Video:", error);
    throw error; // Propagate the error up to the caller
  }
}
