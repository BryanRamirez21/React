import axios from "axios"; 

const baseURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const apiMealsCategories = async () => {
    const options = {
        method: 'GET',
        url: baseURL,
    };

    try {
        const response = await axios(options);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

export default apiMealsCategories;
