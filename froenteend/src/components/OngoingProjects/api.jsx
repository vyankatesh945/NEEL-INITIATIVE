import axios from "axios"; // or use fetch if you prefer

// Create an Axios instance with the base URL of your backend
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Backend URL
});

// Example of a GET request to fetch news data
export const fetchNews = async () => {
  try {
    const response = await API.get("news/"); // This matches your /api/news/ route in backend
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Handle errors accordingly
  }
};

// Example of a POST request to create news
export const postNews = async (data) => {
  try {
    const response = await API.post("news/", data); // This matches your /api/news/ route for POST in backend
    return response.data;
  } catch (error) {
    console.error("Error posting news:", error);
    throw error; // Handle errors accordingly
  }
};

// Example of a GET request for blog data (assuming you have a blog endpoint)
export const fetchBlogs = async () => {
  try {
    const response = await API.get("blog/"); // This matches your /api/blog/ route in backend
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error; // Handle errors accordingly
  }
};

// Example of a POST request for creating blog
export const postBlog = async (data) => {
  try {
    const response = await API.post("blog/", data); // This matches your /api/blog/ route for POST in backend
    return response.data;
  } catch (error) {
    console.error("Error posting blog:", error);
    throw error; // Handle errors accordingly
  }
};

export default API; // Export the API instance for reuse in other components
