import fetchWithConfig from "../utils/fetch";

//logic matra vayerw ts lekheko html nwchaiyerw ho code matra vayerw
interface category {
  name: string;
  description: string;
}
export async function createNewCategory(category: category) {
  const response = await fetchWithConfig("category", {
    method: "post",
    body: JSON.stringify(category),
  });
  return response;
  // const response = await fetch("http://localhost:3000/category", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(category),
  // });
  // return response.json();
}
export async function getAllCategories() {
  const response = await fetch("http://localhost:3000/category");
  return response.json();
}
