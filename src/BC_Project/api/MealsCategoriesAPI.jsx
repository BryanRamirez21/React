import axios from "axios"; 

const baseURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const apiMealsCategories = async () => {
    const response = await axios.get(baseURL);
    return response.data;
}

export default apiMealsCategories;
