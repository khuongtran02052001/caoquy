// pages/api/getLatestDantri.js
import axios from "axios";

export default async function fetchLatestDantri(req, res) {
  // Set up CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );

  // Handle API request
  try {
    const response = await axios.get(
      "http://ec2-18-143-143-173.ap-southeast-1.compute.amazonaws.com:8080/api/v1/article/anonymous/get-latest-dantri?count=6"
    );
    const data = response.data;
    console.log("🚀 ~ data:", data);
    if (response.status === 200) {
      res.status(200).json(data);
    } else {
      throw new Error("Unexpected status code from API");
    }
  } catch (error) {
    console.log("🚀 ~ error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
