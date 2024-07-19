import fetch from "node-fetch";

export default async function handler(req, res) {
  const { url, method, authorization, xUserId } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  try {
    const response = await fetch(url, {
      method: method || req.method,
      headers: {
        ...req.headers,
        Authorization: authorization || req.headers["authorization"] || "",
        "X-USER-ID": xUserId || req.headers["x-user-id"] || "",
      },
      body: req.method === "POST" ? req.body : undefined,
    });

    const data = await response.json(); // Use `.text()` if the response is not JSON
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
