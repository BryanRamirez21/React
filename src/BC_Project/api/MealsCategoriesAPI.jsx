import axios from "axios"; 

const baseURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const apiMealsCategories = async () => {
    const options = {
        method: 'GET',
        url: baseURL,
    };

    try {
        const response = await axios(options); // Usar method: 'GET' aquí
        return response.data;
    } catch (error) {
        throw error; // Lanza el error para que sea manejado por el código que llama a esta función
    }
}

export default apiMealsCategories;
