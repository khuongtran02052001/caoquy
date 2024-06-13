import { message } from "antd";
import axios from "axios";

export default async function CreateComment(req, res) {
  // Set CORS headers for all responses
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    // Handle preflight request
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    try {
      const { comment } = req.body;
      const { commentId } = req.query; // Extract comment details from request body
      const token = req.headers.authorization; // Extract token from Authorization header

      // Validate request body
      if (!comment) {
        res.status(400).json({ message: "Bạn chưa điền bình luận" });
        message.error("Bạn chưa điền bình luận");
        return;
      }

      // Send request to create comment API
      const response = await axios.post(
        `http://ec2-18-143-143-173.ap-southeast-1.compute.amazonaws.com:8080/api/v1/comment/update?commentId=${commentId}`,
        { comment },
        { headers: { Authorization: token } }
      );
      const data = response.data;
      // Handle response from API
      if (response.status === 200) {
        res.status(200).json(data);
      } else {
        throw new Error("Unexpected status code from API");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 403) {
        res.status(403).json({ message: "Unauthorized" });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
