const BASE_URL = "http://localhost:3000";

export const fetchWithConfig = async (url: string, options: any = {}) => {
  const token = localStorage.getItem("token");

  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/${url}`, config);
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    return Promise.reject(error);
  }
};

export default fetchWithConfig;
