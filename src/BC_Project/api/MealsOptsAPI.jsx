import axios from "axios"; 

const baseURL = "https://api.edamam.com/api/food-database/v2/parser";

const apiMealsOpts = async (data) => {
    const params = new URLSearchParams({
        'app_id': 'ab78aed7',
        'app_key': 'a595b80ecd72418b5b5571aa3eb3bc4e',
        'ingr': data.ingredient,
        'nutrition-type': 'cooking',
    });

    data.health.forEach(val => {
        params.append('health', val);
    });

    if(data.calories.trim() != "")
        params.append('calories', data.calories);

    data.category.forEach(val => {
        params.append('category', val);
    });

    const url = `${baseURL}?${params}`;

    const response = await axios.get(url);
    return response.data;
}

export default apiMealsOpts;
