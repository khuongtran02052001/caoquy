import axios from "axios";

export default async function fetchCategoryById(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );

  const { categoryId } = req.query;

  if (!categoryId) {
    return res.status(400).json({ message: "categoryId is required" });
  }

  try {
    const response = await axios.get(
      "http://ec2-18-143-143-173.ap-southeast-1.compute.amazonaws.com:8080/api/v1/category/anonymous/get-category",
      {
        params: { categoryId },
      }
    );
    const data = response.data;
    console.log("🚀 ~ category data:", data);
    if (response.status === 200) {
      res.status(200).json(data);
    } else {
      throw new Error("Unexpected status code from API");
    }
  } catch (error) {
    console.log("🚀 ~ error fetching category:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
