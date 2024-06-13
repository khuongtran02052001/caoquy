import axios from "axios";

export default async function AddSaveArticle(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    try {
      const { articleId } = req.body;
      const token = req.headers.authorization;
      console.log("articleId", articleId);
      if (!articleId) {
        res.status(400).json({ message: "Invalid request body" });
        return;
      }

      const response = await axios.post(
        "http://ec2-18-143-143-173.ap-southeast-1.compute.amazonaws.com:8080/api/v1/saved-articles/add",
        { article: { id: articleId } },
        { headers: { Authorization: token } }
      );
      const data = response.data;

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
