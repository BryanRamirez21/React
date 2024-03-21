import axios from "axios"; 

const baseURL = "https://api.edamam.com/api/food-database/v2/parser";

const apiMealsOpts = async (data) => {
    const params = new URLSearchParams({
        'app_id': 'ab78aed7',
        'app_key': 'a595b80ecd72418b5b5571aa3eb3bc4e',
        'ingr': data.ingredient,
        'nutrition-type': 'cooking',
    });



    if (Array.isArray(data.health)) {
        data.health.forEach(val => {
            params.append('health', val);
        });
    } else if (data.health) {
        params.append('health', data.health);
    }

    if(data.calories.trim() != "")
        params.append('calories', data.calories);

    if (Array.isArray(data.category)) {
        data.category.forEach(val => {
            params.append('category', val);
        });
    } else if (data.category) {
        params.append('category', data.category);
    }



    const url = `${baseURL}?${params}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default apiMealsOpts;
