import axios from "axios"; 

const baseURL = "https://api.edamam.com/api/food-database/v2/parser";

const apiMealsOpts = async (data) => {
    const options = {
        method: 'GET',
        url: baseURL,
        params: {
            app_id: 'ab78aed7',
            app_key: 'a595b80ecd72418b5b5571aa3eb3bc4e',
            ingr: data
        }
    };

    try {
        const response = await axios(options); // Usar method: 'GET' aquí
        return response.data;
    } catch (error) {
        throw error; // Lanza el error para que sea manejado por el código que llama a esta función
    }
}

export default apiMealsOpts;
