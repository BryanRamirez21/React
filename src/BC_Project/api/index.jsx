import axios from "axios"; 

const baseURL = "https://jfhe88-rfc-generator-mexico.p.rapidapi.com/rest1/rfc/get";

const apiCall = async (params) => {
    const options = {
        method: 'GET',
        url: baseURL,
        params: {
            apellido_materno: params.AMaterno,
            apellido_paterno: params.APaterno,
            fecha: params.FechaN,
            nombre: params.Nombres,
            solo_homoclave: '1'
        },
        headers: {
            'X-RapidAPI-Key': 'f0e0acb914msh15c7e51e9cab0e5p17501ejsnee5b2dc22faa',
            'X-RapidAPI-Host': 'jfhe88-rfc-generator-mexico.p.rapidapi.com'
        }
    };

    try {
        const response = await axios(options); // Usar method: 'GET' aquí
        return response.data;
    } catch (error) {
        throw error; // Lanza el error para que sea manejado por el código que llama a esta función
    }
}

export default apiCall;
