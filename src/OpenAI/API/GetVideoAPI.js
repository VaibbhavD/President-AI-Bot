export async function GetVideoAPI(input) {
  async function fetchVideoStatus(id) {
    const response = await fetch(
      `https://ai-biden.vercel.app/api/proxy?url=${encodeURIComponent(
        `https://api.synclabs.so/lipsync/${id}`
      )}&method=GET`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  }

  try {
    let data = await fetchVideoStatus(input.id);
    while (data.status === "PROCESSING" || data.status === "PENDING") {
      console.log("Video URL PROCESSING, Waiting...");
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
      data = await fetchVideoStatus(input.id);
    }

    if (data.status === "COMPLETED") {
      console.log("Video URL Generated Successfully!");
      return data;
    } else {
      throw new Error(`Unexpected status: ${data.status}`);
    }
  } catch (error) {
    console.log("Get Video:", error);
    throw error;
  }
}
// export async function GetVideoAPI(input) {
//   async function fetchVideoStatus(id) {
//     const response = await fetch(
//       `https://api.synclabs.so/lipsync/${input.id}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "x-api-key": import.meta.env.VITE_API_KEY,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     return response.json();
//   }

//   try {
//     let data = await fetchVideoStatus(input.id);
//     while (data.status === "PROCESSING" || data.status === "PENDING") {
//       console.log("Video URl PROCESSING, Waiting...");
//       await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
//       data = await fetchVideoStatus(input.id);
//     }

//     if (data.status === "COMPLETED") {
//       console.log("Video URL Genrated Successfully !");
//       return data;
//     } else {
//       throw new Error(`Unexpected status: ${data.status}`);
//     }
//   } catch (error) {
//     console.log("Get Video:", error);
//     throw error; // Propagate the error up to the caller
//   }
// }
